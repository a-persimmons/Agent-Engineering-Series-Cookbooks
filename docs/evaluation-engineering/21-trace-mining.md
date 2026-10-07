# 21｜Trace Mining：从很多“个案”里找出同一个系统问题

一条失败 Trace 适合 Debug。

几百条 Trace 放在一起，价值会改变。

它们开始回答：

> 系统是不是反复在同一个地方犯错？

## 可以寻找哪些模式

例如：

- 两个 Tool 之间频繁误选；
- 同一文件被重复读取；
- 某类任务平均多出十步；
- 某个 Timeout 总触发错误 Retry；
- 一类 Context 在 Compaction 后经常丢失；
- 某种 Action 总需要人工审批。

这些不是个案，而是结构性信号。

## 从 Event 到 Cluster

可以先把 Trace 转成特征：

~~~text
failure_type
tool_sequence
error_code
step_count
task_slice
model_version
context_size
~~~

再做聚类或统计。

模型也可以帮助归纳候选 Pattern，但最后仍需要工程判断。

## Pattern 要回到 Failure Taxonomy

例如发现：

> 两个搜索 Tool 导致 32% 的任务出现错误选择。

这可以新增或细化：

~~~text
Tool Selection
└─ Ambiguous Tool Boundary
~~~

然后进入：

- Tool Design 修复；
- 新 Eval Case；
- Regression。

## Trace 必须能关联版本

否则很难回答：

> 这个问题是新模型出现的，还是新 Tool Schema 出现的？

至少关联：

- Agent；
- Model；
- Prompt；
- Toolset；
- Harness；
- Dataset / Environment。

## 地图坐标

Production Feedback 给你新的原始 Signal。

Trace Mining 把这些 Signal 聚成可修的 Failure Pattern。
