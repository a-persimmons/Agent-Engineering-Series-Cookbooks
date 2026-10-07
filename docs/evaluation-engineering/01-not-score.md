# 01｜Eval 不是给答案打一个分

很多 Eval 从一个问题开始：

> 这个回答 1 到 10 分是多少？

这看起来量化了。

但“8 分”通常没有告诉你：

- 为什么不是 6；
- 哪条标准失败；
- 应该改 Prompt、Context、Agent 还是 Tool；
- 下一个版本有没有真正修复。

一个分数如果不能帮助决策，价值很有限。

## Eval 的目标是可比较和可诊断

一个有用的 Evaluation 至少应该支持两件事：

### Compare

V2 相比 V1 是否更好？

### Diagnose

如果不好，主要坏在哪里？

所以比“总分”更有价值的通常是：

~~~text
Correctness: pass
Evidence: fail
Format: pass
Uncertainty: fail
~~~

你马上知道该修哪一层。

## Evaluation 不是最后才做

如果等系统开发完再考虑 Eval，很容易发现：

> 连“什么算好”都没有共识。

Target 和 Success Criteria 应该尽早进入设计。

## 地图坐标

Evaluation Engineering 从 **Target** 开始，不从 Metric 开始。

先定义要守住的行为，再讨论怎么测。
