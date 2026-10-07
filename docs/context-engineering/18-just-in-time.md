# 18｜Just-in-time Context：需要的时候再拿

有些信息必须长期放在模型眼前。

更多信息其实不必。

一个 Coding Agent 不需要开工前读完整个仓库。它可以先看目录，遇到某个符号时再搜索，准备修改时再打开文件，修改后再运行测试。

信息随着任务推进逐步出现。

这就是 Just-in-time Context。

![Just-in-time Context 的动态装配](/diagrams/context/just-in-time.svg)

## Tool 也是一种“取信息”的动作

我们通常把工具调用理解成 Agent 在“做事”。

从 Context 视角看，它还有另一层意义：

> Agent 发现当前信息不够，于是主动为下一步决策补充 Context。

搜索、数据库查询、文件读取、Web 请求，都可以这样理解。

这会把 Context Engineering 和 Agent Loop 连起来：

~~~text
当前 Context
↓
发现缺口
↓
调用 Tool
↓
得到新信息
↓
下一轮 Context
~~~

## MCP 应该放在什么位置

MCP 提供了 Tools、Resources、Prompts 等标准化原语。

从 Context 视角看：

- Resources 可以提供应用管理的资料；
- Tools 可以让模型按需获取信息或执行动作；
- Prompts 可以提供可复用的交互模板。

但协议不会替你决定：

- 什么时候应该读取资源；
- 一次读取多少；
- 工具结果保留多久；
- 哪些内容应该进入长期 Memory。

这些仍然是 Context Strategy。

## 按需获取也有代价

Just-in-time 不是“永远更好”。

每次实时获取都会增加：

- 延迟；
- 外部依赖；
- 失败概率；
- 调用成本。

所以最终需要的是分层：

- 少量稳定规则长期驻留；
- 当前 State 持续维护；
- 大量事实按需获取；
- 原始历史与工具结果随时退出工作集。

## 地图坐标

Just-in-time Context 把 **Need → Source → Select** 变成动态过程。

从这里开始，Context 不再只是模型调用前的准备工作，它已经进入执行循环。
