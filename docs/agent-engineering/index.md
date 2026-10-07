# Agent Engineering：让模型持续决策与行动

> 一个模型能回答问题，不等于一个系统能完成任务。Agent Engineering 研究的是：怎样让模型在目标约束下持续判断、行动、观察、更新状态，并知道什么时候停下来。

这一册不从 LangChain、LangGraph、Agents SDK 或任何框架开始。

先记住一条最小循环：

![Agent Engineering 最小 Loop](/diagrams/agent/core-loop.svg)

**Goal → Context → Decision → Action → Observation → State → Feedback → Next Loop**

ReAct、Planning、Reflection、Workflow、Subagent、Multi-Agent，都会从这条 Loop 上长出来。

## 读完后应该形成三种反射

### 架构反射

看到一个任务，先判断：

> 下一步是否必须根据中间结果动态决定？

如果不是，固定 Workflow 可能比 Agent 更合适。

### 运行时反射

看到 Agent 行为，脑子里会自动拆成：

> 它当时看见什么 → 做了什么决定 → 执行了什么 → 环境返回什么 → 状态怎么变 → 为什么继续或停止。

不再只看最终答案。

### 诊断反射

看到失败，不会只说“模型不够聪明”。

而会定位：

- Goal 漂了；
- Context 错了；
- Decision 错了；
- Tool 执行错了；
- Observation 丢信息；
- State 没更新；
- Feedback 没进入下一轮；
- Loop 没有停止边界。

## 怎么读

最好边读边写一个几十行的 Mini Agent。

不要一开始用框架。

从：

~~~text
Model
↓
Tool
↓
Result
~~~

逐步长成：

~~~text
Goal
↓
State
↓
Context
↓
Decision
↓
Action
↓
Observation
↓
Feedback
↓
Loop
~~~

到第 23 章，我们会把它推进成一个 Mini Coding Agent。

那时再去看 LangGraph 或 Agents SDK，你看到的就不再是 API，而是它们替你封装的运行时原语。
