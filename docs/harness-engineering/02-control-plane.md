# 02｜Harness 是 Agent 的 Control Plane

可以把 Agent 系统粗略分成两层。

## Intelligence / Decision Plane

负责：

- 理解任务；
- 选择动作；
- 规划；
- 根据反馈调整。

主要由模型和 Agent Loop 承担。

## Control Plane

负责：

- 权限；
- 沙箱；
- 预算；
- 超时；
- 重试；
- Checkpoint；
- 审计；
- Trace；
- 恢复。

主要由 Harness 承担。

## 为什么要分层

如果把所有控制都写进 Prompt：

> 不要删除重要文件。  
> 最多调用 10 次工具。  
> 出错请重试，但不要太多次。  
> 请控制成本。

这些只是建议。

程序可以做到：

~~~text
delete outside workspace → reject
step > 10 → stop
retry > 2 → fail
cost > $X → cancel
~~~

确定规则应该尽量由确定机制执行。

## 模型负责模糊判断，Harness 负责硬边界

这条原则在真实系统里非常有用。

例如“这段代码是否应该重构”可以交给模型。

“这个 Agent 是否有权限修改 production.yaml”不应该交给模型自觉。

## 地图坐标

Harness 是 Control Plane。

后面每一章，都会把一种“靠模型自觉”的要求变成可执行的系统机制。
