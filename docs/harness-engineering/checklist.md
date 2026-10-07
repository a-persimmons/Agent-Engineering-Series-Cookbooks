# Harness Engineering 设计与评审清单

## Permission

- Tool 是否按 Read / Write / High-risk 分级？
- 资源 Scope 是否明确？
- 高风险动作是否需要 Approval？

## Isolation

- 文件、进程、网络、Secret 是否隔离？
- Agent 的错误爆炸半径有多大？

## Validation

- Tool 参数只做 Schema 校验，还是有业务校验？
- Tool Result 是否验证？
- 路径和命令是否正规化、限制范围？

## Limits

- max steps？
- timeout？
- tool budget？
- cost budget？
- cancellation 是否能向下传播？

## Recovery

- 错误有没有分类？
- Retry 是否有上限？
- 写操作是否幂等？
- 是否需要补偿或 Rollback？

## Persistence

- Checkpoint 保存什么？
- 什么时候保存？
- Resume 前如何 Reconcile？

## Observability

- 能否按 Task 还原完整 Trace？
- State Diff 是否可见？
- 敏感数据是否脱敏？
- 高风险动作是否 Audit？

## Evaluation

- 是否主动注入 Timeout、Permission、Crash 等故障？
- 真实事故有没有进入回归集？
- Harness 改动是否会自动跑可靠性测试？
