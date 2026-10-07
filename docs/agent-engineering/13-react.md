# 13｜ReAct：让“想下一步”和“看结果”交替发生

ReAct 经常被介绍成一种 Prompt Technique。

如果前面的 Loop 已经在脑子里，它其实很好理解。

![ReAct 与 Planning 在 Agent Loop 中的分工](/diagrams/agent/react-planning.svg)

~~~text
Reason
↓
Action
↓
Observation
↓
Reason
↓
Action
↓
Observation
~~~

它做的事情很朴素：

> 不要求模型一开始把整条路想完，而是做一步、看一次环境，再决定下一步。

## 为什么这比一次性推理更适合很多任务

假设你要找一家公司的收入为什么下降。

一开始你并不知道答案藏在哪。

可能先读财报；读完发现某地区拖累明显；再去查地区数据；随后发现问题集中在某产品线；最后才形成结论。

每次 Observation 都会改变后面的搜索方向。

如果要求模型一开始就写完整计划，计划很可能建立在尚不存在的信息上。

ReAct 允许计划在现实反馈中逐步展开。

## 工程上不用追求“打印完整思维链”

真正有价值的是可观察的行为轨迹：

- 当前准备做什么；
- 调用了哪个 Action；
- 环境返回了什么；
- 下一步有没有因此变化。

这些已经足够做 Trace 和 Eval。

## ReAct 为什么还不够

它很擅长局部推进。

但任务一长，就容易出现：

- 忘记总目标；
- 重复探索；
- 不知道完成到哪里；
- 没有全局依赖关系。

于是下一章自然会出现 Planning。

## 地图坐标

ReAct 组织的是：

**Decision → Action → Observation → Next Decision**

它是一种 Loop Pattern，不是 Agent 的完整架构。
