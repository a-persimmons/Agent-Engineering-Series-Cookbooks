# 21｜Trace Mining：真实失败是最有价值的教材

Agent Trace 不只是用来查单次事故。

积累以后，它可以告诉你系统反复在哪里浪费时间和犯错。

## 可以从 Trace 里找什么

- 高频失败 Tool；
- 重复 Action；
- 长循环；
- 常见 Retry；
- Premature Stop；
- 高频人工审批；
- Context 膨胀点；
- 高成本任务模式。

## 从单次事故到模式

一条 Trace：

> 这个任务第 8 步选错 Tool。

一百条 Trace：

> 32% 的查询类任务都会在两个相似 Tool 之间误选。

后者才真正值得系统性修复。

可能的修法：

- 合并 Tool；
- 重写描述；
- Routing；
- 增加 Context；
- 调整权限。

## Cluster Failure

可以对失败原因、Error Message、Trajectory Pattern 做聚类。

再由人检查：

> 这些是不是同一个 Failure Type？

这比随机抽样更容易发现系统性问题。

## Trace 要能关联版本

否则不知道：

- 哪个模型；
- 哪个 Prompt；
- 哪个 Tool Schema；
- 哪个 Harness 配置；

产生了这条轨迹。

## 地图坐标

Trace Mining 把 Observability 数据变成新的 Cases 和 Failure Taxonomy。

它是 Production Feedback 进入 Improvement Loop 的关键步骤。
