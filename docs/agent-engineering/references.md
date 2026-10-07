# 延伸阅读

第三册刻意不以框架作为主线。形成最小 Loop 以后，再看这些资料会更容易知道它们各自在解决什么。

## Agent 设计与模式

- ReAct: Synergizing Reasoning and Acting in Language Models
- Reflexion: Language Agents with Verbal Reinforcement Learning
- Self-Refine
- Anthropic — Building Effective Agents
- DeepLearning.AI — Agentic AI / Agentic Design Patterns

阅读时始终问：

> 这个模式改变 Decision、Action、Observation、State、Feedback 还是 Loop？

## 实现与 Runtime

- OpenAI Agents / Agents SDK 官方文档
- LangGraph 官方文档
- Build Your Own Agent Harness
- Learn Claude Code
- Agents From Scratch

先手写一个最小 Loop，再用框架。这样才能看懂框架替你封装了什么。

## MCP

- [Model Context Protocol Specification](https://modelcontextprotocol.io/specification/)
- [MCP 2026-07-28 Specification Release](https://blog.modelcontextprotocol.io/posts/2026-07-28/)

MCP 解决标准化连接与能力暴露，不替代 Agent Loop、Tool Design、权限和错误恢复。

## 下一册预习

Harness Engineering 会继续关注：

- Agent Runtime；
- Sandbox；
- Permission；
- Retry / Timeout；
- Checkpoint；
- Long-running execution；
- Observability；
- Evals 与失败固化。
