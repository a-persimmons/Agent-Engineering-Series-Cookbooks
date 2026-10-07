# 18｜Approval：高风险动作不应该只有“允许 / 禁止”

第三册讨论 Human-in-the-loop。

到了 Harness 层，Approval 要变成明确的运行协议。

## Approval Request 应该包含

不是一句：

> 是否允许执行？

而是：

~~~text
Action
Target Resource
Reason
Expected Effect
Risk
Rollback Plan
Current State
~~~

人只有看到这些信息，审批才有意义。

## 审批结果也要结构化

例如：

- approved；
- denied；
- approved_once；
- approved_for_scope；
- require_changes。

如果人说“可以，但只改 test 环境”，Harness 必须把这个限制写回 Permission State。

## Approval 应该可恢复

Agent 发起审批后，进程不需要一直占着。

可以：

~~~text
Checkpoint
↓
Create Approval Request
↓
Pause Task
↓
Human Decision
↓
Resume from Checkpoint
~~~

## 不要把所有事情都审批

过多 Approval 会让人变成系统瓶颈。

可以根据：

- 风险；
- 可逆性；
- 金额；
- 环境；
- 资源范围；

建立自动策略。

## 地图坐标

Approval 位于 **Permission + Persistence + Recovery** 的交叉点。

它让“需要人确认”从 Prompt 约定变成可执行工作流。
