# 15｜Agent Eval：最终做对了，还要看它怎么做对的

Agent 最容易欺骗 Eval 的情况：

> 最终答案是对的，但过程非常差。

例如：

- 调错五次 Tool；
- 花了十倍成本；
- 碰巧搜索到答案；
- 先做了危险动作再修复；
- 重复了大量无效步骤。

如果只看 Outcome，这些问题都看不见。

## Agent Eval 至少两层

### Outcome

任务是否完成。

例如：

- Bug 是否修复；
- 测试是否通过；
- 研究结论是否正确。

### Trajectory

路径是否合理。

例如：

- Tool Selection；
- 参数；
- 步骤数；
- 是否重复；
- 是否正确响应 Feedback；
- 是否越过风险边界。

## 不要要求唯一“正确轨迹”

Agent 任务可能有多条合理路径。

所以 Trajectory Eval 更适合检查：

- 明显错误；
- 不必要循环；
- 禁止动作；
- 必要步骤是否完成；
- 关键证据是否被使用。

而不是要求和 Golden Trace 每一步完全一致。

## Trace 是 Agent Eval 的数据基础

没有 Trace，只保存 Final Answer，就无法做真正的 Agent Evaluation。

## 地图坐标

Agent Eval 把 Signals 从“输出文本”扩展到“执行轨迹”。

这也是 Evaluation Engineering 和 Observability 直接连接的地方。
