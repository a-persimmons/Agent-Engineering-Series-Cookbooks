# 19｜Long-running Tasks：Context 必须会换代

短任务可以不断追加消息。

长任务不行。

当 Agent 连续工作几十轮、几小时甚至几天，旧过程如果一直留在 Runtime Context，会慢慢挤掉当前真正需要的状态。

## 长任务为什么必须分层

持续执行会积累：

- 已失败的探索路径；
- 工具原始日志；
- 已完成步骤；
- 临时计划；
- 过期假设；
- 重复事实。

这些内容不是全部没价值，只是不应该全部同时占据当前注意力。

一个可持续的结构可以分成三层。

### Durable State

跨阶段继续工作必须知道的内容：

- Goal；
- 已完成里程碑；
- 关键决策；
- 未解决风险；
- 下一步。

### Working Context

当前阶段正在使用的文件、证据、假设和工具结果。

阶段变化时，它应该跟着变化。

### Archive

原始日志、旧工具输出和历史细节。

默认不进模型，但保留来源指针，需要时可以重新读取。

## Compaction 是一次“交接”

普通摘要关心“前面讲了什么”。

Long-running Compaction 更关心：

> 如果另一个执行者只拿到这份结果，能不能继续把任务做下去？

因此它至少应该保留：

~~~text
Goal
Current State
Completed Work
Key Decisions
Open Questions
Evidence References
Next Actions
~~~

这就是为什么 Compaction 不能只追求压缩率。

## 什么时候做换代

不必等到快超窗。

更自然的触发点是：

- 一个阶段完成；
- 计划发生明显变化；
- 大量工具结果已经转化为结论；
- 旧分支被正式放弃；
- 人工审批前后。

## Checkpoint 与 Context 不是同一个东西

Checkpoint 保存可恢复的系统状态。

Compaction 决定下一轮模型应该继续看到什么。

二者经常一起使用，但职责不同。

## 地图坐标

Long-running Tasks 集中考验 **Budget + Lifecycle + Task State**。

它让“信息什么时候退出当前工作集”从优化项变成必需能力。
