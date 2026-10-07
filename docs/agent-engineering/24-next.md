# 24｜下一站：Harness Engineering

第三册到这里结束。

如果 Agent Engineering 已经形成地图，你现在看到 ReAct、Planning、Reflection、Multi-Agent，不会再把它们看成彼此独立的“高级玩法”。

它们都在改造同一条 Loop：

~~~text
Goal
↓
Context
↓
Decision
↓
Action
↓
Observation
↓
State
↓
Feedback
↓
Next Loop
~~~

## 为什么还需要 Harness

一个 Agent “能跑起来”，离“能放进真实生产”还有很远。

例如：

- Tool 能不能访问生产数据库？
- 写文件有没有沙箱？
- 一直循环怎么办？
- 运行到一半进程挂了怎么办？
- 工具执行了一半，状态怎么恢复？
- 每一步花了多少钱？
- 哪个版本的 Prompt 和 Tool 造成了事故？
- 哪些动作必须人工审批？

这些问题不会让 Agent 更聪明。

它们让 Agent **可控、可恢复、可观察、可审计**。

## 下一册的核心问题

**《Harness Engineering：让 Agent 可靠运行》**

会把整条 Agent Loop 包进一个运行壳：

- Permission；
- Sandbox；
- Timeout；
- Retry；
- Budget；
- Checkpoint；
- Persistence；
- Observability；
- Error Recovery；
- Long-running Tasks。

第三册学的是 Agent 怎样行动。

第四册开始解决：

> **怎样让它安全、稳定、长期地行动。**
