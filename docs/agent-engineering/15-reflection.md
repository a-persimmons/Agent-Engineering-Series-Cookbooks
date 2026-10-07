# 15｜Reflection：失败之后，系统能不能改变策略

Agent 执行失败后，有两种做法。

一种是原样再试一次。

另一种是先判断：

> 为什么刚才没成功？

Reflection 属于第二种。

## Reflection 真正需要什么

不是让模型写一段自我感想。

有效 Reflection 应该产生**会改变下一步行为的信息**。

例如 Coding Agent：

~~~text
测试失败：
TypeError in parser

Reflection:
上一次修改只处理了 null，没有处理 array input

Next Decision:
补充 array branch，并新增回归测试
~~~

如果反思结束后动作完全没变，它没有进入 Loop。

## Reflection 与环境验证组合更可靠

最好的结构通常是：

~~~text
Action
↓
External Feedback
↓
Failure
↓
Reflection
↓
Revised Action
~~~

测试结果、规则校验、用户反馈先提供事实，Reflection 再解释失败。

这比让模型纯自评更可靠。

## Evaluator-Optimizer

可以把生成和评价分成两个角色：

~~~text
Generate
↓
Evaluate
↓
Revise
↓
Evaluate
~~~

评价可以由模型、规则或人完成。

## 地图坐标

Reflection 位于 **Feedback → Decision** 之间。

它让 Loop 不只是重复，而是有机会改变策略。
