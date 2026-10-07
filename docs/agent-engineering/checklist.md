# Agent Engineering 设计与评审清单

这张表用于设计和 Debug，不是固定模板。

## Goal

- 最终任务是什么？
- Completion Criteria 是什么？
- 当前 Step 和最终 Goal 是否分开？

## Context

- 当前 Decision 真正需要什么？
- 是否带入无关历史？
- Tool Definitions 是否过多或重叠？

## Decision

- 哪些判断应该交给模型？
- 哪些确定规则应该由程序执行？
- 当前自主性是否超过任务需要？

## Action

- Tool 粒度是否清楚？
- 参数和返回语义是否稳定？
- 写操作是否有权限与副作用控制？

## Observation

- Tool Result 是否被正确理解？
- 是否保留原始证据？
- 错误有没有明确进入下一轮？

## State

- 已完成工作是否更新？
- 当前计划和阻塞是否明确？
- State、History、Memory 是否混淆？

## Feedback

- 有没有外部可验证信号？
- 失败会不会改变下一步策略？
- 是否只依赖模型自评？

## Loop

- Stop Condition 是什么？
- 有最大步数、时间和预算吗？
- 是否可能重复同一动作？
- 中断后能否恢复？

## Eval

- 是否保存 Trace？
- 是否评 Outcome、Trajectory 和 System 三层？
- 真实失败是否进入回归集？
