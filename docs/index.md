---
layout: home

hero:
  name: "Agent Engineering Series"
  text: "先长出地图，再学习技巧"
  tagline: "从 Prompt Engineering 开始，逐步进入 Context、Agent、Harness 与 Evaluation。不是术语合集，而是一套能用来设计、诊断和交付 AI 系统的心智模型。"
  image:
    src: /home/series-journey.svg
    alt: Agent Engineering Series 五册学习路径
  actions:
    - theme: brand
      text: 系列1：Prompt →
      link: /prompt-engineering/
    - theme: alt
      text: 系列2：Context
      link: /context-engineering/
    - theme: alt
      text: 系列3：Agent
      link: /agent-engineering/
    - theme: alt
      text: 系列4：Harness
      link: /harness-engineering/
    - theme: alt
      text: 系列5：Evaluation
      link: /evaluation-engineering/
    - theme: alt
      text: 全系列总地图
      link: /series-map

features:
  - icon: "💡"
    title: "系列1：Prompt"
    details: "控制一次模型调用的目标、信息、过程、输出、边界与评价。先把一次模型行为设计清楚。"
    link: /prompt-engineering/
    linkText: 开始阅读
  - icon: "📄"
    title: "系列2：Context"
    details: "控制每一轮模型看到的世界：选择、组织、压缩、记忆与生命周期管理。"
    link: /context-engineering/
    linkText: 开始阅读
  - icon: "🧭"
    title: "系列3：Agent"
    details: "从最小 Loop 出发，理解 ReAct、Planning、Reflection、Tool、State 与 Multi-Agent。"
    link: /agent-engineering/
    linkText: 开始阅读
  - icon: "⚙️"
    title: "系列4：Harness"
    details: "用权限、沙箱、恢复、持久化和可观测性，把 Agent Loop 变成可靠、可维护的系统。"
    link: /harness-engineering/
    linkText: 开始阅读
  - icon: "📊"
    title: "系列5：Evaluation"
    details: "从 Target、Cases、Rubric 到 Regression 与 Production Feedback，用证据驱动持续改进。"
    link: /evaluation-engineering/
    linkText: 开始阅读
---

## 为什么做这个系列

AI 工程里最危险的学习方式，是先收藏一百个名词，再努力记住它们。

Few-shot、CoT、ReAct、RAG、Memory、MCP、Reflection、Agent、Harness……单独看都不难。真正困难的是：**它们为什么出现，解决哪类问题，彼此之间是什么关系。**

这个系列不按术语排列，而是沿着同一个 AI 系统逐层扩大视角：

1. **系列1 · Prompt**：怎样把一次模型行为设计清楚？
2. **系列2 · Context**：怎样让模型每一轮看到真正需要的信息？
3. **系列3 · Agent**：怎样让模型持续决策、行动、观察与修正？
4. **系列4 · Harness**：怎样让 Agent 的行动长期可控、可恢复、可观察？
5. **系列5 · Evaluation**：怎样证明系统真的变好，并把真实失败变成下一版能力？

最终希望留下的不是五袋技巧，而是一张可以继续生长的工程地图。
