# 16｜Tool / Action Eval：Agent 会不会用工具，比工具多不多更重要

Tool Use 可以单独评。

这能帮助区分：

> 模型不会做任务，还是模型会做任务但 Tool Use 出错？

## Tool Eval 可以看什么

### Selection

该不该调用 Tool？

调用了正确 Tool 吗？

### Arguments

参数正确吗？

有没有漏字段、幻觉 ID、范围错误？

### Sequence

多个 Tool 的顺序合理吗？

### Result Handling

Tool 返回失败以后，Agent 是否正确响应？

### Side Effect

是否触发了不该触发的写操作？

## 建立 Tool-specific Cases

例如订单 Agent：

~~~text
用户只问状态
→ 不应该调用 refund

用户明确退款且满足条件
→ refund_order

refund timeout
→ 先 query status，不能直接再 refund
~~~

这些 Case 可以直接测试 Action Policy。

## Tool Eval 和 Harness Eval 的边界

Tool Eval 更关注：

> Agent 选没选对、用没用对。

Harness Eval 更关注：

> 即使 Agent 选错，系统有没有把风险限制住。

两者一起才完整。

## 地图坐标

Tool / Action Eval 是 Trajectory Eval 的重要 Slice。

它能把“Agent 不稳定”拆成可修的具体行为。
