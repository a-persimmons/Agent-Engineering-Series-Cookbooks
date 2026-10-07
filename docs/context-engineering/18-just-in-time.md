# 18｜Just-in-time Context：需要时再拿

Context Engineering 一个非常实用的方向是：

> 不把未来可能用到的信息提前装进窗口，而是在真正需要时获取。

这就是 Just-in-time Context。

## 为什么它比“预加载一切”更自然

一个 Coding Agent 不需要一开始就读完整个仓库。

它可以先：

- 看目录；
- 搜索相关符号；
- 打开需要的文件；
- 运行测试；
- 根据结果继续读取。

信息随着任务推进逐步进入 Context。

## Tool 是获取 Context 的动作

搜索、数据库查询、文件读取、Web 请求，本质上都可以理解成：

> Agent 主动为下一步决策补充 Context。

这也是 Tool Use 和 Context Engineering 的交叉点。

## MCP 放在哪里理解

MCP 提供了标准化的 Tools、Resources、Prompts 等原语。

从 Context 视角看：

- **Resources** 提供应用管理的上下文资源；
- **Tools** 允许模型按需获取信息或采取行动；
- **Prompts** 提供可复用交互模板。

协议本身不是 Context 策略。

真正的策略仍然是：什么时候获取什么、结果怎样进入 Context、保留多久。

## Just-in-time 的代价

按需获取也有成本：

- 工具调用延迟；
- 外部系统可能失败；
- 结果可能不稳定；
- Agent 需要知道什么时候该查。

所以关键不是“全部提前加载”与“全部实时获取”二选一，而是把信息按生命周期分层。

## 地图坐标

Just-in-time Context 把 **Need → Source → Select** 连接成动态过程。

从这里开始，Context Engineering 已经明显进入 Agent Loop。
