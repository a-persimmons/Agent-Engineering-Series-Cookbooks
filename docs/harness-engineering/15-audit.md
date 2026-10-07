# 15｜Audit：哪些事情必须留下不可抵赖的记录

Observability 主要为了调试和运营。

Audit 更关注责任与追溯：

> 谁在什么时间，以什么权限，执行了什么高风险动作？

## 哪些动作更需要审计

- 数据删除；
- 权限变更；
- 部署；
- 支付；
- 外部发送；
- 敏感数据访问；
- 人工审批。

## Audit Record 可以包含

~~~text
actor
task_id
action
resource
input_hash
permission
approval
timestamp
result
artifact
~~~

不一定把所有 Context 原文都存进去，尤其要避免敏感数据扩散。

## Harness 为什么比 Prompt 更适合做审计

Prompt 可以要求：

> 请记录你做了什么。

但这仍然依赖模型配合。

Harness 可以在 Tool Gateway 统一记录每一次真实执行。

这才是可信审计点。

## Audit 也能帮助产品改进

如果同一种高风险 Action 总是需要人工批准，可以分析：

- 是否可以建立更清晰的自动规则；
- Tool 粒度是否太大；
- 哪些条件下其实风险可控。

## 地图坐标

Audit 是 **Observability + Governance** 的延伸。

它让 Agent 的外部副作用真正可追责。
