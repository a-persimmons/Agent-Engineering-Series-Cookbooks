# 24｜从一句 Prompt 到一个会进化的 AI 系统

整个系列到这里完成第一轮闭环。

最开始，我们只有一句 Prompt。

后来问题一层层出现。

## 第一册：Prompt Engineering

我们问：

> 怎样把人的意图变成模型可执行、可约束、可验证的任务？

地图：

~~~text
Goal
→ Context
→ Process
→ Output
→ Constraints
→ Evaluation
~~~

## 第二册：Context Engineering

当 Context 不再是一段静态文本，我们问：

> 每一轮模型究竟应该看到什么？

地图：

~~~text
Need
→ Source
→ Select
→ Shape
→ Budget
→ Lifecycle
→ Evaluation
~~~

## 第三册：Agent Engineering

当模型需要持续行动，我们问：

> 怎样让它根据环境反馈不断决定下一步？

地图：

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

## 第四册：Harness Engineering

当 Agent 真正接触环境，我们问：

> 怎样让这条 Loop 长期可控？

地图：

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

## 第五册：Evaluation Engineering

最后一个问题：

> 怎样知道整个系统真的在变好？

地图：

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

## 五张地图其实是一张图

~~~text
Human Intent
    ↓
Prompt
    ↓
Runtime Context
    ↓
Model Decision
    ↓
Agent Action
    ↓
Harnessed Execution
    ↓
World Changes
    ↓
Observation / Trace
    ↓
Evaluation
    ↓
Failure / Feedback
    ↓
System Improvement
    └──────────────→ Next Version
~~~

这套系列真正想留下的，不是五十个术语。

而是一种习惯：

> 遇到新技术，先问它解决系统里的哪个问题。  
> 遇到失败，先找它发生在哪一层。  
> 修完以后，把它变成测试，让系统以后少靠运气。

模型会继续变化。

框架会继续变化。

名词也会继续增加。

但只要这张底层地图还在，你就不需要每一次都重新从关键词开始学习。
