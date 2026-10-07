# Agent Engineering：让模型持续决策与行动

> 一个模型能回答问题，不等于一个系统能完成任务。Agent Engineering 研究的是：怎样让模型在目标约束下持续判断、行动、观察、更新状态，并知道什么时候停下来。

这一册不从 LangChain、LangGraph、Agents SDK 或任何框架开始。

先记住一条最小循环：

**Goal → Context → Decision → Action → Observation → State → Feedback → Next Loop**

后面遇到 ReAct、Planning、Reflection、Workflow、Subagent、Multi-Agent，都先问：

> 它改变了这条循环里的哪一部分？

## 读完以后，你应该能做到什么

1. 从零手写一个最小 Agent Loop。
2. 分清 Chatbot、Workflow 与 Agent。
3. 知道 Tool、Observation、State、Feedback 各自负责什么。
4. 能解释 ReAct、Planning、Reflection 为什么出现，而不是只会调用框架 API。
5. 能判断一个任务到底需要 Agent，还是固定 Workflow 更合适。
6. 能对 Agent 的轨迹进行 Debug、Eval 和失败分类。
7. 能看懂 LangGraph、Agents SDK 等框架到底替你封装了什么。

第三册的目标不是“会更多 Agent 框架”，而是让你能自己画出运行时。
