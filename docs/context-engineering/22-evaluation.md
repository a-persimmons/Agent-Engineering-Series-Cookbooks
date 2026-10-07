# 22｜Evaluation：怎样评测 Context，而不是只评最终答案

Context 好不好，不能只看“检索召回率”。

因为 Context 最终是为模型决策服务的。

## 三层评测

### Retrieval / Source 层

- 需要的信息有没有被找到；
- 来源是否正确；
- 是否最新；
- 是否有重复和冲突。

### Context 层

- 真正有用的信息是否进入 Runtime Context；
- 噪声比例怎样；
- 关键信息是否被压缩丢失；
- Context 是否超过合理预算。

### Outcome 层

- 模型最终决策是否更正确；
- 是否减少无证据断言；
- 是否能完成任务；
- 成本和延迟是否可接受。

只优化第一层，很容易得到“检索指标很好，Agent 还是不好用”。

## 反事实测试

Context Evaluation 很适合做对照：

- 删除某段信息，结果会不会变差；
- 加入一段噪声，系统是否仍稳定；
- 把旧事实与新事实同时放入，模型能否选对；
- compaction 前后关键任务能力是否保持。

这些测试能直接验证 Context 策略。

## 建立 Context Regression Set

把真实失败按类别保存：

- Missing；
- Noise；
- Conflict；
- Stale；
- Duplication；
- Misplacement。

以后任何检索、压缩、Memory 改动都跑一遍。

## 地图坐标

Evaluation 是整个 Context Pipeline 的闭环。

没有它，Context 优化很容易退化成“Top-K 改成 8 看起来好像更好”。
