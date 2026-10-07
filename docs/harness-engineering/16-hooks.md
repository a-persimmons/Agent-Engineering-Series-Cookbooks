# 16｜Hooks：把横切能力挂到 Loop 上

权限、日志、验证、审批、预算都可能出现在很多 Tool 上。

如果每个 Tool 自己实现一遍，很快会重复和失控。

Hooks 提供一种横切机制。

## 常见 Hook 点

### Before Model

- 构建 Context；
- 检查 Budget；
- 注入 Runtime State。

### After Model

- 校验输出；
- 记录 usage；
- 检查 Tool Call。

### Before Tool

- Permission；
- Validation；
- Approval；
- Audit。

### After Tool

- 记录 Result；
- 更新 State；
- 生成 Observation。

### On Error

- 分类；
- Retry；
- Recovery；
- Escalation。

## Hook 的价值

它把 Harness 能力从业务 Tool 中抽出来。

Tool 只需要关注业务动作。

Harness 统一执行：

~~~text
before_tool
→ execute
→ after_tool
~~~

## 不要让 Hook 变成隐形魔法

Hook 太多以后，行为会难以追踪。

因此需要：

- 明确顺序；
- Trace；
- 失败策略；
- 尽量保持单一职责。

## 地图坐标

Hooks 不是新的 Harness 原语。

它是把 Permission、Validation、Observability 等能力注入 Loop 的工程方式。
