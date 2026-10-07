# Evaluation Engineering：让系统可验证、可回归

> AI 系统最危险的一句话是：“我试了几个，看起来挺好的。”

Prompt 改了一版，感觉更听话。

RAG 换了参数，感觉答案更准。

Agent 加了 Reflection，感觉更聪明。

Harness 增加 Retry，感觉更稳定。

如果没有一套稳定的验证方法，这些“感觉”很容易把系统越改越复杂，却不知道到底变好了什么，又退化了什么。

第五册只解决一个问题：

> **怎样定义好、发现坏、证明修复有效，并让以后每次改动都不轻易把旧能力弄坏。**

主地图：

**Target → Cases → Rubric → Signals → Metrics → Failure Taxonomy → Regression → Production Feedback → Improvement Loop**

Evaluation 不是项目最后的打分环节。

它是整个 AI Engineering 的反馈系统。
