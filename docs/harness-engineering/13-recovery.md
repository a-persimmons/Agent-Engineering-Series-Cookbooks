# 13｜Recovery：失败以后，系统有哪几条路

Retry 只适合“动作仍然正确，只是这次没执行好”。

Recovery 处理更大的问题：

![Recovery 故障状态机](/diagrams/harness/recovery-state.svg)

> 失败发生后，下一种运行状态应该是什么？

## 常见恢复动作

### Retry

原动作仍然正确，稍后再试。

### Repair

动作思路没错，但参数或输入需要修正。

### Replan

当前路径已经不合适，需要换方案。

### Rollback / Compensate

已经产生副作用，需要撤销或补偿。

### Resume

进程或任务中断，从可信状态继续。

### Ask Human

系统无法安全决定。

### Abort

任务已经无法继续，明确停止。

## 先判断“世界现在是什么状态”

这是 Recovery 最重要的一步。

比如写操作超时。

不能直接问：

> 要不要再试一次？

应该先问：

> 外部系统到底已经写成功了吗？

只有知道当前现实状态，才能选择恢复动作。

## Recovery Policy 应该和错误类别绑定

~~~text
transient
→ bounded retry

invalid input
→ repair

permission
→ approval / stop

side effect unknown
→ reconcile

plan invalid
→ replan

irreversible failure
→ compensate / escalate
~~~

这样恢复才不会依赖模型临场猜。

## 地图坐标

Recovery 是 Harness 的故障状态机。

目标不是让系统“不失败”，而是让每类失败都有一个可预测的去向。
