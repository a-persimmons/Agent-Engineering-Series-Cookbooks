# 06｜Task State：把“现在进行到哪”单独拿出来

长任务最重要的 Context 往往不是全部历史，而是当前状态。

Task State 回答：

- 目标是什么；
- 已经完成什么；
- 当前在做什么；
- 还有什么未完成；
- 有哪些约束和阻塞；
- 当前有哪些已确认事实。

## State 是 Context 的压缩形式

它不是简单摘要。

摘要回答“之前发生了什么”；State 更关心“接下来做决定需要知道什么”。

例如：

~~~text
历史摘要：
我们讨论过三种数据库方案，最后倾向 PostgreSQL……

任务状态：
decision = PostgreSQL
reason = 需要复杂 JSON 查询
open_risk = 团队迁移经验不足
next_action = 做一轮迁移 PoC
~~~

第二种更适合下一步行动。

## State 应该结构化到什么程度

没有统一答案。

如果任务需要程序读取、恢复或验证，结构化字段更可靠。

如果任务本身开放、变化快，可以保留部分自然语言。

关键是：

> State 应该服务于下一步决策，而不是复述全过程。

## Checkpoint 为什么重要

一旦任务跨越多轮、工具调用或人工审批，State 就需要持久化。

Checkpoint 让系统能够：

- 中断后恢复；
- 失败后回滚；
- 人工介入；
- 观察任务在某个时间点的状态。

这已经开始触碰 Agent Runtime，但本质仍是 Context Lifecycle。

## 地图坐标

Task State 同时属于 **Source + Shape + Lifecycle**。

它是 Context Engineering 从“聊天记录管理”走向“任务系统”的关键一步。
