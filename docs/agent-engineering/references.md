# 延伸阅读

第三册刻意不以框架作为主线。先能手写最小 Loop，再去看这些资料，会更容易分辨它们分别封装了 Decision、Action、State、Feedback 还是 Runtime。

## Agent 设计与模式

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366)
- [Self-Refine: Iterative Refinement with Self-Feedback](https://arxiv.org/abs/2303.17651)
- [Anthropic — Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)
- [DeepLearning.AI — Agentic AI](https://www.deeplearning.ai/courses/agentic-ai/)

阅读时始终问：

> 这个模式主要改变 Decision、Action、Observation、State、Feedback，还是 Loop？

不要把 Pattern 当成平铺的技巧表。

## Runtime 与框架

- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)
- [LangGraph Documentation](https://docs.langchain.com/oss/python/langgraph/overview)
- [Build Your Own Agent Harness](https://github.com/djscruggs/build-your-own-harness)
- [Learn Claude Code](https://github.com/shareAI-lab/learn-claude-code)

建议顺序仍然是：

~~~text
自己写最小 Loop
→ 加 Tool / State / Stop / Feedback
→ 再看框架替你封装了什么
~~~

框架的 API 会变化，Loop 原语更稳定。

## MCP

- [Model Context Protocol Specification](https://modelcontextprotocol.io/specification/)

MCP 解决能力暴露和互操作，不替代 Tool Design、Agent Loop、权限、恢复与评测。

把 MCP 放回地图时，可以从两个方向看：

- Resources / Prompts 影响 Context；
- Tools 连接 Action；
- 但“什么时候调用、调用后怎么办”仍然属于 Agent Decision 与 Loop。

## Coding Agent / 项目式学习

如果想把本册内容真正练成，可以围绕一个 Mini Coding Agent 反复增加能力：

1. read / write / shell；
2. Tool Result 回到下一轮；
3. 显式 State；
4. tests 作为 Feedback；
5. Planning / Replan；
6. Stop Criteria；
7. Subagent；
8. Trace + Eval。

不要急着追求“像 Claude Code 一样全”。每加一个机制，都先让一个真实失败证明它有必要。

## 下一册预习

Harness Engineering 会继续关注：

- Permission / Isolation；
- Timeout / Cancellation；
- Retry / Reconcile / Idempotency；
- Checkpoint / Persistence / Resume；
- Long-running execution；
- Observability / Audit；
- Failure Injection 与 Harness Evals。

第三册重点是 **Agent 怎样行动**；第四册重点是 **这些行动怎样被可靠地执行**。
