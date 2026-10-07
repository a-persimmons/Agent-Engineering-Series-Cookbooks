# 24｜下一站：Evaluation Engineering

Harness Engineering 到这里结束。

现在回头看四册：

~~~text
Prompt
  ↓
设计一次模型行为

Context
  ↓
控制模型看到什么

Agent
  ↓
让模型持续决策和行动

Harness
  ↓
让行动长期可控
~~~

还差最后一个问题：

> **我们怎么知道这些设计真的有效？**

## Eval 贯穿前四册，但还没有被完整展开

Prompt 有 Prompt Eval。

Context 有 Context Regression。

Agent 有 Outcome / Trajectory Eval。

Harness 有 Failure Injection 和 Recovery Test。

这些其实属于同一个更大的主题：

> 怎样把“感觉好像变好了”变成可以被证明、比较和回归的工程系统？

## 第五册会进入什么

**《Evaluation Engineering：让系统可验证、可回归》**

会从：

- Dataset；
- Rubric；
- Metrics；
- LLM-as-Judge；
- Trace Eval；
- Failure Taxonomy；
- Regression；
- Online Metrics；
- Human Review；
- Improvement Loop；

一路走到：

> 如何让真实失败不断沉淀成下一版系统的能力。

Harness 负责让 Agent 在坏情况下可控。

Evaluation Engineering 负责回答：

> **坏在哪里、修好了吗、有没有把别的地方修坏。**
