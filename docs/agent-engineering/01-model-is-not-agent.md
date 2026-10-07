# 01｜Model 不是 Agent

大模型很容易让人产生一种错觉：它既然能说出“下一步应该查数据库”，似乎就已经具备了完成任务的能力。

但模型说完这句话之后，什么也不会发生。

它不会真的去查数据库，不会看到查询结果，也不会因为结果和预期不同而改下一步。一次模型调用到输出为止就结束了。

这就是 Model 和 Agent 之间最先要切开的边界。

## Model 提供的是判断能力

最简单的 LLM Application：

~~~text
Input → Model → Output
~~~

它可以回答、总结、分析、生成代码。

这些能力都很强，但它们发生在一次调用里。

## Agent 多了一整圈运行系统

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
State changes
↓
Model decides again
~~~

真正让系统“持续完成任务”的，不是模型多了一种神秘能力，而是模型的输出开始影响外部世界，而外部世界又重新影响下一轮模型输入。

## 这一区分会改变 Debug 方式

如果把 Model 和 Agent 混在一起，很多问题都会被误诊成“模型不够聪明”。

例如：

- 工具超时以后没有重试；
- Action 已经成功，State 却没有更新；
- Agent 一直重复同一步；
- Context 被旧日志塞满；
- 高风险 Tool 没有权限边界。

这些首先是运行系统的问题。

换更强模型可能偶尔掩盖它们，却不会让缺失的机制凭空出现。

## 地图坐标

Model 位于 **Decision**。

Agent Engineering 真正研究的，是 Decision 前后那一整条 Loop。
