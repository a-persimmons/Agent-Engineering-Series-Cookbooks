# 23｜完整项目：给 Mini Coding Agent 建一套 Eval Lab

前四册里，我们一步步做出了一个 Mini Coding Agent。

它已经有：

- Context；
- Tool；
- Loop；
- State；
- Feedback；
- Permission；
- Sandbox；
- Retry；
- Checkpoint；
- Trace。

现在最大的危险不是“它没有功能”。

而是：

> 每次改一点东西，我们都不知道它究竟变好了，还是只是换了一种失败方式。

所以这一章不再给 Agent 增加能力。

只给它增加一套**能够证明能力变化的系统**。

## V0：先定义 Target

不要从“准备 100 个 Case”开始。

先定什么值得优化：

~~~text
Correctness
- 任务最终完成
- 目标测试通过

Safety
- 不访问越权路径
- 高风险 Action 必须审批

Reliability
- Tool Error 能正确恢复
- Crash 后能 Resume
- 写操作不重复副作用

Efficiency
- 步数、时间、成本在预算内
~~~

**地图：Target。**

## V1：让 Cases 覆盖真实风险

先做 50 个任务：

- 20 个常规 Bug；
- 10 个跨文件修改；
- 5 个信息不足；
- 5 个 Tool Error；
- 5 个权限边界；
- 5 个历史真实失败。

并标记：

~~~text
case_id
task_type
risk
repo_size
needs_tool
historical_failure
~~~

**地图：Cases。**

## V2：给每个 Case 定义 Rubric

不是统一一句“是否完成”。

例如 Bug 修复：

~~~text
required:
- target behavior fixed
- related tests pass
- no unrelated destructive change

quality:
- change scope reasonable
- explanation matches actual diff
~~~

权限 Case 则有完全不同的 Rubric。

**地图：Rubric。**

## V3：决定要采哪些 Signals

只保存最终回答远远不够。

每次 Run 保存：

- Final Result；
- Test Result；
- Context / Retrieval；
- Tool Calls；
- Tool Results；
- State Diff；
- Harness Events；
- Step Count；
- Cost / Latency；
- Stop Reason；
- Full Trace。

**地图：Signals。**

## V4：能程序判断的先程序判断

确定性检查：

- 测试是否通过；
- 是否修改目标文件；
- 是否越权；
- 是否超过 max steps；
- Tool 参数是否合法；
- Resume 后 operation id 是否重复。

开放语义再用 LLM Judge：

- 修改是否真正符合需求；
- 是否出现无关大改；
- 解释是否和 diff 一致。

**地图：Rubric → Judgment。**

## V5：Metrics 不只看总成功率

Dashboard 至少按 Slice 看：

~~~text
Task Success
High-risk Failure Rate
Tool Selection Error
Repeat Action Rate
Recovery Success
Average Steps
P95 Latency
Average Cost
~~~

普通 Bug 和高风险权限 Case 分开看。

**地图：Metrics。**

## V6：所有失败必须归类

某次失败：

> 测试通过，但 Agent 修改了三个无关文件。

不是简单记：

~~~text
score = 0
~~~

而是：

~~~text
Failure Type = Excessive Change Scope
Layer = Agent / Decision
Evidence = diff
~~~

**地图：Failure Taxonomy。**

## V7：建立 Baseline

固定：

~~~text
agent_version = v1
model = ...
dataset = eval-v1
rubric = rubric-v1
toolset = tools-v3
harness = harness-v2
~~~

保存逐 Case 结果和 Trace。

以后任何版本必须和 Baseline 在同一条件下比较。

**地图：Regression。**

## V8：验证一次“看起来合理”的优化

现在增加 Reflection，希望减少测试失败后的重复动作。

跑 Candidate：

~~~text
成功率       +3%
重复动作     -40%
平均成本     +28%
P95 延迟     +35%
高风险错误    不变
~~~

这时才出现真正的工程问题：

> 质量提升值不值得 28% 的成本？

Eval 没替你做业务决策，但第一次让这个决策有证据。

## V9：让 Production 继续出题

上线后出现新问题：

> 大型仓库中 Search Agent 会重复扫描同一目录。

保存 Trace。

归类：

~~~text
Failure Type = Redundant Repository Scan
Slice = Large Repo
Layer = Agent / State
~~~

把它加入 Dataset。

**地图：Production Feedback。**

## V10：让失败真正变成能力

修复：

- Search State 记录已扫描目录；
- 增加重复扫描检测；
- 新增 Regression Case。

以后每次 Agent、Model、Tool、Prompt 或 Harness 改动，这条 Case 都重新执行。

**地图：Improvement Loop。**

## 最后的闭环

~~~text
Target
↓
Cases
↓
Rubric
↓
Signals
↓
Metrics
↓
Failure
↓
Engineering Change
↓
Regression
↓
Production
↓
New Failure
└────────→ New Case
~~~

到这里，Evaluation 不再是“测一测 Agent”。

它开始承担更重要的职责：

> **让整个系统能够从失败里积累，而不是每一代都重新踩坑。**
