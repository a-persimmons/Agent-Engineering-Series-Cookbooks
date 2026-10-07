# 23｜完整项目：从 80 行 Loop 长成一个 Mini Coding Agent

我们用一个项目把整册串起来。

目标：

> 给 Agent 一个代码仓库和任务，让它能查文件、修改代码、运行测试，并在验证后结束。

## V0：模型给建议

~~~text
User → Model → “你应该修改 parser.py”
~~~

它会分析，但不会真正完成任务。

## V1：加入 Action

提供三个工具：

- list_files；
- read_file；
- write_file。

模型终于能改代码。

**地图：Action。**

## V2：加入 Loop

~~~text
Decision
↓
Tool Call
↓
Observation
↓
Next Decision
~~~

模型可以先读文件，再决定改哪里。

**地图：Loop。**

## V3：加入测试工具

增加 run_tests。

修改后不再让模型自己判断“应该好了”，而是用测试提供环境 Feedback。

**地图：Observation + Feedback。**

## V4：加入显式 State

保存：

~~~text
Goal
Current Plan
Files Changed
Tests Run
Known Failures
Next Step
~~~

Context 不再完全依赖历史消息。

**地图：State。**

## V5：加入 Planning

复杂任务先生成简短计划。

每完成一步更新状态；如果测试出现新问题，允许 Replan。

**地图：Decision + State。**

## V6：加入 Stop Conditions

结束必须满足：

- 目标代码已修改；
- 相关测试通过；
- 没有未解释失败；
- 变更摘要已生成。

同时设：

- max steps；
- time budget；
- tool budget。

**地图：Loop Exit。**

## V7：加入 Error Recovery

工具错误分类：

- 参数错误 → 修参数；
- 测试失败 → 读失败信息；
- 文件冲突 → 重新读取；
- 权限错误 → 停止并报告。

不再统一“重试一次”。

## V8：加入 Subagent

主 Agent 遇到大仓库时，可以把“定位相关代码”交给一个只读 Search Agent。

Search Agent 返回：

~~~text
Relevant Files
Relevant Symbols
Evidence
Open Questions
~~~

主 Agent 不接收它的完整历史。

## 最小架构

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

到这里，它已经很像一个简化版 Coding Agent。

但还缺一层东西：

> 权限、沙箱、重试上限、预算、Checkpoint、恢复、审计、可观测性，应该怎样成为可靠的运行环境？

这正是下一册的主题。
