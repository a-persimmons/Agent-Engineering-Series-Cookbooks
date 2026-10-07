# Evaluation Engineering 核心地图

<div class="map-card">

**Target**：什么行为才算“好”？  
**Cases**：用哪些真实场景测试？  
**Rubric**：单个结果按什么标准判断？  
**Signals**：需要采集哪些输出、Trace、成本和环境数据？  
**Metrics**：怎样把结果聚合成可比较指标？  
**Failure Taxonomy**：失败属于哪一类？  
**Regression**：改动后旧能力有没有退化？  
**Production Feedback**：线上真实世界又暴露了什么？  
**Improvement Loop**：怎样把失败变成下一版规则、数据和测试？

</div>

~~~text
Target
  ↓
Cases
  ↓
Rubric
  ↓
Signals
  ↓
Metrics
  ↓
Failure Taxonomy
  ↓
Regression
  ↓
Production Feedback
  ↓
New Cases / New Rules
  └──────────────→ Loop
~~~

## 设计时先问

1. 这个系统到底要优化什么？
2. 哪些场景代表真实任务分布？
3. 什么算通过，什么算失败？
4. 判断需要哪些证据？
5. 哪些指标值得聚合？
6. 失败怎样分类才有修复价值？
7. 每次改动如何做回归？
8. 线上失败怎样重新进入测试集？

## 不要从“选一个 Judge”开始

Evaluation Engineering 最容易被缩成：

> 用另一个 LLM 给答案打分。

Judge 只是中间一环。

如果 Target 不清、Cases 偏离真实分布、Rubric 含糊，再强的 Judge 也只能稳定地评错东西。

这张地图的重点是：

> **先建立评价系统，再选择自动化手段。**
