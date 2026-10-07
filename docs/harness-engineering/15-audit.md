# 15｜Audit：为了证明谁做了什么

Observability 关注：

> 系统为什么这样运行？

Audit 更关心：

> **谁在什么权限下，对什么资源执行了什么高风险动作？**

它面向责任、合规和事后追溯。

## 哪些行为值得单独 Audit

例如：

- 删除数据；
- 权限变更；
- 发布；
- 支付；
- 外部正式发送；
- 敏感数据访问；
- 人工审批。

普通 read_file Trace 不一定需要和生产删除操作使用同样的审计强度。

## Audit Record 的重点

可以包括：

~~~text
actor
task_id
action
resource
permission
approval
timestamp
result
artifact_hash
~~~

重点是：

- 谁；
- 为什么有权；
- 做了什么；
- 作用到哪里；
- 结果是什么。

## Audit Point 应该在执行层

如果只让模型输出：

> “我刚才删除了 X。”

这个记录没有可信性。

更可靠的位置是 Tool Gateway：

~~~text
Permission Check
↓
Audit Before
↓
Execute
↓
Audit Result
~~~

因为真正副作用只能从执行层确认。

## Audit 和 Trace 可以共享数据，但目的不同

Trace 可以为性能调试保留较多细节。

Audit 要：

- 稳定；
- 权限受控；
- 生命周期明确；
- 高风险记录不可轻易修改。

## 地图坐标

Audit 是 **Observability + Governance**。

它让 Agent 的真实外部行为可以被追责，而不只是“看起来有日志”。
