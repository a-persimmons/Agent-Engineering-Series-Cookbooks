# 07｜Case Design：Normal、Edge、Adversarial 都要有

一个 Eval Case 不只是“一条输入”。

它应该代表某种你真正关心的行为条件。

## Normal Case

真实世界最常见输入。

用于保证基本能力。

## Edge Case

边界：

- 信息很少；
- 信息很多；
- 数值极端；
- 多种规则同时命中。

## Adversarial Case

故意诱发错误：

- 相互冲突的 Context；
- 诱导越权；
- 格式污染；
- 不可信来源；
- Tool 返回异常。

## Historical Failure

生产中已经发生过的真实事故。

这类 Case 的优先级通常最高。

因为它证明系统过去确实会坏。

## Counterfactual Case

只改变一个关键变量：

~~~text
有证据 vs 无证据
新配置 vs 旧配置
Tool success vs timeout
~~~

非常适合判断某个机制是否真的有效。

## 地图坐标

Case Design 不是追求“题型丰富”。

它是在有意识地覆盖系统的风险面。
