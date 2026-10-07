# 先记住这一条 Loop

一个最小 Agent 可以画成：

<div class="map-card">

**Goal**：系统最终要把什么事情推进到完成？  
**Context**：这一轮模型看见什么？  
**Decision**：基于当前信息，下一步做什么？  
**Action**：怎样影响外部世界？  
**Observation**：行动之后发生了什么？  
**State**：哪些事实和进度要被更新？  
**Feedback**：怎样判断这一步是否有效？  
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

## 常见概念挂在哪里

| 概念 | 主要改变什么 |
|---|---|
| Function Calling / Tool Use | Action |
| ReAct | Decision + Action + Observation Loop |
| Planning | Decision + State |
| Reflection | Feedback + Decision |
| Evaluator-Optimizer | Feedback + Loop |
| Routing | Decision |
| Workflow | 显式控制 Loop |
| Memory | State + Context |
| Human-in-the-loop | Feedback + Control |
| Subagent | 把子任务交给另一个 Loop |
| Multi-Agent | 多个 Loop 的协作 |
| MCP | Action / Context 的标准接口 |
| Harness | 给整个 Loop 加运行约束 |

设计时沿着 Loop 正向走。

调试时，从失败发生的节点向前追。

如果这条 Loop 已经能自动出现在脑子里，新的 Agent 名词就很难再把你弄乱。
