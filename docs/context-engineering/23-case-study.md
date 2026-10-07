# 23｜完整项目：用 256K Context 分析超过窗口的系统日志

任务是：

> 模型上下文只有 256K，但一次根因分析涉及远超过 256K 的日志、调用链、配置和变更记录。怎样完成？

最重要的变化不是“找一种更聪明的切片算法”。

![超过窗口的日志分析 Context Pipeline](/diagrams/context/case-pipeline.svg)

而是停止让 Context Window 承担“保存整个世界”的责任。

## V0：全部塞进去

如果窗口足够大，最简单的方案是：

~~~text
任务说明
+ 全部日志
+ 全部栈
+ 配置
+ 变更
~~~

问题是成本高、噪声大，而且窗口一缩小就彻底失效。

**地图位置：Budget 已经成为瓶颈。**

## V1：先定义 Need

第一轮不要求直接给根因。

先问：

> 为了缩小问题范围，现在最需要知道什么？

通常是：

- 最早异常时间；
- 最早异常组件；
- 故障前后变更；
- 受影响请求的 trace。

**地图位置：Need。**

## V2：把原始资料放到外部 Source

日志、栈、配置、变更记录不直接常驻模型。

先保存为可检索数据，并建立：

- 时间；
- 服务；
- trace id；
- error type；
- source file；
- deployment version。

**地图位置：Source。**

## V3：只选择“事件骨架”

先构建一条小时间线：

~~~text
14:01 发布 v3.7
14:02 API P99 上升
14:02:11 DB connection timeout
14:02:15 retry 激增
14:03 thread pool 饱和
~~~

它不是最终答案，而是下一步调查的导航。

**地图位置：Select。**

## V4：把信息变成可工作的 Shape

围绕关键节点按需获取原始证据，同时把当前分析状态组织成：

~~~json
{
  "confirmed_facts": [],
  "hypotheses": [
    {
      "name": "DB connection leak",
      "support": [],
      "counter": [],
      "status": "open"
    }
  ],
  "next_actions": []
}
~~~

Facts、Hypotheses、Actions 不再混在长对话里。

**地图位置：Shape。**

## V5：管理 Working Context Budget

当前轮只保留：

- 当前假设；
- 与假设直接相关的日志；
- 最近工具结果；
- 必要配置片段。

大段旧日志进入 Archive，只保留引用位置。

**地图位置：Budget。**

## V6：让信息换代

一个调查阶段结束后，Runtime Context 压成“交接状态”：

~~~text
Goal
Confirmed Facts
Rejected Hypotheses
Open Hypotheses
Key Evidence References
Open Questions
Next Actions
~~~

旧工具输出退出工作集；已确认结论进入 Durable State；原始数据仍在外部可回查。

**地图位置：Lifecycle。**

## V7：建立 Context Evaluation

准备历史事故，测试：

- 关键证据能否被选中；
- 注入大量噪声后是否仍能定位；
- 同时存在新旧配置时是否选对；
- compaction 前后关键事实是否丢失；
- 256K 预算内是否能完成同样的根因判断。

**地图位置：Evaluation。**

## 最后的系统

~~~text
External Sources
      ↓
     Need
      ↓
Select / Retrieve
      ↓
     Shape
      ↓
Working Context
      ↓
     Model
      ↓
State Update
      ↓
Archive / Compact
      ↓
Next Decision
~~~

这套方案没有让模型“记住全部”。

它做的是更重要的事：

> **让模型在每一步都看到足够做当前决定的信息，并让其他信息随时可以被重新找到。**

这就是 Context Engineering。
