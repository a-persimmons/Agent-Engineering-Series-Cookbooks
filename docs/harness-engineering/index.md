# Harness Engineering：让 Agent 可靠运行

> Agent Engineering 解决“怎样让模型持续决策和行动”。Harness Engineering 解决另一个问题：**怎样让这条 Loop 在真实环境里长期、可控地运行。**

一个 Demo Agent 可以只写：

~~~text
Model → Tool → Result → Loop
~~~

放进生产后，问题会立刻出现：

- 哪些 Tool 能用？
- 写操作谁批准？
- Shell 最多跑多久？
- 同一个错误能重试几次？
- 进程挂了从哪里恢复？
- 预算用完怎么办？
- 如何还原事故轨迹？
- 如何把一次失败固化成系统能力？

这些问题很少让模型“更聪明”，却决定系统能不能上线。

第四册的主地图是：

**Permission → Isolation → Validation → Limits → Recovery → Persistence → Observability → Evaluation**

Harness 就是包在 Agent Loop 外面的运行壳。
