# 先记住这一张地图

Prompt Engineering 可以先压缩成六个问题：

<div class="map-card">

**Goal**：到底要模型完成什么？  
**Context**：为了完成它，模型必须知道什么？  
**Process**：任务需要怎样的处理过程？  
**Output**：最终交付物长什么样？  
**Constraints**：哪些边界不能越过？  
**Evaluation**：怎样判断这次结果真的合格？

</div>

把它画成一条链：

~~~
需求
 ↓
Goal
 ↓
Context
 ↓
Process
 ↓
Output
 ↓
Constraints
 ↓
Evaluation
 ↓
Failure
 ↓
Diagnosis
 ↓
Revision
~~~

这张图有两个用处。

第一，**设计时从左往右走**。先定义任务，再决定给什么信息、如何处理、怎样输出、有什么边界，最后决定怎么验收。

第二，**调试时从右往左查**。结果不合格时，不要立刻“润色提示词”，而是判断失败属于哪一层。

## 技巧应该挂在哪里

| 常见概念 | 更准确的位置 |
|---|---|
| Few-shot | Context：用例子补充任务分布与行为参照 |
| CoT / 分步推理 | Process：控制复杂任务的中间过程 |
| Role / Persona | Goal + Constraints：定义责任、视角与边界 |
| Markdown / XML | Structure：帮助分隔不同语义区域 |
| JSON / JSON Schema | Output：定义机器可消费的交付合同 |
| RAG | Context：动态获取当前任务需要的信息 |
| Reflection | Process + Evaluation：让反馈进入下一轮 |
| Guardrails | Constraints：限制允许的行为与输出 |

这张表不是为了给术语分类，而是训练一种反射：

> 每学到一个新概念，先问“它改变了系统里的什么变量？”

当这种反射形成以后，Prompt Engineering 才开始从“技巧收藏”变成工程能力。
