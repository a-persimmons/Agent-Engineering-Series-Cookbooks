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

运行时可以画成：

~~~
Task / State
    ↓
   Need
    ↓
 Sources
    ↓
 Select
    ↓
 Shape
    ↓
 Budget
    ↓
 Runtime Context
    ↓
   Model
    ↓
 Outcome / Tool Result
    ↓
 Lifecycle Update
    ↓
 Evaluation
~~~

## 常见概念应该放在哪里

| 概念 | 地图位置 |
|---|---|
| Conversation History | Source + Lifecycle |
| RAG | Source + Select |
| Memory | Source + Lifecycle |
| Tool Result | Source + Shape + Lifecycle |
| Summarization | Shape + Budget |
| Compaction | Shape + Budget + Lifecycle |
| Checkpoint | Lifecycle |
| MCP Resources | Source |
| Prompt Caching | Budget 的成本侧优化，不等于 Context Selection |
| Subagent Context | Select + Isolation |

真正要训练的不是记住这张表，而是形成一个反射：

> 每增加一段 Context，都要回答“为什么现在需要它、它从哪里来、什么时候该消失”。
