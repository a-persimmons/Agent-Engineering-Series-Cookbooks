# 07｜Timeout 与 Cancellation：任何动作都必须有结束方式

“等待 Tool 返回”听起来很正常。

但如果 Tool 永远不返回呢？

## 每一层都可能需要 Timeout

- 单次 HTTP；
- Shell 命令；
- 浏览器动作；
- Tool Call；
- Agent Step；
- 整个 Task。

不同层的超时语义不同。

## Timeout 后最重要的问题

不是“报错”。

而是：

> 这个 Action 到底执行成功没有？

例如付款请求超时：

- 客户端没收到响应；
- 服务端可能已经扣款。

这时原样重试可能造成重复操作。

所以 Timeout 必须和 Idempotency、状态查询一起设计。

## Cancellation 也要传播

用户点击停止后：

~~~text
Task Cancel
↓
Agent Loop Cancel
↓
Tool Cancel
↓
Subprocess / Request Cancel
~~~

如果只停止最外层，底层动作可能还在继续。

## 地图坐标

Timeout 和 Cancellation 属于 **Limits + Recovery**。

它们让“停下来”成为真实执行机制，而不是模型的一句决定。
