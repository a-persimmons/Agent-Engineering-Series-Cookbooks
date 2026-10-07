# 24｜下一站：Evaluation Engineering

到这里，整个系统已经从一句 Prompt 长成了一套 Runtime。

![从 Harness Engineering 进入 Evaluation Engineering](/diagrams/harness/to-evaluation.svg)

回头看：

~~~text
Prompt Engineering
→ 设计一次模型行为

Context Engineering
→ 决定模型每一轮看到什么

Agent Engineering
→ 让模型持续决策和行动

Harness Engineering
→ 让这套行动长期可控
~~~

但还有一个问题始终没有被彻底解决：

> **我们怎么知道这些设计真的更好了？**

“这版感觉稳定一些”不够。

“我试了几个例子，都没问题”也不够。

## Eval 其实一直都在前四册里出现

第一册有 Prompt Regression。

第二册有 Context Regression。

第三册开始评 Agent Outcome 和 Trajectory。

第四册又加入 Timeout、Crash、Permission、Resume 等故障演练。

这些并不是四种互不相关的测试。

它们最终都在回答：

> 系统应该怎样定义“好”，怎样发现“坏”，怎样证明修复有效，以及怎样防止下一次改动把旧能力弄坏。

## 第五册会把它们收束起来

**《Evaluation Engineering：让系统可验证、可回归》**

会进入：

- Dataset；
- Test Case Design；
- Rubric；
- Metrics；
- LLM-as-Judge；
- Human Review；
- Trace Eval；
- Failure Taxonomy；
- Regression；
- Online Metrics；
- Improvement Loop。

最后一册不只是讲“怎么打分”。

它要解决的是整个系列最终的问题：

> **怎样让一次真实失败，变成下一版系统不会轻易再犯的能力。**

这也是 AI Engineering 从经验走向工程的最后一步。
