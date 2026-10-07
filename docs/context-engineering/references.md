# 延伸阅读

第二册的主线不是某个框架，但下面这些材料值得在建立地图之后继续深入。

## Context Engineering

- [Anthropic — Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [OpenAI Cookbook — Context Engineering: Short-Term Memory Management with Sessions](https://developers.openai.com/cookbook/examples/agents_sdk/session_memory)
- [OpenAI Cookbook — Building Reliable Agents with Memory and Compaction](https://developers.openai.com/cookbook/examples/agents_sdk/building_reliable_agents_memory_compaction)
- [OpenAI Agents SDK — Sessions](https://openai.github.io/openai-agents-js/guides/sessions/)

阅读时重点观察：这些资料怎样处理 selection、compression、state 和 long-running context，而不是抄实现细节。

## State / Persistence / Memory

- [LangGraph — Thinking in LangGraph](https://docs.langchain.com/oss/javascript/langgraph/thinking-in-langgraph)
- [LangChain Learn — Memory / Context Engineering](https://docs.langchain.com/oss/python/learn)
- OpenAI Agents SDK 关于 conversation state、sessions、memory 与 compaction 的官方文档

重点区分：Conversation History、Checkpoint、Store、Long-term Memory 分别负责什么。

## MCP 与 Just-in-time Context

- [Model Context Protocol Specification](https://modelcontextprotocol.io/specification/)
- [MCP 2026-07-28 Specification Release](https://blog.modelcontextprotocol.io/posts/2026-07-28/)

MCP 可以提供 Tools、Resources、Prompts 等标准接口，但不要把协议本身误认为 Context Strategy。

## 经典研究方向

可以继续查阅：

- Retrieval-Augmented Generation（RAG）
- Lost in the Middle
- LongLLMLingua / prompt compression
- RAPTOR
- Self-RAG
- MemGPT / long-term memory systems

读论文时仍然使用本书地图：

> 它解决 Need、Source、Select、Shape、Budget、Lifecycle 中的哪一个问题？它用什么 Evaluation 证明有效？

这样新技术才不会再次变成孤立关键词。
