# 19｜Regression：每次“优化”都可能把旧能力弄坏

AI 系统修改很容易出现局部提升、整体退化。

修了格式。

事实准确率掉了。

加了更多 Context。

长输入好了，短输入变慢。

增加 Reflection。

成功率提高，成本失控。

## Regression 的基本结构

~~~text
Baseline Version
↓
Fixed Dataset
↓
Candidate Version
↓
Same Dataset
↓
Slice Compare
↓
Release / Reject
~~~

关键是“同一套条件”。

## 不要只比较平均值

至少看：

- Overall；
- 高风险 Slice；
- 历史 Failure Cases；
- 成本；
- 延迟；
- Tool 行为；
- Harness 可靠性。

## 修复一个 Failure，要守住两个方向

例如修“信息不足时乱猜”。

需要验证：

1. 信息不足 Case 真的改善；
2. 信息充分 Case 没有变得过度拒答。

这就是回归思维。

## Golden Set 不是永远不变

生产环境会变化。

但每次更新都要版本化，并保留重要历史事故案例。

## 地图坐标

Regression 把 Eval 从一次验收变成持续开发机制。

没有它，“优化”只是不可逆的试验。
