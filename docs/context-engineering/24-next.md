# 24｜下一站：Agent Engineering

第二册到这里结束。

如果 Context Engineering 真的进入脑子，你看到一个复杂任务时，不会再只问：

> 上下文窗口够不够大？

你会先问：

~~~text
Need       当前决策需要什么？
Source     信息在哪里？
Select     现在应该拿什么？
Shape      应该以什么形态进入？
Budget     什么最值得占注意力？
Lifecycle  什么时候保留、压缩、刷新和删除？
Evaluation 怎么证明策略有效？
~~~

## 接下来为什么自然进入 Agent Engineering

到这一册后半段，我们已经反复遇到：

- 模型发现缺信息后主动调用工具；
- 根据结果决定下一步；
- 更新 Task State；
- 保留或丢弃 Context；
- 阶段结束后重新规划。

这些事情已经不再是“准备一次输入”。

它们形成了循环：

~~~text
Context
  ↓
Model
  ↓
Decision
  ↓
Action
  ↓
Observation
  ↓
State Update
  ↓
Next Context
~~~

这就是 Agent Engineering 的入口。

## 第三册会回答什么

**《Agent Engineering：让模型持续决策与行动》** 会从最小 Agent Loop 开始，逐步进入：

- Tool Use；
- Action / Observation；
- ReAct；
- Planning；
- Reflection；
- State；
- Workflow；
- Subagent；
- Multi-Agent；
- 长任务执行。

第一册教你设计一次模型行为。

第二册教你控制模型看到的世界。

第三册开始，我们让这个世界动起来。
