# 20｜Subagent：什么时候值得再启动一个 Loop

复杂任务里，一个 Agent 可以把子任务交给另一个 Agent。

这就是 Subagent。

但它的价值不在于“多一个模型看起来更强”。

## 为什么使用 Subagent

### Context Isolation

子任务有大量独立材料，不值得塞进主 Agent。

### 专门能力

子任务需要不同工具、指令或模型。

### 并行

多个独立子任务可以同时执行。

### 责任边界

主 Agent 只负责计划和汇总，子 Agent 负责具体工作。

## Handoff 要包含什么

把一句“帮我研究这个”扔给 Subagent，问题很大。

至少要传：

- Goal；
- Scope；
- 必要 Context；
- Output Contract；
- Constraints；
- Completion Criteria。

也就是给它一个完整、有限的子任务。

## 返回结果不要带整段历史

Subagent 完成后，主 Agent 通常需要的是：

- 结论；
- 证据；
- 风险；
- 未解决问题；
- 产物引用。

不是子 Agent 的全部过程日志。

这正是 Context Isolation 的延伸。

## 地图坐标

Subagent 本质是：

> 当前 Loop 把一个子目标交给另一个 Loop，再把结果作为 Observation 收回来。

理解这一点后，Multi-Agent 就不再神秘。
