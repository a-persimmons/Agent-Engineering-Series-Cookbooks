# 23｜完整项目：把 Mini Coding Agent 硬化成可长期运行的 Harness

第三册最后，我们有了一个 Mini Coding Agent：

~~~text
Goal
↓
Context
↓
Decision
↓
Action
↓
Observation
↓
State
↓
Feedback
↓
Loop
~~~

现在开始把它放进真实环境。

## V0：能改代码，但什么都能改

第一条 Harness Rule：

~~~text
writable_paths = ["/workspace/repo/**"]
readable_paths = ["/workspace/repo/**"]
~~~

访问其他路径直接拒绝。

**增加：Permission + Isolation。**

## V1：Shell 进入 Sandbox

Agent 可以运行测试，但：

- 固定 cwd；
- 限制网络；
- 限 CPU / Memory；
- 不暴露宿主机 Secret。

**增加：Sandbox。**

## V2：Tool Call 必须 Validation

write_file：

- path normalize；
- scope check；
- size limit。

shell：

- command policy；
- timeout；
- output size limit。

**增加：Validation。**

## V3：每一步有预算

~~~text
max_steps = 30
max_tool_calls = 50
max_runtime = 20m
~~~

接近预算时，Agent 进入收敛模式。

**增加：Limits。**

## V4：错误分类恢复

~~~text
timeout → inspect state
invalid args → repair
test failure → feed back
permission → stop / approval
transient → bounded retry
~~~

**增加：Recovery。**

## V5：写操作幂等

关键 Action 记录 operation id。

恢复任务前先查：

> 上一个 Tool 是否已经成功提交？

**增加：Idempotency。**

## V6：每个 Step Checkpoint

保存：

- Goal；
- Plan；
- State；
- Files Changed；
- Tests；
- Budget；
- Last Tool。

进程被杀后可以 Resume。

**增加：Persistence。**

## V7：高风险动作进入 Approval

例如：

- 修改 CI；
- 发布；
- 外部网络写操作。

先 Checkpoint，再 Pause。

**增加：Permission + Human Approval。**

## V8：完整 Trace

每个 Tool Call 记录：

~~~text
task_id
step
model
tool
args_hash
permission
duration
result
state_diff
cost
~~~

**增加：Observability。**

## V9：把真实事故变成 Harness Eval

测试：

- 越权路径；
- 无限 Loop；
- Tool 超时；
- 进程中断；
- 重复写操作；
- 审批拒绝；
- Context Compaction 后 Resume。

**增加：Evaluation。**

## 最后的结构

~~~text
┌───────────────────────────────┐
│            Harness            │
│ Permission | Sandbox          │
│ Validation | Limits           │
│ Recovery   | Persistence      │
│ Observability | Evaluation    │
│                               │
│        ┌─────────────┐        │
│        │ Agent Loop  │        │
│        └─────────────┘        │
└───────────────────────────────┘
~~~

Agent 没有因此变得更“聪明”。

但它开始像一套可以被信任、被运维、被恢复的软件系统。
