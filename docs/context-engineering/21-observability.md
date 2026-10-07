# 21｜Observability：你必须看见模型当时看见了什么

传统程序出错，我们看日志、调用链和状态。

Agent 出错时，如果只保存最终回答，几乎没有诊断价值。

## 最值得记录的不是“聊天记录”

真正有用的是每次调用的 Context Snapshot。

它至少应该能回答：

- 哪些高优先级 Instructions 生效；
- 当前 Task State 是什么；
- 哪些 History 被保留；
- 哪些 Memory 被取回；
- 检索结果来自哪里；
- 工具结果经过什么处理；
- 哪些内容被压缩或删除。

## Context Diff 很有价值

长任务里，不一定每轮保存完整副本。

可以记录：

> 相比上一轮，哪些 Context 被加入、修改、删除。

这样更容易发现：

- 某条旧状态一直没被清掉；
- 某个 Memory 每轮重复注入；
- 工具日志不断膨胀；
- 关键规则在 compaction 后消失。

## Observability 不是为了“看得热闹”

它最终要服务三件事：

1. 解释失败；
2. 建立评测数据；
3. 发现可以固化成策略的模式。

如果 Trace 只能展示 token 和 latency，却不能还原 Context 决策，它对 Context Engineering 仍然不够。

## 地图坐标

Observability 横跨整张地图。

没有它，Need、Select、Lifecycle 都只是系统内部不可见的猜测。
