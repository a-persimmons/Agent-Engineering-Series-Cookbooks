# 11｜Feedback：让环境告诉 Agent “刚才发生了什么价值”

Observation 告诉 Agent 环境返回了什么。

Feedback 再往前一步：

> 这个结果对 Goal 意味着什么？

例如：

~~~text
Action: 修改 parser
Observation: 测试返回 2 failed, 18 passed
Feedback: 修改没有完成目标，且引入两个可定位失败
~~~

## Feedback 可以来自哪里

### 环境事实

测试、数据库状态、文件 diff、API 返回。

### 规则

Schema、业务约束、安全策略。

### 人

审批、偏好、纠正。

### Evaluator

专门的模型或程序判断结果质量。

## 最可靠的 Feedback 尽量落到可验证事实

Coding Agent 改完代码后跑测试，比让模型自己说“代码看起来正确”可靠。

数据 Agent 执行 SQL 后检查数据变化，比让模型猜“应该写入成功”可靠。

如果任务能够外部验证，就优先让环境说话。

## Feedback 必须进入下一轮 Decision

有反馈，但行为不改变，等于没有反馈。

如果连续三次测试都报同一种错，Agent 仍重复同一种修改，问题不在测试，而在 Loop 没有把反馈转化成新的 Decision。

## 地图坐标

Feedback 位于 **Observation → Next Decision** 之间。

这一章只回答“系统怎样得到质量信号”。第 15 章的 Reflection 会进一步讨论：失败以后，模型怎样利用这些信号改变策略。
