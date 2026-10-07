# 18｜Tool Design：把外部能力翻译成模型能稳定选择的动作

第 8 章讨论了 Action 的风险和执行语义。

这里换一个视角：

> 已经有一组 API、脚本和系统能力，应该怎样包装成模型容易理解、容易调用、容易恢复的 Tool？

## Tool 名称就是决策界面

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

更容易选。

模型每次 Tool Selection，本质上都在做分类。名称和描述越重叠，Decision 越不稳定。

## Tool 粒度不要直接复制底层 API

底层系统可能需要十几个参数。

Agent 不一定需要看到这些实现细节。

例如业务动作：

~~~text
refund_order(order_id, reason)
~~~

通常比让模型自己拼 HTTP path、header、status code 和内部枚举更稳定。

Tool 是模型与业务系统之间的一层语义适配。

## 返回值是下一轮 Context

Tool Result 最好明确：

- 是否成功；
- 关键结果；
- 错误类型；
- 是否可重试；
- 产生了什么副作用；
- 下一步是否需要额外信息。

不要只返回一大段内部日志，然后让模型自己猜调用到底成功没有。

## Tool Set 也需要控制规模

工具越多，不代表 Agent 越强。

几十个相似 Tool 会提高选择难度。

可以按当前任务动态暴露工具，或者把底层能力聚合成更清晰的业务动作。

## MCP 放在这里理解

MCP 可以标准化 Tools、Resources、Prompts 等能力的暴露和连接。

它解决的是接口与互操作问题。

它不会替你决定：

- Tool 应该多大；
- 哪些动作需要审批；
- 失败能否重试；
- 返回值怎样表达；
- 当前 Agent 应该看见哪些 Tool。

这些仍然属于 Tool / Agent Design。

## 地图坐标

Tool Design 连接 **Decision → Action → Observation**。

它的目标不是“把 API 接进来”，而是让这条链更容易做对。
