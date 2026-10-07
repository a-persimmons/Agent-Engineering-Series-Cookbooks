# 延伸阅读

这本书不按“技巧列表”组织，但读完六问地图之后，仍然值得回到官方指南和经典工作里看细节。阅读这些材料时，建议继续做同一件事：**把每条建议挂回 Goal、Context、Process、Output、Constraints、Evaluation。**

## 官方实践指南

### OpenAI：Prompting

https://developers.openai.com/api/docs/guides/prompting

适合重点看：

- 如何组织 instructions、task-specific details 与 examples；
- 为什么生产 Prompt 应该像代码一样版本化、测试和评审；
- Prompt 修改为什么应该和 eval cases 一起运行。

不要把示例当模板抄。重点观察官方建议分别在控制哪一层。

### Anthropic：Prompting best practices

https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables

适合重点看：

- 清晰指令与 examples；
- XML / 结构化边界；
- thinking 与 agentic system 场景；
- 不同模型版本之间为什么需要重新校准 Prompt。

### Google：Prompt design strategies

https://ai.google.dev/gemini-api/docs/prompting-strategies

适合重点看：

- 清晰、直接的指令；
- 长上下文中的结构与位置；
- 多模态输入怎样保持语义一致；
- 为什么 Prompt Engineering 必须是迭代和测试驱动的。

## 推理与 Agent 方向的经典工作

这些论文不是为了在第一册里继续扩展技巧，而是帮助理解 Process 为什么后来会演化成 Agent Loop。

### Chain-of-Thought Prompting Elicits Reasoning in Large Language Models

https://arxiv.org/abs/2201.11903

重点不是记“step by step”，而是理解：复杂任务为什么需要中间表示。

### Self-Consistency Improves Chain of Thought Reasoning in Language Models

https://arxiv.org/abs/2203.11171

重点看：当单一路径不稳定时，为什么“多条候选路径 + 聚合”可能比继续拉长单条 Prompt 更有效。

### ReAct: Synergizing Reasoning and Acting in Language Models

https://arxiv.org/abs/2210.03629

重点看 Process 怎样开始和 Action、Observation 结合。这是从 Prompt Engineering 进入 Agent Engineering 的关键桥梁之一。

### Reflexion: Language Agents with Verbal Reinforcement Learning

https://arxiv.org/abs/2303.11366

重点看 Feedback 怎样进入下一轮决策，而不是把 Reflection 只理解成一句“再检查一次”。

## Structured Output 与 Tool Calling

这一部分不要依赖书里的固定写法。

JSON Schema、strict mode、tool calling、structured output 等能力会随模型和 API 变化。真正做项目时，优先查你当前模型供应商的官方文档。

原则保持不变：

> **能由 API / Schema / Runtime 强制保证的约束，不要只靠自然语言提醒模型。**

## 怎样读这些资料

建议不要从头到尾刷完再回来实践。

拿你自己的一个真实 Prompt：

1. 先用本书六问地图做出 V1；
2. 跑一组 Case；
3. 确认当前失败属于哪一层；
4. 只去查与这类失败相关的官方章节或论文；
5. 修改后重新回归。

这样阅读资料是在解决问题，而不是继续增加术语收藏。
