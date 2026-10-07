# 延伸阅读

第四册不要求你绑定某个框架。真正值得追的是：一个 Runtime 到底提供了哪些可执行保证。

## Harness 与 Agent-first Engineering

- [OpenAI — Harness engineering: leveraging Codex in an agent-first world](https://openai.com/index/harness-engineering/)
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)
- [OpenAI Agents SDK — Human-in-the-loop](https://openai.github.io/openai-agents-js/guides/human-in-the-loop/)
- [OpenAI Agents SDK — Tracing](https://openai.github.io/openai-agents-js/guides/tracing/)
- [OpenAI Agents SDK — Guardrails](https://openai.github.io/openai-agents-js/guides/guardrails/)

阅读这些资料时，不要只看“功能列表”。

把每个设计放回：

> Permission / Isolation / Validation / Limits / Recovery / Persistence / Observability / Evaluation

例如 approval 不是一个 UI 功能，而是 Permission + Persistence + Resume 的交叉点；Tracing 也不是“有日志”，而是 Observability 的实现。

## Durable Runtime

- [OpenAI Agents SDK — Running agents / durable execution integrations](https://openai.github.io/openai-agents-python/running_agents/)
- [LangGraph Documentation](https://docs.langchain.com/oss/python/langgraph/overview)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/specification/)

重点观察：

- State 怎样跨进程存在；
- Pause / Resume 的边界在哪里；
- Tool side effect 是否可能被重放；
- Approval 怎样持久化；
- Trace 能不能还原真实执行顺序。

## 项目式学习

- [Build Your Own Agent Harness](https://github.com/djscruggs/build-your-own-harness)
- [Learn Harness Engineering](https://github.com/walkinglabs/learn-harness-engineering)
- [Learn Claude Code](https://github.com/shareAI-lab/learn-claude-code)

学习时不要只 clone 完整项目。

更有效的方式是：

~~~text
先让一个最小 Agent 暴露失败
→ 加一个 Harness Primitive
→ 故意制造同类失败
→ 验证机制真的拦住了
~~~

## 软件可靠性基础

Harness Engineering 的很多底层问题不是 AI 独有：

- idempotency / operation journal；
- retry / backoff / circuit breaker；
- transaction / compensation；
- sandboxing / least privilege；
- audit logging / distributed tracing；
- checkpoint / recovery；
- fault injection；
- cancellation propagation。

Agent 的特殊之处，是控制流更动态、Action 由模型在运行时选择，因此这些经典问题更容易以长尾组合重新出现。

## 阅读时始终问

> 这个机制只是“提醒模型”，还是已经成为模型无法绕过的运行事实？

能回答这个问题，才真正进入 Harness Engineering。
