# 先记住这一条 Loop

Agent Engineering 可以先压缩成一条循环：

![Agent Engineering 最小 Loop](/diagrams/agent/core-loop.svg)

<div class="map-card">

**Goal**：系统最终要把什么事情推进到完成？  
**Context**：这一轮模型看见什么？  
**Decision**：基于当前信息，下一步做什么？  
**Action**：怎样影响外部世界？  
**Observation**：行动之后发生了什么？  
**State**：哪些事实和进度要被更新？  
**Feedback**：怎样判断这一步有没有推进 Goal？  
**Loop**：继续、重试、改计划，还是停止？

</div>

~~~text
                Goal
                 │
                 ↓
              Context
                 ↓
          Model / Decision
                 ↓
               Action
                 ↓
            Environment
                 ↓
            Observation
                 ↓
              State
                 ↓
             Feedback
                 │
          ┌──────┴──────┐
          │             │
       Continue        Stop
          │
          └──→ Next Context
~~~

## 设计时：顺着 Loop 走

遇到一个任务，不要先问“用 ReAct 还是 LangGraph”。

先问：

1. Goal 是什么，怎样算完成？
2. 每一轮需要什么 Context？
3. 哪些 Decision 需要模型做？
4. Agent 能执行哪些 Action？
5. Action 后怎样形成可信 Observation？
6. 哪些 State 必须显式保存？
7. 什么 Feedback 能告诉系统“方向对不对”？
8. 什么条件继续，什么条件停止？

技术名词应该在这些问题之后出现。

## 调试时：从失败节点往回查

~~~text
结果错了
↓
Stop 太早？
↓
Feedback 没识别失败？
↓
State 更新错了？
↓
Observation 失真？
↓
Action 执行错？
↓
Decision 选错？
↓
Context 不对？
↓
Goal 一开始就含糊？
~~~

同一张图既用来设计，也用来 Debug。

## 常见概念挂在哪里

| 概念 | 主要改变什么 |
|---|---|
| Function Calling / Tool Use | Action |
| ReAct | Decision + Action + Observation |
| Planning | Decision + State |
| Reflection | Feedback + Decision |
| Evaluator-Optimizer | Feedback + Loop |
| Routing | Decision |
| Workflow | 显式控制 Loop |
| Memory | State + Context |
| Human-in-the-loop | Feedback + Control |
| Subagent | 一个 Loop 委派另一个 Loop |
| Multi-Agent | 多个 Loop 的协作拓扑 |
| MCP | Action / Context 的标准接口 |
| Harness | 给整个 Loop 加运行约束 |

真正要练成的不是背这张表，而是看到任何新模式都会问：

> **它到底改变了 Loop 的哪个节点？**

当这个问题会自动出现，Agent 的术语就开始收束成体系。
