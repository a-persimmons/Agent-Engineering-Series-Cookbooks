# 14｜Pairwise Evaluation：有时“哪个更好”比“几分”更容易

开放任务里，绝对评分很难稳定。

例如两段文案：

> A 是 4.2 分，B 是 4.5 分。

这个差异未必有意义。

但问：

> 在同一 Rubric 下，A 和 B 哪个更好？

通常更容易判断。

## Pairwise 适合版本比较

例如：

~~~text
V1 output
vs
V2 output
~~~

Judge 选择：

- A；
- B；
- Tie。

再按多个 Case 聚合胜率。

## 仍然需要 Rubric

不能只问：

> 哪个更好？

应该限定：

- 事实正确；
- 完整；
- 简洁；
- 证据充分。

否则 Judge 可能只偏爱更流畅或更长的答案。

## 注意 Position Bias

同一个结果放左边和右边，Judge 可能偏好某一位置。

可以随机顺序，甚至交换两次判断。

## Pairwise 的限制

它告诉你“哪个更好”，但不一定告诉你：

> 为什么坏。

所以仍然要配 Failure Type 或 Rubric Breakdown。

## 地图坐标

Pairwise 是 **Compare** 的好工具。

它特别适合 Prompt / Model / Agent 版本 A/B，但不能替代诊断。
