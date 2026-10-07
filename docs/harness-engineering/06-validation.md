# 06｜Validation：不要把非法动作送进环境

模型生成 Tool Call 以后，不应该直接执行。

中间应该有 Validation。

## 参数验证

例如：

~~~json
{
  "tool": "refund_order",
  "amount": -100
}
~~~

Schema 合法不代表业务合法。

需要同时检查：

- 类型；
- 必填字段；
- 范围；
- 枚举；
- 业务规则。

## 路径与命令验证

文件 Tool 要防：

- path traversal；
- 越过 workspace；
- 特殊设备文件。

Shell Tool 可以限制：

- 禁止命令；
- 环境变量；
- 网络；
- 工作目录。

## 输出也要验证

Tool Result 可能异常：

- 返回空值；
- Schema 变化；
- HTML 错误页冒充 JSON；
- 内容过大。

如果不检查，错误 Observation 会污染整个 Loop。

## Validation 与 Guardrails

Guardrail 可以用模型、规则或程序实现。

能确定判断的，优先程序。

需要语义判断的，再考虑模型。

## 地图坐标

Validation 位于 **Decision 与真实执行之间**，也位于 **Tool Result 与下一轮 Context 之间**。

它是 Harness 的过滤层。
