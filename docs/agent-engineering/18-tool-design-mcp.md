# 18｜Tool Design：Agent 的能力边界写在工具里

模型能做什么，很大程度取决于系统给了它什么 Action。

所以 Tool Design 不是“把 API 包成 Function Calling”这么简单。

## 一个好工具应该让决策变容易

工具名称和描述应该清楚区分。

例如：

~~~text
search_orders
get_order_detail
refund_order
~~~

比：

~~~text
query
process
handle
~~~

更容易让模型选对。

## 参数应该表达业务语义

如果底层 API 很复杂，不一定要原样暴露。

模型更适合操作稳定的业务动作，而不是拼底层协议细节。

例如让模型调用：

~~~text
refund_order(order_id, reason)
~~~

通常比让它自己构造一串 HTTP 参数可靠。

## Tool Result 也要设计

返回结果应该让下一轮容易判断：

- success / failure；
- 关键数据；
- 错误类型；
- 是否可重试；
- 下一步需要什么。

不要把内部异常栈直接当成唯一返回。

## MCP 放在这里理解

MCP 可以标准化工具和上下文资源的暴露方式。

但它不替你解决：

- 工具粒度；
- 权限；
- 副作用；
- 重试；
- 结果语义。

协议解决连接问题，Agent Engineering 仍然要解决行为设计。

## 地图坐标

Tool Design 主要作用于 **Action + Observation**。

工具边界越清楚，Decision 越容易稳定。
