# 23｜完整项目：从 80 行 Loop 长成一个 Mini Coding Agent

目标：

> 给 Agent 一个代码仓库和任务，让它能查文件、修改代码、运行测试，并在验证后结束。

我们不一次性搭完整系统，而是让真实失败推动它生长。

## V0：模型只给建议

~~~text
User → Model → “你应该修改 parser.py”
~~~

分析可能是对的，但世界没有变化。

缺失节点：**Action**。

## V1：让它真正行动

增加：

- list_files；
- read_file；
- write_file。

模型终于能改文件。

~~~text
Decision → Action
~~~

很快出现新问题：它读一次文件、改一次，就结束了。

缺失节点：**Loop**。

## V2：把 Tool Result 放回下一轮

~~~text
Decision
↓
Tool Call
↓
Observation
↓
Next Decision
~~~

现在它可以：

> 找文件 → 读文件 → 决定修改 → 写文件。

但“写完”不等于“修好”。

缺失节点：**Feedback**。

## V3：让环境验证

增加 run_tests。

修改后必须运行相关测试。

~~~text
Action: write_file
↓
Observation: file changed
↓
Action: run_tests
↓
Feedback: 2 tests failed
~~~

测试让 Agent 第一次知道自己没有完成任务。

但几轮以后，历史越来越长，Agent 开始忘记哪些文件改过、哪些失败已经处理。

缺失节点：**State**。

## V4：把进度拿出聊天记录

显式保存：

~~~text
Goal
Current Plan
Files Changed
Tests Run
Known Failures
Confirmed Facts
Next Step
~~~

每轮 Context 从 State 动态构建。

Agent 不再依靠“翻聊天记录”找进度。

## V5：加入 Planning

复杂任务先生成一个短计划。

~~~text
Plan
↓
Execute Step
↓
Observe
↓
Update State
↓
Keep / Revise Plan
~~~

ReAct 负责局部动作，Plan 负责整体方向。

但新的问题出现：它有时已经完成，还会继续优化。

缺失节点：**Stop**。

## V6：定义完成与硬边界

完成条件：

1. 目标代码已修改；
2. 相关测试通过；
3. 没有未解释失败；
4. 生成变更摘要。

同时加入：

- max steps；
- time budget；
- tool budget。

Loop 第一次有了真正出口。

## V7：错误不再统一“重试”

工具错误被分类：

- 参数错误 → Repair；
- 测试失败 → Read Feedback；
- 文件冲突 → Re-read；
- 权限错误 → Stop / Ask Human；
- 临时失败 → Limited Retry。

这里强化的是：

**Observation → Feedback → Decision**。

## V8：把搜索子任务隔离出去

大仓库里，定位文件会产生大量 Context。

增加只读 Search Subagent：

~~~text
Main Agent
   ↓ task
Search Agent
   ↓
Relevant Files
Relevant Symbols
Evidence
Open Questions
   ↓
Main Agent
~~~

主 Agent 不接收搜索过程的全部历史。

这里强化的是：

**Context Isolation + Subagent Loop**。

## 最终地图

~~~text
                Goal
                 ↓
              State
                 ↓
            Build Context
                 ↓
              Model
                 ↓
             Decision
                 ↓
        ┌────────┴────────┐
        │                 │
      Action            Final?
        │                 │
     Execute              │
        │                 │
   Observation            │
        ↓                 │
     Feedback             │
        ↓                 │
    Update State          │
        └────→ Loop ──────┘
~~~

这时它已经像一个简化版 Coding Agent。

接下来真正棘手的，不再是“它会不会调用工具”。

而是：

> 权限、沙箱、重试上限、预算、Checkpoint、恢复、审计和长任务运行，怎样变成一个可靠的执行环境？

这就是 Harness Engineering。
