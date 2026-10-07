# 22｜从 Coding Agent 看 Harness 为什么会越长越厚

Coding Agent 是观察 Harness 最好的场景之一。

因为它天生拥有很强的 Action：

- 读写文件；
- 运行 Shell；
- 安装依赖；
- Git 操作；
- 测试；
- 网络访问；
- 调用外部工具。

能力越强，运行边界越不能含糊。

## 一开始，它可能只有一个 Loop

~~~text
Model
↓
read_file
↓
write_file
↓
run_tests
↓
Model
~~~

跑几次以后，系统开始长出新的东西。

第一次误改目录，于是增加 writable scope。

第一次命令卡死，于是增加 timeout。

第一次任务中断后丢进度，于是增加 checkpoint。

第一次重复执行写操作，于是增加 idempotency。

第一次事故无法复盘，于是增加 trace。

Harness 很少是一次设计完整的。

它通常是被真实失败一点点“逼”出来的。

## 项目指令也属于 Harness 环境

像 AGENTS.md、项目说明、测试约定，会告诉 Agent：

- 这个仓库怎样工作；
- 哪些命令可用；
- 哪些目录有特殊规则；
- 什么算完成。

但文本规则和真实环境必须一致。

如果文档说“运行 npm test”，环境里根本没有依赖，Agent 仍然无法工作。

所以 Harness 不只是 Instructions。

它还必须保证：

> Instructions 描述的世界，与 Agent 实际运行的世界尽量一致。

## 从错误提醒到系统机制

假设 Agent 某次改了不该改的目录。

最弱的修法：

> 在 Prompt 里加一句“请不要修改这个目录”。

更稳的修法：

~~~text
writable_paths = allowed_scope
outside_scope = hard reject
~~~

这就是 Harness 最值得形成的思维：

> **如果一种失败反复出现，而且可以由程序明确判断，就不要永远让模型靠自觉避免。**

## 地图坐标

真实 Coding Agent 往往是四层叠在一起：

~~~text
Model
+ Context System
+ Agent Loop
+ Harness
~~~

把这四层分开以后，很多“Agent 为什么这么复杂”就会变得清楚。
