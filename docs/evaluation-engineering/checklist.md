# Evaluation Engineering 设计与评审清单

## Target

- 什么行为算成功？
- 哪些错误绝对不能接受？
- Quality、Safety、Cost、Latency 的优先级是什么？

## Cases

- Normal / Edge / Adversarial 都覆盖了吗？
- 历史真实失败进测试集了吗？
- 高风险 Slice 是否单独覆盖？
- Dataset 是否版本化？

## Rubric / Judge

- 标准是否具体、独立？
- 能用程序判断的是否优先自动检查？
- Judge 是否有证据输出？
- Judge 是否经过人工校准？

## Signals

- 是否保存 Final Output？
- Context / Retrieval？
- Tool Calls？
- Trace？
- State Diff？
- Cost / Latency？
- Harness Event？

## Metrics

- 是否只看平均值？
- 高风险 Slice 是否单独看？
- 指标是否真的对应 Target？

## Failure Taxonomy

- 失败分类是否稳定？
- 是否能路由到 Prompt / Context / Agent / Harness / Eval 层？

## Regression

- Baseline 明确吗？
- Candidate 是否跑同一 Dataset？
- 修复有没有造成其他 Slice 退化？

## Production Feedback

- 线上 Failure / Trace 能回流吗？
- Drift 能被发现吗？
- 新失败是否进入 Regression Set？

## Improvement Loop

- 每次修复是否留下 Case？
- 失败是否被转成 Rule、Guardrail、Harness Mechanism 或新的设计？
