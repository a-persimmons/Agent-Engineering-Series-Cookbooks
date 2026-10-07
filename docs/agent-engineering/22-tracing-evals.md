# 22｜Tracing 与 Evals：Agent 要评轨迹，不只评答案

单次 LLM 任务可以只看输入和输出。

Agent 不够。

因为最终答案错误，可能是第 2 步工具选错；也可能前 8 步都对，第 9 步 State 被覆盖。

## Trace 应该记录什么

至少包括：

- 每一轮 Context；
- Decision；
- Tool Call；
- Tool Result / Observation；
- State 变化；
- Feedback；
- Stop Reason；
- token、延迟、成本。

这样你才能还原一条执行轨迹。

## Agent Eval 有三层

### Outcome

任务最终是否完成。

### Trajectory

路径是否合理。

例如有没有调用错误工具、重复步骤、无效搜索。

### System

成本、延迟、失败恢复、安全边界是否符合要求。

最终完成任务，不代表轨迹就可接受。

一个 Agent 可以“碰巧做对”，但花了 50 步和 20 次无效工具调用。

## 失败样本要变成回归集

每出现真实事故：

1. 保存 Trace；
2. 找到失败节点；
3. 归类；
4. 修复；
5. 把案例加入 Eval。

长期看，Agent 能力不是靠 Prompt 越来越长，而是失败不断被固化成系统约束和测试。

## 地图坐标

Tracing 让整个 Loop 可见。

Evals 判断 Loop 是否真的有效。

这也是下一册 Harness Engineering 会继续放大的主题。
