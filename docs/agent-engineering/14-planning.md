# 14｜Planning：当局部下一步不够了

ReAct 擅长“现在做什么”。

复杂长任务还需要另一个问题：

> 整体上准备怎么走？

这就是 Planning。

## Plan 的价值

一个 Plan 可以提供：

- 子目标；
- 顺序；
- 依赖；
- 完成度；
- 可重新规划的位置。

例如：

~~~text
Goal: 发布一个新版本

1. 修改代码
2. 补测试
3. 运行完整测试
4. 更新文档
5. 构建
6. 部署
7. 验证
~~~

Agent 每轮只执行当前一步，但始终知道自己在整条路线上的位置。

## Plan 不是一次生成后永远不变

真实环境会打断计划。

测试失败、权限不足、依赖不可用，都可能要求 Replan。

所以更合理的结构是：

~~~text
Plan
↓
Execute Step
↓
Observe
↓
Update State
↓
Keep / Revise Plan
~~~

## Plan-and-Execute 与 ReAct

两者不是竞争关系。

可以理解为：

- ReAct 管局部动作；
- Planning 管全局方向。

复杂 Agent 经常同时使用。

## 计划也可能成为负担

任务很简单时，先生成十步计划反而增加成本。

Planning 适合那些：

- 多阶段；
- 有依赖；
- 需要进度管理；
- 中途可能重排。

## 地图坐标

Planning 主要强化 **Decision + State**。

它让 Loop 不只会“向前走一步”，还知道整体走到哪里。
