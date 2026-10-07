# Context Engineering：控制模型看到的世界

> Prompt Engineering 解决的是“这一轮该怎样要求模型做事”。Context Engineering 再往前一步：**在模型做决定之前，它究竟应该看到什么。**

很多系统一开始都很简单：System Prompt 加用户输入，然后调用模型。功能一多，Context 很快变成一个杂物间：历史对话全塞进去，RAG 查到什么就塞什么，工具结果原样保留，长期记忆越积越多。窗口越来越大，模型却不一定越来越稳。

第二册只保留一张主地图：

![Context Engineering 核心地图](/diagrams/context/core-map.svg)

**Need → Source → Select → Shape → Budget → Lifecycle → Evaluation**

以后看到 RAG、Memory、Compaction、Session、Checkpoint、MCP Resource、Tool Result，都先问：它在这张图上解决什么问题？

## 读完以后，你应该能做到什么

你不需要背一套 Context 模板，但应该形成三种反射。

### 设计反射

看到一个任务步骤，先问：

> 这一轮模型为了做对这个决定，真正需要知道什么？

而不是先问“窗口还能塞多少”。

### 诊断反射

看到失败，能区分：

- 缺信息；
- 噪声太多；
- 新旧事实冲突；
- 状态过期；
- 重复注入；
- 信息形态或位置不利于使用。

而不是把它们都叫“模型忘了”。

### 生命周期反射

每一段重要信息都知道：

> 它什么时候进入，什么时候更新，什么时候退出。

这一步会自然把你带到 State、Memory、Compaction 和 Long-running Agent。

## 怎么读

拿一个你真正关心的复杂任务贯穿全书，例如：

- 长对话助手；
- Coding Agent；
- 企业知识问答；
- 超长日志根因分析；
- 长周期研究任务。

每读一章，不要先记术语。只更新一张表：

| 问题 | 当前方案 |
|---|---|
| Need | 这一轮缺什么？ |
| Source | 去哪里拿？ |
| Select | 哪些进入？ |
| Shape | 怎么表示？ |
| Budget | 什么最值得占注意力？ |
| Lifecycle | 什么时候离开？ |
| Evaluation | 怎么证明有效？ |

到第 23 章，我们会用“256K 窗口分析超过窗口的系统日志”把整张地图完整走一遍。
