# 03｜先决定“评哪一层”

一个复杂 AI 系统可能同时包含：

~~~text
Prompt
Context
Agent Loop
Harness
~~~

最终结果错了，不代表每次都应该改 Prompt。

所以做 Eval 前，先问：

> **我现在评的是哪一层？**

## Output Layer

看最终交付是否正确、完整、合规。

这是最常见的 Eval。

## Context Layer

看模型有没有拿到完成任务所需的信息。

关注 Missing、Noise、Conflict、Stale 等问题。

## Trajectory Layer

看 Agent 的执行路径。

例如：

- Tool 选择；
- 参数；
- State 更新；
- 是否重复；
- 是否过早停止。

## Harness Layer

看坏情况下系统是否仍受控。

例如：

- 越权；
- Timeout；
- Crash；
- Resume；
- Idempotency；
- Budget。

## Production Layer

看真实用户和真实环境下的表现：

- 成功率；
- 延迟；
- 成本；
- 人工介入；
- 失败分布。

## 为什么先分层

同一个最终错误：

> “回答用了旧价格”

可能来自：

- Context 选错版本；
- Agent 调错 Tool；
- Cache 没失效；
- Judge 没发现。

只有先确定责任层，Eval 结果才容易路由到修复动作。

后面章节会分别深入 Agent、Tool、Context 和 Harness Eval。

这里先留下一个习惯：

> **不要只问系统得几分，先问哪一层坏了。**
