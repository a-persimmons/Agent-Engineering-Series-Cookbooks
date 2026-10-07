# 21｜Multi-Agent：多个 Loop 怎样协作

Multi-Agent 不是“把角色名字写成研究员、工程师、评审员，然后让它们聊天”。

真正的问题是控制权和信息怎样流动。

## 常见结构

### Supervisor / Worker

Supervisor 分配任务，Worker 返回结果。

适合明确的层级任务。

### Planner / Executor

Planner 管计划，Executor 负责动作。

适合长任务。

### Generator / Critic

一个生成，一个评估。

适合质量迭代。

### Peer Collaboration

多个 Agent 相互交换信息。

灵活，但更难控制。

## 多 Agent 最容易膨胀的是 Context

如果每个 Agent 都共享所有历史：

- token 成本成倍增长；
- 子任务互相污染；
- 很难知道某个结论从哪里来。

更合理的方式是定义通信合同：

~~~text
Task
Evidence
Result
Open Questions
Status
~~~

Agent 之间交换任务相关信息，而不是整段对话。

## 什么时候不需要 Multi-Agent

如果一个 Agent 加几个明确工具就能完成，不要因为“多 Agent 更先进”而拆。

多个 Loop 会增加：

- 协调；
- 状态同步；
- 失败传播；
- 评测复杂度。

## 地图坐标

Multi-Agent 是多个 **Goal / Context / Decision / Action Loop** 的组合。

核心仍然是最初那条 Loop，只是控制拓扑变复杂了。
