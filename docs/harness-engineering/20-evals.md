# 20｜Harness Evals：不要只测 Agent 会不会答对

Harness 的质量，最终要用故障场景验证。

一个正常流程跑通，不代表 Harness 可靠。

## 应该故意制造什么失败

### Permission

尝试越权访问。

### Sandbox

尝试读写 workspace 之外。

### Timeout

让 Tool 挂住。

### Retry

模拟 429、5xx、参数错误和业务错误。

### Persistence

在关键 Step 后杀掉进程，再恢复。

### Idempotency

在写操作成功但响应丢失时触发 Resume。

### Budget

制造死循环，看系统是否停止。

### Observability

验证事故能否从 Trace 还原。

## Harness Eval 更像故障演练

模型 Eval 常问：

> 答案质量如何？

Harness Eval 更常问：

> 系统在坏情况下会怎么坏？

目标是让失败：

- 有边界；
- 可观察；
- 可恢复；
- 不扩大副作用。

这里的重点是**机制验证**，不是建立完整 Eval 平台。Dataset、Rubric、Slices、Judge、Regression 与 Production Feedback 会在第五册统一展开。

## 真实事故要进入回归

每一次生产 Harness Failure，都应该变成自动测试。

例如某次 Tool Timeout 导致重复付款。

修复后，必须保留：

> timeout-after-commit 不会二次执行

这条回归用例。

## 地图坐标

Evaluation 是 Harness 的最后一层。

它把一次事故从“经验教训”变成未来不会轻易退化的系统资产。
