# 12｜Stop：Agent 为什么必须知道什么时候结束

Agent 可以继续行动，是能力。

知道什么时候不再行动，也是能力。

## 常见停止失败

### Too Early

找到一个可能答案就结束，没有验证。

### Too Late

任务已经完成，Agent 仍继续搜索和优化。

### Infinite Loop

同一工具、同一错误反复出现。

### Budget Exhaustion

步数、token、时间或费用耗尽才被迫停止。

## Stop Condition 从 Goal 开始

如果 Goal 没有 Completion Criteria，停止只能靠模型感觉。

更好的方式是把完成条件明确成可检查状态。

例如：

~~~text
修复 Bug 的完成条件：
1. 根因已定位
2. 修改已完成
3. 相关测试通过
4. 没有新增失败
~~~

满足后程序可以直接结束 Loop。

## Hard Stop 与 Soft Stop

Hard Stop：

- 最大步数；
- 预算；
- 超时；
- 权限失败。

Soft Stop：

- 模型判断任务完成；
- Evaluator 达到阈值；
- 没有更多高价值动作。

两者通常要同时存在。

## 地图坐标

Stop 是 Loop 的出口。

它提醒我们：自主性必须有边界，否则“持续运行”很容易变成“持续消耗”。
