# 01｜Model 不是 Agent

大模型本身不会“持续完成任务”。

你给它一段输入，它生成一次输出。到这里，一次模型调用就结束了。

如果输出里写着“下一步应该查询数据库”，模型也不会自己真的去查。除非外部系统读取这个决定、执行动作，再把结果交回模型。

所以：

> **Model 是决策能力，Agent 是围绕这种能力搭起来的运行系统。**

## 单次调用是什么

最简单的 LLM Application：

~~~text
Input → Model → Output
~~~

它可以非常强，但没有持续行动能力。

## Agent 多了什么

Agent 至少加入：

~~~text
Context
↓
Model decides
↓
Action
↓
Environment changes
↓
Observation
↓
Model decides again
~~~

关键变化不是“模型更聪明”，而是系统允许模型的输出影响下一轮输入。

## 为什么这个区分重要

如果把 Model 和 Agent 混为一谈，很容易把系统问题错怪给模型：

- 工具超时，没有重试机制；
- 状态丢失，没有 Checkpoint；
- Agent 一直循环，没有停止条件；
- Context 被旧工具日志塞满；
- 权限过大，模型能执行危险动作。

这些都不是“换更强模型”能直接解决的。

## 地图坐标

Model 位于 **Decision**。

Agent Engineering 研究的是 Decision 前后那一整圈系统。
