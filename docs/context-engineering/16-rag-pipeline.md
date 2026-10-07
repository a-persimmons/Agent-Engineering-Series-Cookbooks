# 16｜重新理解 RAG：它是一条 Context Pipeline

如果把 RAG 只理解成“向量检索 + 拼接”，很快会遇到瓶颈。

更完整的 RAG 应该看成一条 Context Pipeline：

~~~
Question
  ↓
Need Analysis
  ↓
Retrieve
  ↓
Filter
  ↓
Rerank
  ↓
Deduplicate
  ↓
Shape
  ↓
Attach Provenance
  ↓
Runtime Context
  ↓
Answer
  ↓
Evaluation
~~~

## Retrieval 只是中间一步

检索效果很好，最终回答仍可能很差。

原因可能是：

- 搜到了过期资料；
- 多个来源冲突；
- Top-K 太大；
- chunk 缺少上下文；
- 证据没有来源；
- 输出没有要求绑定证据。

这些都不属于“Embedding 模型不够好”。

## Query 也应该由 Need 驱动

复杂问题往往不能用用户原话直接检索。

例如：

> 这个系统为什么会慢？

可能要拆成：

- 哪个阶段延迟上升；
- 最近有什么变化；
- 哪个服务先出现异常；
- 是否存在资源瓶颈。

每个子问题对应不同检索。

## RAG 的最终指标不是 Recall

Recall、Precision、MRR 都有价值，但系统最终关心的是：

> 这份 Context 是否让模型做出了更好的任务决策？

所以最好同时评：

- retrieval quality；
- context quality；
- answer / decision quality。

## 地图坐标

RAG 是第二册地图的一个完整实例：

**Need → Source → Select → Shape → Budget → Evaluation**。

这样理解以后，RAG 就不再是一个孤立模块。
