# 13｜ReAct：最经典的 Agent Loop

ReAct 常被当成一种 Prompt 技巧。

放回 Agent Loop 看，它其实很简单：

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

它把“想下一步”和“看环境反馈”交替起来。

## 为什么 ReAct 有用

很多任务无法一次推理到终点。

例如：

> 找出某家公司最近一次财报里收入下降的原因。

模型可能需要：

1. 搜财报；
2. 读相关章节；
3. 发现原因涉及某地区；
4. 再查地区数据；
5. 最后形成结论。

每次 Observation 都会改变下一步 Decision。

## ReAct 不是“把思维过程打印出来”

工程上真正重要的是：

- 当前要做什么动作；
- 为什么这个动作有价值；
- 工具返回了什么；
- 下一步是否因此改变。

不需要依赖公开完整内部思维。

## ReAct 的局限

如果任务很长，只靠局部“下一步”容易：

- 迷失总目标；
- 重复探索；
- 缺少长期计划；
- 难以知道完成度。

这就是 Planning 会出现的原因。

## 地图坐标

ReAct 主要组织 **Decision → Action → Observation** 的局部 Loop。

它是 Agent 设计模式，不是 Agent Engineering 的全部。
