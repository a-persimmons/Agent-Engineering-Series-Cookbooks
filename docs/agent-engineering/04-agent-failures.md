# 04｜Agent 为什么会失败

Agent 的失败不能只看最终答案。

因为错误可能发生在轨迹中的任何一步。

两个 Agent 都给出了错误结论：

- 一个第一步就调用错工具；
- 一个前八步都正确，最后 State 被旧值覆盖。

表面一样，修法完全不同。

## 用 Loop 给失败找位置

### Goal Failure

任务方向漂移，或者 Completion Criteria 一开始就不清楚。

### Context Failure

这一轮看到的信息缺失、噪声过多、冲突或过期。

### Decision Failure

Context 足够，但模型选了错误的下一步。

### Action Failure

工具、参数、权限或执行本身失败。

### Observation Failure

环境已经返回关键信息，但系统丢失、误读或错误压缩。

### State Failure

进度、事实或当前计划没有正确更新。

### Feedback Failure

结果已经说明方向不对，Agent 却没有调整。

### Loop Failure

死循环、重复动作、过早结束或没有预算边界。

## Debug 时不要从 Prompt 开始

假设 Agent 连续三次调用同一个失败工具。

先问：

1. Observation 有没有包含失败原因？
2. State 有没有记录“这个方案已失败”？
3. Feedback 有没有告诉 Decision 不要原样重复？
4. Loop 是否允许无限重复？
5. Tool 描述是否让模型误以为这是唯一选择？

最后才需要判断 Prompt 是否有问题。

## Trajectory 是新的调试单位

单次 LLM 常看：

~~~text
Input → Output
~~~

Agent 要看：

~~~text
Context₁ → Decision₁ → Action₁ → Observation₁
                                  ↓
Context₂ → Decision₂ → Action₂ → Observation₂
...
~~~

只有看到轨迹，才能知道错误在哪里第一次出现。

## 地图坐标

Failure Taxonomy 是最小 Loop 的反向索引。

设计时顺着 Loop；失败时从异常节点往前追。
