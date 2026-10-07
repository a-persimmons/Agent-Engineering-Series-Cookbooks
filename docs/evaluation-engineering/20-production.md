# 20｜Production Feedback：离线 Eval 永远看不完真实世界

再好的测试集，也只是已知世界的样本。

系统上线后，用户会带来新的表达、新的环境、新的失败方式。

所以 Evaluation 必须从离线延伸到生产。

## 线上可以看什么

### Task Outcome

用户任务是否真的完成。

### User Correction

用户是否重复说明、纠正、撤销。

### Human Escalation

什么情况经常转人工。

### Failure Events

Tool Error、Timeout、Permission、Crash。

### Cost / Latency

是否随任务类型漂移。

### Explicit Feedback

赞踩、评分、客服反馈。

## 小心“用户没投诉 = 没问题”

很多错误不会被用户发现。

例如：

- 引用了错误证据；
- 多花了三倍成本；
- Agent 做了无效 Tool；
- 某些用户直接流失而没反馈。

所以线上 Signal 也需要多层组合。

## Drift

随着：

- 用户分布；
- 数据；
- Tool；
- 模型；
- 业务规则；

变化，离线 Dataset 会慢慢过时。

Production Feedback 应该不断补回 Eval Set。

## 地图坐标

Production Feedback 是闭环的入口。

它负责把“我们没想到的问题”重新带回工程流程。
