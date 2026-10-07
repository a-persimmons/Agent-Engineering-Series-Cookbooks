# 08｜Action：Agent 怎样把决定变成现实

Decision 只是“下一步想做什么”。

Action 才把这个决定送进外部世界。

~~~text
Decision: 需要确认订单状态
↓
Action: 调用 get_order_status(order_id)
↓
Environment: 返回真实订单数据
~~~

没有 Action，模型最多只能建议。

## Action 的第一件事是区分副作用

不是所有动作风险相同。

可以先粗分成：

### Read-only

搜索、查询、读取文件。

即使失败，通常不会改变外部状态。

### Reversible Write

修改草稿、创建临时文件、更新可回滚配置。

### Irreversible / High-risk Write

付款、删除数据、发布生产、向外发送正式内容。

越往后，越不能只靠模型一句“我认为可以执行”。

## Action 需要执行语义

Agent 至少应该知道：

- 调用是否成功；
- 是否产生副作用；
- 是否可以安全重试；
- 是否需要审批；
- 失败后世界处于什么状态。

这些信息会决定下一轮如何处理。

## “调用成功”和“任务成功”是两回事

HTTP 200 只能证明接口执行成功。

它不证明：

- 改动符合 Goal；
- 数据正确；
- 用户真正得到想要的结果。

所以 Action 后必须有 Observation 和 Feedback。

## 地图坐标

Action 是 Agent 与环境之间的执行边界。

这一章关注的是**动作的风险和执行语义**。第 18 章再讨论怎样把具体 API 设计成模型容易使用的 Tool。
