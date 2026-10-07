# Context Engineering 设计与评审清单

这不是固定模板。它用于设计和 Debug 时防止漏掉关键问题。

## Need

- 当前步骤真正要做什么判断？
- 哪些信息缺失会直接导致错误？
- 有没有把“未来可能用到”误当成“现在必须加载”？

## Source

- 信息来自 Instructions、History、State、Memory、Retrieval 还是 Tool？
- 来源是否可信、可追溯、最新？
- 同一事实是否存在多个来源？

## Select

- 每段 Context 都会影响当前决策吗？
- 是否存在明显无关、重复或已完成的信息？
- 是否可以改成按需获取？

## Shape

- 原始内容是最适合模型使用的形式吗？
- Facts、Hypotheses、Decisions 是否混在一起？
- 压缩后是否仍保留 provenance？

## Budget

- 哪一类内容占用最多？
- 高价值信息是否被大量工具日志淹没？
- 是否需要 trimming、summary 或 compaction？

## Lifecycle

- 信息应该存活一轮、一个任务、一个会话还是长期？
- 什么时候过期？
- 旧版本如何失效？
- State 和 Memory 是否混用？

## Evaluation

- 有 Missing / Noise / Conflict / Stale 等失败样本吗？
- Context 策略改动有没有回归测试？
- 是否同时评 Source、Runtime Context 和最终 Outcome？

如果每次设计和复盘都能自然问出这些问题，就不再需要依赖这张清单。
