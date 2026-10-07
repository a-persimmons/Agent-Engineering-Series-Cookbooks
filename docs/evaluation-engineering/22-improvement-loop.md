# 22｜Improvement Loop：真正的 Eval 终点不是 Dashboard

如果 Eval 最后只剩一张指标看板，它还没有完成闭环。

真正有价值的链路是：

~~~text
Failure
↓
Classify
↓
Find Root Layer
↓
Change
↓
Regression
↓
Release
↓
Observe Production
↓
New Failure
~~~

## 不同失败应该流向不同工程层

### Goal / Instruction

改 Prompt。

### Missing / Noisy Context

改 Context Pipeline。

### Tool / Decision

改 Agent Design。

### Permission / Retry / Resume

改 Harness。

### Judge / Dataset Blind Spot

改 Evaluation 本身。

这就是为什么整个系列最后要落到 Eval。

它负责把失败路由回正确层。

## 每次修复都问三个问题

1. 修的是哪类 Failure？
2. 新 Case 加进回归了吗？
3. 这个修复有没有副作用？

如果只修代码、不留测试，同一种问题迟早回来。

## 自动化并不是最终目标

有些新 Failure 需要人工分析。

重要的是流程稳定：

> 真实失败不会只停留在聊天记录、工单或某个人脑子里。

它会成为：

- Case；
- Rule；
- Metric；
- Guardrail；
- Harness Mechanism。

## 地图坐标

Improvement Loop 是整个 Evaluation Engineering 的终点，也是整个系列的闭环。
