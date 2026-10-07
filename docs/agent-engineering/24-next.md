# 24｜下一站：Harness Engineering

到这里，Agent 已经不再是一堆零散名词。

ReAct、Planning、Reflection、Subagent、Multi-Agent 都可以放回同一条 Loop：

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

这条 Loop 解释了 Agent 怎样推进任务，但它仍然只描述**行为逻辑**。它没有保证这些行为在真实机器、真实权限和真实副作用下会安全、可恢复地执行。

但它还没有回答另一个更现实的问题：

> **如果这套东西真的要运行几小时、几天，甚至直接碰生产环境，谁来管住它？**

## 一个能跑的 Agent，还不是一个可靠系统

现在把 Mini Coding Agent 放到真实环境里，问题会立刻冒出来：

- 它能不能随便读写文件？
- Shell 命令跑多久必须被终止？
- 同一个 API 最多重试几次？
- 运行到一半进程挂了，状态怎么恢复？
- 一个任务最多花多少钱？
- 哪些写操作必须等人批准？
- 出事故以后，能不能还原它每一步做过什么？

这些问题几乎都不会提升模型智力。

但没有它们，Agent 越有行动能力，风险反而越大。

## Harness 做的是什么

可以先把下一册理解成：

~~~text
┌─────────────────────────┐
│         Harness         │
│                         │
│   Goal → Context        │
│      → Decision         │
│      → Action           │
│      → Observation      │
│      → State            │
│      → Feedback         │
│      → Loop             │
│                         │
└─────────────────────────┘
~~~

Harness 包住整个 Loop，为它提供运行边界。

## 下一册会进入什么

**《Harness Engineering：让 Agent 可靠运行》**

会继续处理：

- Permission；
- Sandbox；
- Timeout；
- Retry；
- Budget；
- Checkpoint；
- Persistence；
- Observability；
- Error Recovery；
- Long-running execution。

第三册回答的是：

> Agent 怎样行动？

第四册开始回答：

> **怎样让这种行动长期可控。**
