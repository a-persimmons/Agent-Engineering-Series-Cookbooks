# 延伸阅读

## Harness 与 Coding Agent

- OpenAI — Harness Engineering
- Anthropic Engineering — Long-running agents / effective harness patterns
- Build Your Own Agent Harness
- Learn Harness Engineering
- Learn Claude Code

阅读时不要只抄代码结构。

尝试把每个设计放回：

> Permission / Isolation / Validation / Limits / Recovery / Persistence / Observability / Evaluation

## Agent Runtime

- OpenAI Agents / Agents SDK 官方文档
- LangGraph Persistence / Durable Execution
- Model Context Protocol Specification

重点看：

- State 怎样持久化；
- Tool 如何执行；
- Approval 如何暂停和恢复；
- Trace 如何记录；
- 长任务如何继续。

## 软件可靠性基础

Harness Engineering 很多问题其实不是 AI 独有。

值得回到传统工程：

- idempotency；
- retry / backoff；
- circuit breaker；
- transaction / compensation；
- sandboxing；
- audit logging；
- distributed tracing；
- checkpoint / recovery。

AI Agent 只是让这些问题以更动态的控制流重新出现。
