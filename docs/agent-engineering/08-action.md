# 08｜Action：Agent 怎样改变世界

如果模型只能生成文本，它最多是一个会建议下一步的助手。

Agent 真正进入环境，要靠 Action。

Action 可以是：

- 搜索；
- 查询数据库；
- 调 API；
- 运行代码；
- 修改文件；
- 发消息；
- 操作浏览器；
- 启动另一个 Agent。

## Tool Schema 是 Action Contract

一个工具至少需要说清楚：

- 它做什么；
- 什么时候适用；
- 参数；
- 返回值；
- 失败方式；
- 副作用。

如果两个工具描述含糊或重叠，模型会更容易选错。

## Action 要区分读和写

查询天气和删除数据都是 Tool Call，但风险完全不同。

可以粗略分成：

- Read-only；
- Reversible Write；
- Irreversible / High-risk Write。

不同等级应该有不同权限和审批策略。

## Action 成功不等于任务成功

工具返回 200，只说明调用成功。

它不保证：

- 数据符合预期；
- 文件真的改对；
- 邮件内容正确；
- 任务目标已经推进。

所以每个 Action 后都需要 Observation 和 Feedback。

## 地图坐标

Action 是 Agent 影响外部世界的接口。

Function Calling、Computer Use、MCP Tool 都属于这一层。
