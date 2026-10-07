# 17｜Long-running Tasks：Harness 要把“持续运行”当成正常状态

很多 Agent Demo 默认任务几分钟内结束。

真实工作并不一定。

![Long-running Task 的阶段化运行](/diagrams/harness/long-running.svg)

代码迁移、深度研究、数据清理、批量文档处理，可能持续几十分钟、几小时，甚至跨天。

## 长任务会放大所有问题

时间一长：

- Context 会膨胀；
- Tool 错误一定会出现；
- 外部状态会变化；
- 用户可能暂停；
- 进程可能重启；
- 权限可能过期；
- 预算需要重新评估。

所以 Long-running 不是“把 Timeout 调大”。

## 一次长任务应该有阶段

例如：

~~~text
Initialize
↓
Plan
↓
Execute Phase
↓
Checkpoint
↓
Compact Context
↓
Re-evaluate
↓
Next Phase
~~~

阶段边界适合：

- 保存 State；
- 生成 Progress；
- 清理 Working Context；
- 重新计算 Budget；
- 接受人工干预。

## Progress Artifact

长任务最好有一个独立的进度产物。

例如：

~~~text
Goal
Completed
In Progress
Blocked
Decisions
Artifacts
Next
~~~

它比“完整聊天历史”更适合恢复和交接。

## Harness 要支持暂停

暂停不是失败。

任务可能因为：

- 等待审批；
- 等外部系统；
- 到达预算；
- 用户主动暂停。

Paused 应该是一种正式状态。

## 地图坐标

Long-running Tasks 把 **Persistence、Limits、Recovery、Observability** 全部连接起来。

它是检验 Harness 是否真正成立的综合场景。
