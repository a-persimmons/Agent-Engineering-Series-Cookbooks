# 18｜System Metrics：质量之外，还要看成本、延迟和可靠性

一个 Agent 成功率从 90% 提高到 92%。

如果成本变成三倍、延迟翻倍，是否值得？

Evaluation Engineering 不能只看“答案质量”。

## 常见系统指标

### Quality

任务成功率、准确率、Rubric Pass Rate。

### Cost

token、Tool 调用、外部 API、计算资源。

### Latency

总时间、P50、P95、P99。

### Reliability

Timeout、Crash、Retry、恢复成功率。

### Safety

越权、危险 Action、审批绕过。

### Human Effort

人工介入率、审批量、返工量。

## 指标之间存在 Trade-off

例如：

更多 Reflection 可能提高质量，却增加成本和延迟。

更多 Tool 探索可能提高 Recall，却更容易超预算。

所以不能只优化单一数字。

## 建立发布门槛

例如：

~~~text
Task Success >= 95%
High-risk Error = 0
P95 Latency <= 20s
Average Cost <= target
Recovery Success >= 99%
~~~

不同业务阈值不同。

## 地图坐标

Metrics 是 Target 的量化投影。

真正的目标不是让某个指标最大，而是在业务约束下找到可接受平衡。
