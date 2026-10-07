# Context Engineering：控制模型看到的世界

> Prompt Engineering 解决的是“这一轮该怎样要求模型做事”。Context Engineering 再往前一步：**在模型做决定之前，它究竟应该看到什么。**

很多系统一开始都很简单：System Prompt 加用户输入，然后调用模型。功能一多，Context 很快变成一个杂物间：历史对话全塞进去，RAG 查到什么就塞什么，工具结果原样保留，长期记忆越积越多。窗口越来越大，模型却不一定越来越稳。

第二册只保留一张主地图：

**Need → Source → Select → Shape → Budget → Lifecycle → Evaluation**

以后看到 RAG、Memory、Compaction、Session、Checkpoint、MCP Resource、Tool Result，都先问：它在这张图上解决什么问题？

## 读完以后，你应该能做到什么

1. 不再把“上下文窗口大”误当成“记忆好”。
2. 面对一个 Agent 任务，能判断当前步骤真正需要哪些信息。
3. 能区分 History、Task State、Long-term Memory、Retrieved Knowledge 和 Tool Result 的职责。
4. 能诊断缺失、噪声、冲突、过期、重复、位置不当等 Context Failure。
5. 能为长任务设计选择、压缩、隔离、刷新和持久化策略。
6. 知道什么时候 Context 管理已经进入 Agent Runtime 与 Harness 的范围。

## 阅读方法

不要把每章当成一种新技巧。

把你手头一个真实任务贯穿全书。每读一章，只问两件事：

- 这一轮模型真正需要知道什么？
- 现在放进去的东西，有多少其实不该在这里？

如果读到最后，你看到“上下文”时首先想到的是**信息的生命周期和决策价值**，而不是 token 数，这本书就完成了任务。
