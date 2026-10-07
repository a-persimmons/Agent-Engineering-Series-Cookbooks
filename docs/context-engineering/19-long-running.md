# 19｜Long-running Tasks：Context 必须会换代

短任务可以一直追加消息。

长任务不行。

当一个 Agent 连续工作几十轮、几小时甚至几天时，Context 必须经历“换代”。

## 为什么完整历史最终一定失控

长任务会不断积累：

- 尝试过但失败的路径；
- 大量工具日志；
- 已完成步骤；
- 临时计划；
- 过期假设；
- 重复事实。

如果每轮全部带上，旧过程会淹没当前状态。

## 一个可持续的结构

可以把长任务的信息分成三层：

### Durable State

必须跨阶段保留：

- Goal；
- 已完成里程碑；
- 关键决策；
- 未解决风险；
- 下一步。

### Working Context

当前阶段需要的文件、证据、工具结果。

阶段结束后可以大幅压缩。

### Archive

原始日志、旧工具输出、历史细节。

不默认进入 Context，但可以按需重新读取。

## Compaction 的真正目标

不是“把 token 压到更少”。

而是：

> 在丢掉大量过程噪声之后，新的 Context 仍然足够让 Agent 接着干活。

一个好的 compaction 输出应该像“交接文档”，而不是文章摘要。

## Checkpoint 与恢复

长任务还需要在关键节点保存 State。

这样即使模型调用失败、程序重启或人工暂停，也可以从确定状态继续。

## 地图坐标

Long-running Context 最集中地体现 **Budget + Lifecycle + State**。

它也是 Context Engineering 进入 Harness Engineering 的重要边界。
