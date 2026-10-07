# 23｜Prompt 不再是一段文字

到了这里，最好彻底放弃一个旧印象：

> Prompt = 一段写得很好的文字。

在现代 AI 系统里，更准确的对象是 **Runtime Context**。

![Runtime Context 的组成与装配](/diagrams/prompt/runtime-context.svg)

## 一次调用真正看到的东西

可以粗略写成：

~~~
Runtime Context =
  Instructions
+ User Input
+ Task State
+ Conversation History
+ Memory
+ Retrieved Knowledge
+ Tool Definitions
+ Tool Results
+ Environment State
+ Examples
~~~

其中只有一部分是你手写的“提示词”。

## 这会改变你的设计方式

以前问：

> 这句话应该怎么写？

现在开始问：

> 这个信息应该放在哪一层？

例如：

- 永久规则放 System Instructions。
- 当前任务放 Task State。
- 历史事实放 Memory。
- 大量知识按需 Retrieval。
- 强权限交给程序。
- 输出结构交给 Schema。
- 行为轨迹交给 Trace。

这比把所有东西堆进一个超级 Prompt 更清晰。

## Prompt Engineer 的能力边界也变了

真正成熟的 Prompt Engineer 不会只优化自然语言。

他需要理解：

- 模型如何消费上下文。
- 系统如何装配上下文。
- 工具调用怎样改变下一轮输入。
- 状态怎样跨轮保存。
- 评测怎样发现行为退化。

这也解释了为什么 Prompt Engineering 会自然生长出 Context、Agent、Harness 与 Evaluation。

## 挂回地图

第一章我们说：你不是在和 AI 聊天，而是在设计运行条件。

现在这个判断完整了：

> **Prompt Engineering 是运行条件设计的起点；Context Engineering 是运行条件的动态管理。**
