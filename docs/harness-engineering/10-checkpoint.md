# 10｜Checkpoint：在可恢复的位置拍一张快照

一个 Agent 连续工作 40 分钟。

第 39 分钟进程崩了。

如果所有 State 只存在内存里，前面的工作可能全部丢失。

Checkpoint 处理的是一个非常具体的问题：

> **哪些时刻值得保存一份“从这里可以继续”的状态快照？**

## Checkpoint 保存的是恢复入口

通常包括：

- Goal；
- 当前 Plan；
- Task State；
- 已完成步骤；
- Artifact 引用；
- 剩余 Budget；
- 上一个 Tool 的执行状态；
- 必要的 Context 摘要。

它不需要复制所有日志。

## 哪些节点适合拍快照

- Tool 成功完成；
- Step 完成；
- 准备进入高风险 Action；
- 进入人工审批；
- 阶段结束；
- Context 准备 Compaction。

这些节点有一个共同点：

> 系统比较清楚“刚才完成了什么，接下来从哪里继续”。

## Checkpoint 不是 Persistence 的全部

Checkpoint 定义“保存什么状态”。

Persistence 还要解决：

- 存在哪里；
- 怎样版本化；
- 任务重启后怎样读取；
- 恢复前怎样和外部世界对账。

这些留给下一章。

## 地图坐标

Checkpoint 是 **Persistence + Recovery** 的一个保存点。

它像游戏存档，但真正的 Resume 还需要确认世界没有在存档之后发生不可忽略的变化。
