# 11｜Persistence 与 Resume：从存档回到现实世界

Checkpoint 给出一份可恢复状态。

Persistence 解决的是：

> 这份状态怎样跨进程、跨机器、跨时间可靠存在？

Resume 再问：

> 重新启动以后，能不能安全地从这里继续？


![Checkpoint、Persistence 与 Resume](/diagrams/harness/persistence-resume.svg)

## Persistence 不只有 Task State

可能还需要保存：

### Runtime State

Goal、Plan、当前 Step、阻塞。

### Artifacts

代码 diff、报告、文件、检索结果。

### Execution Metadata

Tool Calls、状态、时间、版本、Budget。

### External References

已经创建的订单、部署、Job、审批单。

## Resume 最大的风险不是“读不到存档”

而是：

> 存档里的世界，和现实世界已经不一样了。

例如 Checkpoint 写着：

~~~text
next_step = send_email
~~~

但上一次进程可能已经把邮件发出，只是没来得及更新 Checkpoint。

机械 Resume 就会再发一次。

## 恢复前要 Reconcile

重新进入 Loop 前检查：

- 上一个 Action 是否真正完成；
- 外部资源现在是什么状态；
- 权限是否仍有效；
- Context 是否过期；
- Goal 是否仍然成立；
- Budget 是否需要重新授权。

Persistence 保存过去。

Resume 必须先重新确认现在。

## 地图坐标

Persistence 让 State 跨时间存在。

Resume 把保存的 State 与当前世界重新对齐，然后才允许 Agent 回到 Loop。
