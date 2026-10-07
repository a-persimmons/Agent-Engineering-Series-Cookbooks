# 11｜Feedback：系统怎样知道刚才那一步有没有用

没有 Feedback 的 Loop，只会一直执行。

Feedback 让 Agent 有机会判断：

- 方向对不对；
- 动作有没有达到预期；
- 是否需要重试；
- 是否应该换策略；
- 是否已经完成。

## Feedback 从哪里来

### 环境

例如测试通过、API 返回、文件实际变化。

### 规则

例如 Schema 校验、权限检查、业务规则。

### Evaluator

另一个模型或程序对结果评分。

### 人

审批、修正、给出偏好或新约束。

## 最可靠的反馈通常来自环境

Coding Agent 改完代码后运行测试，比让模型自己说“我认为修好了”可靠得多。

数据 Agent 执行 SQL 后检查返回值，也比模型自我评价可靠。

所以能外部验证的任务，尽量不要只依赖 Self-Reflection。

## Feedback 要能改变下一步

如果测试失败，但 Agent 下一轮仍重复同一个修改，说明 Feedback 虽然存在，却没有真正进入 Decision。

反馈不是日志。

它必须能影响 Loop。

## 地图坐标

Feedback 连接 Observation 和下一次 Decision。

Reflection、Evaluator-Optimizer、Human-in-the-loop 都是这一层的不同实现。
