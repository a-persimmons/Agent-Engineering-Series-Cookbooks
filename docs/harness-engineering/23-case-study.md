# 23｜完整项目：把 Mini Coding Agent 硬化成可长期运行的 Harness

第三册最后，我们有了一个能工作的 Mini Coding Agent。

它会：

- 找文件；
- 改代码；
- 跑测试；
- 更新 State；
- 根据 Feedback 继续；
- 满足条件后停止。

现在不给它增加任何“智力”。

只处理一个问题：

> 如果它真的在机器上连续运行二十分钟，哪里最可能失控？

## V0：先限制能碰什么

原来 write_file 接受任意路径。

现在：

~~~text
readable_paths = /workspace/repo/**
writable_paths = /workspace/repo/**
default = deny
~~~

越界直接拒绝。

**地图：Permission。**

## V1：把执行放进 Sandbox

Shell 只能在隔离环境里：

- 固定 cwd；
- CPU / Memory 限制；
- 网络默认关闭；
- 不注入宿主机 Secret。

即使命令错了，爆炸半径也被限制。

**地图：Isolation。**

## V2：Action 前后都 Validation

write_file：

- normalize path；
- scope check；
- size limit。

shell：

- command policy；
- timeout；
- output cap。

Tool Result：

- Schema；
- exit status；
- truncation marker。

**地图：Validation。**

## V3：Loop 有硬边界

~~~text
max_steps = 30
max_tool_calls = 50
max_runtime = 20m
~~~

Budget 接近上限后，不再开新探索分支。

**地图：Limits。**

## V4：失败按语义分流

~~~text
transient → retry
invalid args → repair
test failure → feed back
permission → approval / stop
side effect unknown → reconcile
plan invalid → replan
~~~

不再把所有异常都叫“重试”。

**地图：Recovery。**

## V5：关键副作用可安全重放

每个写操作带 operation id。

如果进程在 Tool 成功后、State 更新前崩溃，Resume 先确认：

> 这个 operation 是否已经完成？

**地图：Recovery + Persistence。**

## V6：每个可信边界 Checkpoint

保存：

- Goal；
- Plan；
- State；
- Files Changed；
- Test Status；
- Budget；
- Last Operation。

进程被杀以后可以从最近可信状态恢复。

**地图：Persistence。**

## V7：高风险动作暂停等待

修改 CI、触发部署等 Action：

~~~text
Checkpoint
↓
Approval Request
↓
Pause
↓
Human Decision
↓
Resume
~~~

审批结果会写回 Permission State。

## V8：完整 Trace

每一步记录：

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
retry
cost
~~~

事故发生后可以按 Task 还原。

**地图：Observability。**

## V9：故意把系统弄坏

自动测试：

- workspace 越权；
- Shell 无限等待；
- API 429；
- write 后崩溃；
- Resume 重放；
- 审批拒绝；
- Budget 耗尽；
- Trace 缺字段。

每修一个真实 Harness Failure，就把它永久留在回归集。

**地图：Evaluation。**

## 最后的结构

~~~text
┌────────────────────────────────┐
│             Harness            │
│                                │
│ Permission   Isolation         │
│ Validation   Limits            │
│ Recovery     Persistence       │
│ Observability Evaluation       │
│                                │
│       ┌────────────────┐       │
│       │   Agent Loop   │       │
│       └────────────────┘       │
└────────────────────────────────┘
~~~

这个项目最值得记住的，不是最后有哪些模块。

而是它的生长顺序：

> **每出现一种可重复的失败，就尽量把它从“提醒 Agent”升级成“系统机制”。**

这就是 Harness Engineering。
