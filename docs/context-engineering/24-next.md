# 24｜下一站：Agent Engineering

第二册到这里结束。

现在再看“上下文”这个词，它应该已经不再等同于一段很长的输入。

更准确的画面是：模型每做一次决定，系统都在为它临时搭建一个工作台。

工作台上只放当前需要的材料：

~~~text
Need       这一轮到底要判断什么？
Source     信息在哪里？
Select     哪些现在值得拿进来？
Shape      以什么形态最容易使用？
Budget     什么最值得占据注意力？
Lifecycle  什么时候更新、压缩和丢弃？
Evaluation 怎么证明这套选择有效？
~~~

模型完成动作以后，工作台又会变化。

## 为什么下一步自然是 Agent Engineering

到这一册后半段，我们已经多次碰到同一个循环：

- 模型发现缺信息；
- 调用工具；
- 得到观察结果；
- 更新 Task State；
- 选择新的 Context；
- 再决定下一步。

把它画出来：

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

当这个循环开始持续运行，问题就从“怎样构造一次 Context”，变成：

> **怎样设计一个能够持续判断、行动、观察和修正的系统？**

这就是第三册的起点。

## 第三册会从最小 Loop 开始

**《Agent Engineering：让模型持续决策与行动》** 会依次进入：

- Tool Use；
- Action / Observation；
- ReAct；
- Planning；
- Reflection；
- State；
- Workflow；
- Subagent；
- Multi-Agent；
- Long-running execution。

第一册，我们学习怎样把一次模型行为说清楚。

第二册，我们学习怎样让模型在每一步看到对的世界。

第三册开始，让它在这个世界里行动。
