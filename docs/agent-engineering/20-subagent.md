# 20｜Subagent：把一个有限子任务交给另一个 Loop

Subagent 的重点不在“多一个 Agent”。

而在于：

> 主 Agent 能否把一个边界清楚的子问题交出去，然后只接回需要的结果？

![Subagent 与多 Loop 协作拓扑](/diagrams/agent/subagent-topology.svg)

## 什么情况下值得拆出 Subagent

### Context 太独立

例如主 Agent 只需要“找出与这个 Bug 相关的文件”，而搜索过程会产生大量仓库上下文。

让 Search Subagent 独立完成，可以避免污染主 Context。

### 工具不同

一个子任务需要浏览器，另一个只需要代码工具。

### 可以并行

多个互不依赖的研究任务可以同时执行。

### 责任边界清楚

主 Agent 负责计划和汇总，子 Agent 负责某个明确产物。

## Handoff 是一份子任务合同

不要只传：

> 帮我研究一下。

至少要明确：

- Goal；
- Scope；
- 必要 Context；
- 可用 Tool；
- Output；
- Constraints；
- Completion Criteria。

这样 Subagent 才不是另一个自由聊天窗口。

## 返回结果应该被压缩成产物

主 Agent 通常需要：

~~~text
Result
Evidence
Artifacts
Open Questions
Status
~~~

而不是 Subagent 的全部历史。

如果所有子 Agent 最后把完整 Context 都交回主 Agent，Isolation 的价值就没了。

## 地图坐标

Subagent 是**一个 Loop 调用另一个 Loop 完成子目标**。

下一章的 Multi-Agent 会讨论：当这种关系不再是一次委派，而变成一个长期协作拓扑时，会多出哪些问题。
