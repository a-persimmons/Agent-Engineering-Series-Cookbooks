# 22｜从 Coding Agent 看 Harness 为什么重要

Coding Agent 是观察 Harness 最直观的场景。

它有很强的 Action：

- 读写文件；
- 运行 Shell；
- Git 操作；
- 测试；
- 网络；
- 调用其他工具。

Action 越强，Harness 越重要。

## 一个 Coding Agent 周围有什么

可以看到：

~~~text
Instructions
Workspace
Tool Registry
Permission
Sandbox
Hooks
State
Checkpoint
Context Compaction
Trace
Budget
Approval
Error Recovery
~~~

这些东西没有一个是“模型推理算法”。

但它们共同决定 Coding Agent 能否持续工作。

## AGENTS.md / 项目指令放在哪里

它们更像 Environment Instructions。

告诉 Agent：

- 这个项目怎样工作；
- 哪些命令可用；
- 代码规范；
- 测试方式；
- 目录约束。

Harness 负责保证这些指令和真实环境一致。

## 为什么 Harness 会不断吸收经验

Agent 某次犯错：

> 修改了不该改的目录。

最弱的修法：

> Prompt 加一句“不要改”。

更强的修法：

> Permission 层限制 writable_paths。

这就是 Harness Engineering 的核心进化方式：

> **把重复出现的失败，从提醒变成机制。**

## 地图坐标

真实 Coding Agent 不是一个复杂 Prompt。

它是 Model + Agent Loop + Context System + Harness 的组合。
