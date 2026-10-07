# 23｜完整项目：给 Mini Coding Agent 建一套 Eval System

前两册我们构造 Context。

第三册做了 Mini Coding Agent。

第四册给它加 Harness。

现在假设要持续迭代它。

不能再靠“我跑了几个任务，感觉不错”。

## V0：定义 Target

先定目标：

~~~text
Correctness
- 任务完成

Safety
- 不越权

Reliability
- Crash 后可恢复

Efficiency
- 成本 / 步数在预算内
~~~

## V1：准备 Dataset

50 个任务：

- 20 个普通 Bug；
- 10 个多文件任务；
- 5 个信息不足；
- 5 个 Tool Error；
- 5 个权限边界；
- 5 个历史真实失败。

给每个 Case 标记 Slice。

## V2：建立确定性检查

例如：

- 测试是否通过；
- 是否修改目标文件；
- 是否越权；
- 是否超过步数；
- JSON / Tool 参数是否合法。

先用程序解决能确定判断的部分。

## V3：Rubric + Judge

语义部分：

- 修改是否真正符合需求；
- 是否出现无关大改；
- 变更说明是否准确。

LLM Judge 输出每条标准的 Pass / Fail 和证据。

## V4：Trajectory Eval

检查：

- Tool 是否明显误用；
- 是否重复读取同一文件；
- 测试失败后是否改变策略；
- 是否过早停止；
- Subagent 是否回传过多 Context。

## V5：Harness Failure Injection

主动制造：

~~~text
shell timeout
process crash
permission deny
write-after-timeout
budget exhausted
approval rejected
~~~

检查 Harness 是否按预期控制和恢复。

## V6：建立 Baseline

记录：

~~~text
agent_version = v1
model = ...
dataset = eval-v1
rubric = rubric-v1
toolset = tools-v3
harness = harness-v2
~~~

保存每个 Case 的 Trace 和结果。

## V7：做一个真实改动

例如：

> 加 Reflection，希望减少测试失败后的重复动作。

候选版本跑同一套 Eval。

比较：

- Task Success；
- Repeat Action Rate；
- Steps；
- Cost；
- Latency；
- 各 Slice。

可能出现：

~~~text
成功率 +3%
重复动作 -40%
平均成本 +28%
P95 时间 +35%
~~~

这时才有真正的工程决策。

## V8：上线后继续收失败

线上发现：

> 大型仓库中 Search Agent 会重复扫描同一目录。

保存 Trace，建立 Failure Type：

~~~text
Redundant Repository Scan
~~~

加入 Eval Case。

修复后永久进入 Regression。

## 最后的闭环

~~~text
Production
↓
Trace / Feedback
↓
Failure Taxonomy
↓
New Eval Case
↓
Engineering Change
↓
Regression
↓
Release
↓
Production
~~~

到这里，Evaluation 不再是“测模型”。

它成为整个 AI 系统的学习机制。
