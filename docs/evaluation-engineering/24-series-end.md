# 24｜从一句 Prompt，到一个能从失败里学习的工程系统

整个系列最开始的问题很小：

> 我怎样才能真正学会 Prompt Engineering，而不是记住 Few-shot、CoT、XML 这些零散技巧？

如果一路读到这里，问题已经扩大了很多。

不是因为我们不断加入新名词。

而是因为真实任务会自然把一个问题推向下一个问题。

## 第一层：先把一次行为设计清楚

**Prompt Engineering**

~~~text
Goal
→ Context
→ Process
→ Output
→ Constraints
→ Evaluation
~~~

我们从“怎么把 Prompt 写漂亮”转向：

> 怎样把人的模糊意图，变成模型可执行、可约束、可验证的任务。

## 第二层：模型每一轮应该看到什么

当资料、历史和状态越来越多，Prompt 本身不够了。

**Context Engineering**

~~~text
Need
→ Source
→ Select
→ Shape
→ Budget
→ Lifecycle
→ Evaluation
~~~

问题变成：

> 怎样让有限注意力只承载当前决策真正需要的世界。

## 第三层：让模型真的行动起来

当下一步必须根据中间结果决定，固定 Workflow 不够了。

**Agent Engineering**

~~~text
Goal
→ Context
→ Decision
→ Action
→ Observation
→ State
→ Feedback
→ Loop
~~~

问题变成：

> 怎样让模型持续判断、行动、观察和修正。

## 第四层：让这种行动长期可控

Agent 一旦真的碰环境，可靠性问题全部出现。

**Harness Engineering**

~~~text
Permission
→ Isolation
→ Validation
→ Limits
→ Recovery
→ Persistence
→ Observability
→ Evaluation
~~~

问题变成：

> 怎样让 Agent 即使判断错、Tool 失败、进程中断，也不会轻易失控。

## 第五层：怎样证明整个系统真的在进步

最后来到 **Evaluation Engineering**：

~~~text
Target
→ Cases
→ Rubric
→ Signals
→ Metrics
→ Failure Taxonomy
→ Regression
→ Production Feedback
→ Improvement Loop
~~~

问题变成：

> 怎样把一次真实失败，变成下一版系统不容易再犯的能力。

## 五张地图，其实是一张更大的地图

~~~text
Human Intent
     ↓
Task / Prompt
     ↓
Runtime Context
     ↓
Model Decision
     ↓
Agent Action
     ↓
Harnessed Execution
     ↓
Real World
     ↓
Observation / Trace
     ↓
Evaluation
     ↓
Failure / Feedback
     ↓
Engineering Change
     ↓
Regression
     └────────────→ Next Version
~~~

从这个角度看，Prompt、Context、Agent、Harness、Evaluation 从来不是五个独立流行词。

它们只是同一个 AI 系统在不同尺度下的问题。

## 真正值得带走的三种习惯

以后再出现新的概念、论文、框架或设计模式，不必急着把它加入“待学习清单”。

先问：

> **它解决这张地图上的哪个问题？**

系统失败时，不先找一个新技巧。

先问：

> **失败第一次发生在哪一层？**

修复完成以后，再问最后一个问题：

> **这个失败有没有变成一个以后会自动重跑的 Case，或者一个系统再也越不过去的机制？**

技术会继续换名字。

模型会继续更新。

框架也会不断重写。

真正让人不容易迷路的，不是记住更多名词。

而是脑子里已经有地方安放它们。
