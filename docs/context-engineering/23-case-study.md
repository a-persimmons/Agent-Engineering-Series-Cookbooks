# 23｜完整项目：用 256K Context 分析超过窗口的系统日志

我们用一个真正能暴露 Context Engineering 价值的任务：

> 模型上下文只有 256K，但一次根因分析涉及远超过 256K 的日志、调用链、配置和变更记录。怎样完成？

答案不是把 1M 内容切成四段依次发给模型。

那样只是把“超窗”变成“跨轮遗忘”。

真正要做的是建立一个 Context Pipeline。

## V0：全部塞进去

如果模型窗口足够大，最简单方案是：

~~~text
任务说明
+ 全部日志
+ 全部栈
+ 配置
+ 变更
~~~

问题是成本高、噪声大，而且窗口一缩小就彻底失效。

## V1：按时间和组件建立外部索引

原始资料不直接进入模型。

先保存为可检索的外部数据：

- 时间；
- 服务；
- trace id；
- error type；
- source file；
- deployment version。

Context 里只保留索引能力。

## V2：先建立“事件骨架”

第一轮目标不是找根因，而是构建时间线：

~~~text
14:01 发布 v3.7
14:02 API P99 上升
14:02:11 DB connection timeout
14:02:15 retry 激增
14:03 thread pool 饱和
~~~

这份时间线变成 Task State。

## V3：围绕异常节点按需取证

系统对关键节点分别检索：

- 对应 trace；
- 前后日志；
- 相关配置；
- 最近代码变更。

每次只把当前假设需要的证据装入 Context。

## V4：建立 Hypothesis State

~~~json
{
  "hypotheses": [
    {
      "name": "DB connection leak",
      "support": [],
      "counter": [],
      "status": "open"
    }
  ]
}
~~~

模型不需要记住所有历史分析，只需要知道当前候选和证据状态。

## V5：旧证据进入 Archive，结论进入 Durable State

大段日志用完后退出 Runtime Context。

保留：

- 已确认事实；
- 来源指针；
- 当前假设；
- 已排除原因；
- 下一步验证动作。

需要细节时再回查原文。

## V6：阶段性 Compaction

当一个调查阶段结束，把旧 Context 压成“交接状态”：

~~~text
Goal
Confirmed Facts
Rejected Hypotheses
Open Hypotheses
Key Evidence References
Open Questions
Next Actions
~~~

然后继续下一阶段。

## 结果

整个任务从：

> 把所有上下文一次性交给模型

变成：

~~~text
外部事实库
   ↓
Need
   ↓
按需 Retrieval / Tool
   ↓
当前 Working Context
   ↓
Model
   ↓
更新 Task State
   ↓
Archive / Compact
   ↓
下一轮
~~~

256K 不再承担“装下全部世界”的责任。

它只承担：

> **装下当前这一步最有价值的工作集。**

这就是 Context Engineering 最核心的变化。
