# 10｜State：Agent 现在到底在哪里

一个 Loop 如果没有显式 State，很快就会退化成“靠聊天历史记进度”。

短任务看不出问题，长任务一定会出问题。

## State 至少要回答

- Goal 是什么；
- 已完成什么；
- 当前步骤是什么；
- 有哪些已确认事实；
- 哪些假设还在验证；
- 有哪些阻塞；
- 下一步候选是什么。

## State 不等于 History

History 是发生过什么。

State 是**现在对继续任务最有用的压缩表示**。

例如：

~~~text
History:
讨论了 20 轮数据库迁移细节……

State:
chosen = PostgreSQL
migration_status = 60%
blocked_by = extension compatibility
next_action = run compatibility test
~~~

第二种更适合下一轮 Decision。

## State 也不等于 Memory

Task State 通常跟当前任务绑定。

Long-term Memory 跨任务存在。

把临时状态写进长期 Memory，会产生污染；把长期约束只放在临时 State，又可能在下个任务丢失。

## State 更新必须明确

一个常见 Bug 是：

Action 成功了，但 State 还停留在旧步骤。

于是 Agent 下一轮重复执行。

所以执行动作之后，不只要产生 Observation，还要明确更新 State。

## 地图坐标

State 是 Loop 的“当前世界模型”。

Planning、Checkpoint、Long-running Task 都会建立在它之上。
