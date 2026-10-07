# 10｜Checkpoint：长任务不能只活在内存里

一个 Agent 连续工作 40 分钟。

第 39 分钟进程崩了。

如果所有 State 只存在内存里，前面工作可能全部丢失。

Checkpoint 解决的就是：

> 在哪些时刻，把可恢复状态保存下来？

## Checkpoint 应该保存什么

至少包括：

- Goal；
- 当前 Plan；
- Task State；
- 已完成步骤；
- 关键 Artifact 引用；
- Tool 副作用状态；
- 剩余 Budget；
- 当前 Context 的必要摘要。

## 不需要每个 token 都保存

更自然的节点：

- 一个 Tool 完成；
- 一个 Step 完成；
- 进入人工审批；
- 阶段性任务完成；
- 长 Context 准备 Compaction。

## Checkpoint 不是日志

Log 是为了观察过去。

Checkpoint 是为了**继续未来**。

它应该足够让 Runtime 从这里恢复，而不是记录全部细节。

## Checkpoint 也支持 Human-in-the-loop

Agent 到达高风险动作时：

~~~text
Save Checkpoint
↓
Pause
↓
Human Approves
↓
Resume
~~~

这比让一个长进程一直等待更可靠。

## 地图坐标

Checkpoint 属于 **Persistence + Recovery**。

它让长任务第一次拥有“中断以后继续”的能力。
