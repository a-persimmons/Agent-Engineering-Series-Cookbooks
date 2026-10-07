# 03｜Harness Failure：系统是怎样失控的

Agent 最终结果出错，不一定说明 Decision 有问题。

有时模型的决定本身没错，真正失控发生在执行层。

例如：

> Agent 正确判断“应该重试付款查询”。

但 Harness 没区分“查询”和“付款写操作”，于是把写请求也重放了一遍。

这不是推理错误，是运行机制错误。

## 用 Harness 地图给事故找位置

### Permission Failure

不该执行的动作被允许，或合法动作被错误拒绝。

### Isolation Failure

Agent 接触到超出任务范围的文件、网络、进程或 Secret。

### Validation Failure

非法参数、危险路径、异常 Tool Result 没有被拦截。

### Limit Failure

死循环、长命令、成本和资源没有上限。

### Recovery Failure

错误发生后采用了错误的 Retry、Repair、Resume 或 Rollback 策略。

### Persistence Failure

State 丢失、Checkpoint 不完整，或 Resume 重复执行已完成动作。

### Observability Failure

事故发生后无法回答“哪一步、什么参数、什么权限导致”。

### Evaluation Failure

已经出现过的事故没有进入回归测试。

## 调试顺序

假设 Agent 重复发送了两次邮件。

不要先改 Prompt。

先查：

1. Tool 是否支持 Idempotency？
2. Timeout 后是否确认过第一次发送状态？
3. Checkpoint 写在 Action 前还是后？
4. Resume 是否直接重放了当前 Step？
5. Trace 能否确定两次调用的 operation id？
6. 回归测试里有没有 crash-after-send 场景？

这才是 Harness Debug。

## 地图坐标

Failure Taxonomy 是八个 Harness 原语的反向索引。

Agent Failure 问“为什么判断错了”。

Harness Failure 更常问：

> **为什么一个本应受控的错误，最后真的影响了环境？**
