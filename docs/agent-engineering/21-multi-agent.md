# 21｜Multi-Agent：当多个 Loop 形成长期协作结构

Subagent 可以是一锤子买卖：交任务，拿结果，结束。

Multi-Agent 更关心多个 Agent 长期怎样分工、交换状态和决定控制权。

![Multi-Agent 的关键不是数量，而是 Loop 之间的协调](/diagrams/agent/subagent-topology.svg)

## 常见协作拓扑

### Supervisor / Worker

Supervisor 持有全局 Goal 和任务分配权。

Worker 只处理局部任务。

### Planner / Executor

Planner 维护计划，Executor 负责实际 Action。

### Generator / Critic

一个生成，一个评估或挑战结果。

### Peer Collaboration

多个 Agent 平级交换信息和协商。

自由度最大，也最难调试。

## 真正困难的是通信协议

如果 Agent 之间只是“互相聊天”，系统很快会失控。

更清楚的通信对象是：

~~~text
Task
Current State
Result
Evidence
Open Questions
Status
~~~

也就是交换工作产物，而不是交换所有思考和历史。

## 多 Agent 会引入新的 State 问题

必须决定：

- 谁拥有全局 State；
- 谁能修改计划；
- 子状态何时合并；
- 冲突由谁裁决；
- 某个 Agent 失败是否影响全局任务。

这些问题比“创建几个 Agent 实例”重要得多。

## 什么时候不要用 Multi-Agent

如果一个 Agent 加少量 Tool 已经能稳定完成任务，不要为了角色丰富而拆。

多个 Loop 意味着更多：

- Context；
- 状态同步；
- 成本；
- 失败传播；
- Eval 维度。

## 地图坐标

Multi-Agent 是最小 Loop 的**拓扑扩展**。

基础没有变，难度来自多个 Loop 之间的 Goal、State 和 Feedback 怎样协调。
