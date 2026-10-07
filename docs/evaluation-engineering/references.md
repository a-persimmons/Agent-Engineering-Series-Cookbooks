# 延伸阅读

## Eval 与 Agent Eval

优先阅读当前模型与 Agent 平台的官方 Evals、Tracing 和 production evaluation 文档。

可以重点关注：

- OpenAI Evals / Agent Evals / Tracing Cookbooks
- Anthropic 关于 Agent Evals、可靠性与生产评测的工程文章
- DeepLearning.AI 的 Agentic AI / Evaluation 课程

阅读时不要先抄 Judge Prompt。

先看它们怎样定义：

> Target、Dataset、Rubric、Trace、Failure、Regression。

## LLM-as-Judge

值得继续研究：

- pairwise evaluation；
- judge calibration；
- position bias；
- rubric design；
- self-preference；
- multi-judge agreement。

Judge 本身也是模型，因此也需要 Eval。

## 软件测试与可靠性

Evaluation Engineering 很多底层思想来自传统工程：

- unit / integration / end-to-end；
- regression testing；
- property-based testing；
- fault injection；
- canary；
- observability；
- SLO / error budget。

AI 系统的特殊之处是行为更概率化、路径更动态。

测试思想并没有失效，反而更重要。

## 最后一条阅读建议

以后看到任何新的“AI Eval Framework”，先问：

1. 它在测什么 Target？
2. Cases 从哪里来？
3. Judge 依据什么 Rubric？
4. 能看到哪些 Signals？
5. Failure 能不能诊断？
6. 能不能做 Regression？
7. 线上数据能不能回流？

如果答不清，这个框架再漂亮，也还没有构成完整的 Evaluation Engineering。
