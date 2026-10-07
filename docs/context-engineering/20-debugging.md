# 20｜Context Debugging：失败时沿着地图往回走

Agent 做错事时，第一反应经常是：

> 模型能力不够。

但很多生产问题其实来自模型当时看到的世界。

Context Debugging 最重要的不是多一套术语，而是养成固定回溯顺序。

![Context Debugging 逆向诊断图](/diagrams/context/debugging.svg)

## 从最终错误开始

假设 Agent 用了一个已经失效的配置。

不要马上加一句“请使用最新配置”。

沿着地图逆向查。

### Evaluation

测试里有没有“旧配置仍存在”的案例？

如果没有，系统甚至不知道这类错误值得防。

### Lifecycle

旧配置为什么还活着？

是 Memory 没更新，Cache 没失效，还是 Task State 没刷新？

### Budget

新配置虽然存在，会不会被大量历史信息淹没？

### Shape

新旧配置是否被清楚标记版本和时间？

### Select

这一轮为什么同时选中了两个版本？

### Source

权威配置源到底是什么？

### Need

当前步骤真的需要整份配置，还是只需要其中两个字段？

到这里，修复可能完全不在 Prompt。

## 给常见失败建立“回家路线”

~~~text
缺事实
→ Source / Select

事实很多但模型抓不住
→ Select / Shape / Budget

用了旧信息
→ Lifecycle

把旧推断当事实
→ Shape / Lifecycle

历史越长越不稳定
→ Select / Budget / Lifecycle

RAG 检索不错但答案仍差
→ Shape / Output / Evaluation
~~~

这不是死规则，只是起始定位。

Context 调试也可能得到一个重要结论：**根因不在 Context**。例如证据已经完整、选择和形态也合理，但模型仍然推导错误，那么问题应该继续交回 Prompt / Process、Agent Decision 或模型能力层，而不是继续调 Top-K。

## Context Trace 是调试前提

对重要 Agent，至少要能还原一次调用时：

- 当前 Goal 和 State；
- 加载了哪些 History；
- 取回哪些 Memory；
- RAG 返回哪些证据；
- 哪些 Tool Result 被保留；
- 哪些内容被压缩或删除。

如果无法回答“模型当时到底看见了什么”，很多调试只能靠猜。

## 一次只改变一条主要策略

不要同时换 Embedding、调 Top-K、加 Memory、改 Prompt。

Context Engineering 同样需要控制变量。

## 地图坐标

设计时：

**Need → Source → Select → Shape → Budget → Lifecycle → Evaluation**

调试时，从失败沿着同一条链反向追。

当这两个动作形成肌肉记忆，第二册的地图才真正开始工作。
