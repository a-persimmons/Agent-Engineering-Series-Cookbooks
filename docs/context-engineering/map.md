# 先记住这一张地图

Context Engineering 可以压缩成七个问题：

<div class="map-card">

**Need**：这一轮决策真正需要知道什么？  
**Source**：这些信息来自哪里？  
**Select**：哪些应该进入，哪些应该留在外面？  
**Shape**：以原文、摘要、结构化状态还是其他形式进入？  
**Budget**：有限注意力应该怎样分配？  
**Lifecycle**：什么时候加载、保留、压缩、刷新和丢弃？  
**Evaluation**：怎样知道这份 Context 真的帮助了模型？

</div>

先把七个问题放在一张图里：

![Context Engineering 核心地图](/diagrams/context/core-map.svg)

## 这张地图有两种走法

### 设计时：从上往下走

先不要问“用不用 RAG”。

先问：

1. 当前步骤要做什么判断？
2. 为这个判断缺什么信息？
3. 信息在哪？
4. 哪些值得现在进入？
5. 应该以什么形态出现？
6. 哪些旧内容应该退出？
7. 怎样验收这套 Context 策略？

技术选型应该出现在问题之后。

### 调试时：从结果往回查

模型做错了，不先改 Prompt，也不先换模型。

沿着反方向问：

~~~text
结果为什么错？
↓
Evaluation 有没有看见这个错误？
↓
Lifecycle 是否留下了旧信息？
↓
Budget 是否被噪声占满？
↓
Shape 是否让关键信息难以使用？
↓
Select 是否漏掉或选错？
↓
Source 有没有正确事实？
↓
Need 一开始是不是就判断错了？
~~~

设计和 Debug 用的是同一张地图。

## 常见概念应该挂在哪里

| 概念 | 更准确的位置 |
|---|---|
| Conversation History | Source + Lifecycle |
| Task State | Source + Shape + Lifecycle |
| RAG | Source + Select |
| Long-term Memory | Source + Select + Lifecycle |
| Tool Result | Source + Shape + Lifecycle |
| Summarization | Shape + Budget |
| Compaction | Shape + Budget + Lifecycle |
| Checkpoint | Lifecycle |
| MCP Resources | Source |
| Subagent Context | Select + Isolation |

这张表不是术语分类表。

真正要练成的反射是：

> **每增加一段 Context，都能说明它为什么现在需要、从哪里来、以什么形态进入，以及什么时候应该离开。**

如果这四个问题已经会自动出现，地图就开始长进脑子里了。
