# 24｜从一句 Prompt，到一个能从失败里积累能力的系统

这个系列最开始，只想解决一个很小的问题。

很多人已经会用 AI，也听过 Few-shot、CoT、Role、XML、RAG、Agent。

可真正遇到自己的任务时，脑子里还是没有一张地图。

知识很多，彼此却没有位置。

所以第一册没有从技巧开始。

它从一个问题开始：

> 我到底在控制什么？

一路走到现在，五本书其实一直在回答同一件事，只是观察尺度越来越大。

---

## 第一册：先把一次模型行为设计清楚

**Prompt Engineering**

~~~text
Goal
→ Context
→ Process
→ Output
→ Constraints
→ Evaluation
~~~

这里第一次把“写提示词”改成了“设计行为”。

面对任务，不再先找模板，而是先问：

> 要完成什么？需要知道什么？怎样处理？交付什么？边界在哪？怎样验收？

---

## 第二册：当“一次输入”开始装不下整个世界

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

问题从：

> Prompt 里该写什么？

变成：

> 这一轮模型到底应该看见什么？

RAG、Memory、History、Tool Result、Compaction 从此不再是孤立技术。

它们都在参与同一件事：构造当前决策的工作集。

---

## 第三册：当模型需要真的去做事

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

一次回答变成了持续运行。

ReAct、Planning、Reflection、Subagent、Multi-Agent，也开始有了位置。

它们不是“高级 Agent 技巧”。

只是这条 Loop 的不同组织方式。

---

## 第四册：当行动能力开始带来真实风险

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

我们开始把：

> “希望 Agent 不要这么做”

改成：

> “系统根本不允许它这么做。”

把提醒变成权限，把祈祷变成 Timeout，把经验变成 Recovery，把过程变成 Trace。

Agent 没因此更聪明。

但它第一次开始像可靠软件。

---

## 第五册：当“感觉变好了”已经不够

**Evaluation Engineering**

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

这里把前四册重新连了回来。

因为任何系统最终都会失败。

真正的差别不是：

> 有没有失败。

而是：

> **一次失败以后，系统有没有留下比以前更多的能力。**

---

# 五张地图，其实是一张图

把五册压到一起：

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

这就是整个系列最后想留下的地图。

以后模型会继续换。

框架会继续换。

今天热门的 Agent Pattern，也会有新的名字。

但新东西进来时，你已经不需要重新从零开始。

你只需要问：

> 它解决这张图上的哪个问题？

系统失败时，再问：

> 第一次出错发生在哪一层？

修复完成后，最后问：

> 这个失败已经变成 Regression 或系统机制了吗？

如果这三个问题已经会自然出现，那么这套系列真正要做的事情，就已经完成了。

你不再拥有一袋 AI 技巧。

你开始拥有一张可以继续生长的地图。
