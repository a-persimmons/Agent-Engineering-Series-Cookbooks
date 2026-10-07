# 延伸阅读

第五册的重点不是某个 Eval Framework，而是建立一条能从 Target 走到 Production Feedback，再回到 Regression 的闭环。

## Agent Evals 与生产评测

- [OpenAI — Evaluate agent workflows](https://developers.openai.com/api/docs/guides/agent-evals)
- [OpenAI Cookbook — Evals topic](https://developers.openai.com/cookbook/topic/evals)
- [OpenAI Cookbook — Build an Agent Improvement Loop with Traces, Evals, and Codex](https://developers.openai.com/cookbook/examples/agents_sdk/agent_improvement_loop)
- [Anthropic — Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)

这些资料很适合和本册地图对照阅读：

> Target → Cases → Rubric → Signals → Metrics → Failure Taxonomy → Regression → Production Feedback → Improvement Loop

尤其注意 Agent Eval 里的 **task / trial / grader / trace** 区分：一个 Case 跑一次只是一次 trial；概率系统往往需要多次 trial 才能估计稳定能力。

## LLM-as-Judge

值得继续研究：

- rubric design；
- judge calibration；
- pairwise evaluation；
- position bias；
- self-preference；
- human agreement；
- low-confidence escalation。

Judge 本身也是模型，因此也需要自己的 Dataset、Rubric 和 Calibration。

## Eval Dataset 与统计视角

当系统进入稳定迭代期，可以继续补：

- holdout / eval leakage；
- confidence interval；
- repeated trials；
- paired comparison；
- stratified slices；
- drift detection；
- capability vs regression evals。

早期不必把 Eval 做成统计研究，但发布决策越重要，越不能把单次成功截图当成稳定能力。

## 软件测试与可靠性

Evaluation Engineering 很多底层思想来自传统工程：

- unit / integration / end-to-end；
- regression testing；
- property-based testing；
- fault injection；
- canary / shadow traffic；
- observability；
- SLO / error budget；
- incident postmortem。

AI 系统的特殊之处是行为更概率化、路径更动态，因此传统测试不是失效，而是要和语义评测、轨迹评测一起使用。

## 最后一条阅读建议

以后看到任何新的“AI Eval Framework”，先问：

1. 它在测什么 Target？
2. Cases 从哪里来，是否覆盖风险分布？
3. 一个 Case 跑几次，随机性怎么处理？
4. Judge 依据什么 Rubric，是否校准？
5. 能看到哪些 Signals / Traces？
6. Failure 能不能路由到具体工程层？
7. 能不能做 Regression？
8. 线上数据能不能回流？

如果这些问题答不清，框架再漂亮，也还没有构成完整的 Evaluation Engineering。
