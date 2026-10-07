# Harness Engineering：让 Agent 可靠运行

> Agent Engineering 解决“怎样让模型持续决策和行动”。Harness Engineering 解决另一个问题：**怎样让这条 Loop 在真实环境里长期、可控地运行。**

一个 Agent 能调用 Tool、会 Planning、会 Reflection，还不能说明它适合进生产。

真正的生产问题往往长这样：

- 它能访问哪些资源？
- 执行环境出了问题会伤到哪里？
- 非法参数谁拦？
- 一个 Loop 最多跑多久？
- 超时以后动作到底成功没有？
- 进程重启会不会重复副作用？
- 出事故能不能还原？
- 同一种事故修过以后会不会再来？

这一册的主地图是：

![Harness Engineering 核心地图](/diagrams/harness/core-map.svg)

**Permission → Isolation → Validation → Limits → Recovery → Persistence → Observability → Evaluation**

## 读完后应该形成三种反射

### 约束反射

看到一条 Prompt 规则，会先问：

> 这条规则能不能由程序直接强制执行？

能的话，就不让模型独自承担。

### 故障反射

看到 Timeout、Retry、Crash，不只问“怎么继续”，而会先确认：

> 外部世界现在到底是什么状态？

副作用状态未知时，恢复策略必须先对账。

### 生产反射

看到一个能跑的 Agent，会自然检查：

> Permission、Sandbox、Budget、Checkpoint、Trace、Recovery 在哪里？

如果找不到，就知道它仍然更接近 Demo。

## 怎么读

最好沿用第三册的 Mini Coding Agent。

每读一章，就把一个“靠运气”的假设改成机制：

~~~text
希望它别越权
→ Permission

希望 Shell 别跑死
→ Timeout

希望崩了能继续
→ Checkpoint / Persistence

希望不要重复发邮件
→ Idempotency

希望事故能查
→ Trace / Audit
~~~

到第 23 章，你会看到 Agent 没有变聪明，但系统开始变得可相信。
