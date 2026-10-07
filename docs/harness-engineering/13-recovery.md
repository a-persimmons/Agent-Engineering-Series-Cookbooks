# 13｜Recovery：失败以后，系统应该回到哪里

Retry 只是 Recovery 的一种。

真实故障发生后，系统可能需要：

- Retry；
- Repair；
- Replan；
- Rollback；
- Resume；
- Ask Human；
- Abort。

## 先判断恢复目标

不是所有失败都应该“继续任务”。

例如：

- 网络抖动：继续；
- 权限撤销：暂停；
- 写了一半：对账；
- 数据损坏：回滚；
- Goal 已失效：终止。

Recovery 的第一步是判断世界现在处于什么状态。

## Compensating Action

有些外部动作无法真正回滚。

可以设计补偿动作。

例如：

~~~text
create_booking
↓
后续失败
↓
cancel_booking
~~~

补偿不是时间倒流，只是把业务状态恢复到可接受状态。

## Recovery 需要知道失败历史

如果一个方案已经失败三次，就不应该恢复后继续原样尝试。

所以失败原因、次数、已尝试策略应该进入持久 State。

## 恢复点不要太早，也不要太晚

回到很早的 Checkpoint，会重复大量工作。

回到太晚的位置，可能继续携带错误状态。

Harness 需要定义可以信任的恢复边界。

## 地图坐标

Recovery 是 Harness 面对不确定环境的核心能力。

目标不是“永远不失败”，而是让失败以后系统仍然可预测。
