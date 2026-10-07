# 20｜Production Feedback：真实世界会带来测试集里没有的问题

离线 Eval 能覆盖“我们知道要测试什么”。

生产环境会不断带来：

> 我们之前根本没想到的输入和失败。

所以 Evaluation 不能停在发布门槛。

## 线上值得收集哪些 Signal

### Outcome

任务最终是否完成。

### User Correction

用户是否重新解释、纠正或撤销。

### Human Escalation

哪些任务频繁转人工。

### Runtime Failure

Tool Error、Timeout、Permission、Crash、Resume Failure。

### System Cost

Latency、token、Tool 次数、费用。

### Explicit Feedback

赞踩、评分、工单、客服反馈。

## Signal 不等于 Failure

用户点了“差评”，只说明有问题。

它还没有告诉你：

- 是事实错；
- Context 缺；
- Tool 失败；
- 风格不合；
- 速度太慢。

所以线上 Signal 需要进一步诊断。

## Drift

随着用户、数据、Tool、模型和业务规则变化，原来的 Dataset 会逐渐不代表现实。

这时需要观察：

- 哪类任务比例变了；
- 哪个 Slice 错误突然增加；
- 新 Failure Type 是否出现。

## 地图坐标

Production Feedback 的职责很单纯：

> **把离线世界不知道的新现象带回来。**

下一章 Trace Mining 再处理：怎样从大量线上轨迹中找出重复模式。
