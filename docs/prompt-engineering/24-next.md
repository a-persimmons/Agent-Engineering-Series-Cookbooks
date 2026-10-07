# 24｜下一站

第一本书到这里结束。

![从 Prompt Engineering 到 Context、Agent、Harness 与 Evaluation](/diagrams/prompt/transition.svg)

如果前面的知识真的长进脑子里，你现在面对一个新 Prompt，不应该先想 Few-shot、CoT、Role 或 XML。

你应该先看到：

~~~
Goal
Context
Process
Output
Constraints
Evaluation
~~~

然后开始问：

- 任务到底是什么？
- 模型缺什么信息？
- 过程是否需要拆？
- 交付合同是什么？
- 哪些边界必须守住？
- 怎样证明它真的变好了？

## 整个系列接下来会怎样展开

### Book 2｜Context Engineering

核心问题：

> 每一轮模型应该看到什么？

会进入 Retrieval、Memory、Context Selection、Compaction、State 与动态装配。

### Book 3｜Agent Engineering

核心问题：

> 怎样让模型持续决策和行动？

会进入 Tool、Action、Observation、Loop、Planning、ReAct、Reflection 与 Multi-Agent。

### Book 4｜Harness Engineering

核心问题：

> 怎样让 Agent 在真实环境里可靠运行？

会进入 Permission、Sandbox、Retry、Timeout、Checkpoint、Observability、Recovery 与 Long-running Tasks。

### Book 5｜Evaluation Engineering

核心问题：

> 怎样知道系统真的有效，并且不会越改越坏？

会进入 Dataset、Rubric、Trace Eval、Failure Taxonomy、Regression 与 Production Metrics。

## 最后一件事

不要把第一本书当作“学完 Prompt”。

真正值得带走的是一种工作方式：

> **先建模，再设计；先观察失败，再定位；先验证变化，再继续迭代。**

技巧会过时，模型会更新。

这套方法不会。
