# 03｜不要只评最终答案：AI 系统有多层 Eval

前四册已经形成四层系统：

~~~text
Prompt
Context
Agent Loop
Harness
~~~

Evaluation 也应该分层。

## Output Eval

最终结果是否正确、完整、合规。

适合大多数 LLM 任务。

## Context Eval

模型是否拿到了需要的信息，有没有噪声、过期和冲突。

## Trajectory Eval

Agent 是否走了合理路径：

- Tool 选对了吗；
- 是否重复动作；
- Plan 是否更新；
- State 是否一致。

## Harness Eval

坏情况下系统是否受控：

- 越权；
- Timeout；
- Crash；
- Resume；
- Idempotency；
- Budget。

## Production Eval

真实用户和环境里：

- 成功率；
- 延迟；
- 成本；
- 人工介入；
- 失败分布；
- 用户修正。

## 分层的价值

最终答案错了，不代表应该改 Prompt。

可能是 Retrieval 漏了证据，也可能 Tool 返回错误，还可能 Resume 重复 Action。

只有分层 Evaluation，才能把失败路由到正确工程层。

## 地图坐标

Signals 必须覆盖系统真正的运行层。

只保存最终答案，就只能做最表面的 Eval。
