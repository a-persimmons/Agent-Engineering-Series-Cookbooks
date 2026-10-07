# 04｜Agent 为什么会失败

Agent 的失败不能只看最终答案。

因为错误可能发生在轨迹中的任何一步。

## 一套起始分类

### Goal Failure

系统没有持续围绕真实目标推进。

### Context Failure

这一轮看到的信息不够、太多、冲突或过期。

### Decision Failure

信息正确，但下一步判断错误。

### Action Failure

工具选错、参数错、权限错，或者执行失败。

### Observation Failure

工具返回了结果，但系统误读、丢失或错误摘要。

### State Failure

已完成工作、关键事实或任务进度没有正确更新。

### Feedback Failure

执行结果已经说明方向错了，Agent 却没有修正。

### Loop Failure

重复、死循环、过早停止或无限扩张。

## 为什么轨迹比最终答案重要

两个 Agent 最终都给错答案。

一个第一步就选错工具；另一个前五步都正确，最后状态覆盖错误。

表面相同，修法完全不同。

因此 Agent Debug 的基本单位不再只是“输入—输出”，而是 **Trajectory**。

## 地图坐标

这一章是后面 Debug 的索引。

以后看到失败，先找它发生在 Loop 的哪个节点。
