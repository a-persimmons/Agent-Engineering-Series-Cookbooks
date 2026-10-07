# 22｜从 Prompt 到 Context Engineering

Prompt Engineering 关注的是：

> 如何设计模型这一次调用的行为条件？

Context Engineering 进一步问：

> 在系统持续运行的过程中，每一轮究竟应该让模型看到什么？

两者不是替代关系，而是尺度变化。

![从 Prompt Engineering 到更大尺度的 AI Engineering](/diagrams/prompt/transition.svg)

## 从静态文本到动态装配

一个真实 Agent 的 Context 可能来自：

- System instructions。
- 用户当前请求。
- 当前任务状态。
- 历史摘要。
- 长期记忆。
- RAG 检索结果。
- 工具定义。
- 工具调用结果。
- 环境状态。
- Examples。

这些内容并不会永久全部存在。

系统需要决定：

~~~
选择什么
什么时候加载
保留多久
什么时候压缩
什么时候丢弃
什么时候重新检索
~~~

这已经是一套完整工程问题。

## Prompt Engineering 的知识没有作废

六个问题仍然成立。

区别在于，Context 不再是作者手工粘贴的一段材料，而是系统动态产生的。

例如：

- Goal 可能来自任务状态。
- Context 可能来自检索和 Memory。
- Process 可能由 Agent Loop 决定。
- Output 可能由 Tool Schema 限制。
- Constraints 可能部分由权限系统执行。
- Evaluation 可能在每个步骤自动运行。

## 一个承上启下的判断

如果你的问题仍然可以通过“修改这一段输入”解决，主要还是 Prompt Engineering。

如果问题变成“不同时间、不同状态下该动态装载什么”，你已经进入 Context Engineering。

这就是第一本书真正想把你送到的位置。
