# Harness 的核心地图

把第三册的 Agent Loop 放在中间：

~~~text
          ┌──────────────────────────┐
          │          Harness         │
          │                          │
          │    Goal → Context        │
          │       → Decision         │
          │       → Action           │
          │       → Observation      │
          │       → State            │
          │       → Feedback         │
          │       → Loop             │
          │                          │
          └──────────────────────────┘
~~~

Harness 主要回答八个问题：

<div class="map-card">

**Permission**：它被允许做什么？  
**Isolation**：动作在哪个环境里执行？  
**Validation**：输入、输出和动作是否合法？  
**Limits**：最多运行多久、多少步、多少钱？  
**Recovery**：失败后重试、修复、回滚还是停止？  
**Persistence**：状态怎样保存和恢复？  
**Observability**：能不能看见它做过什么？  
**Evaluation**：怎样把失败转成回归测试和系统规则？

</div>

## 设计时：从风险往里收

先问：

1. 哪些动作有副作用？
2. 哪些资源必须隔离？
3. 哪些约束程序可以强制执行？
4. 任务最多能消耗多少资源？
5. 哪些错误可恢复？
6. 中断后需要恢复什么状态？
7. 事故发生后能否还原轨迹？
8. 新失败怎样进入 Eval？

## Debug 时：先看 Harness，再怪模型

Agent 重复执行十次，不一定是模型笨。

可能是：

- 没有 step limit；
- Retry 策略把业务错误当临时错误；
- State 没持久化；
- Observation 没记录前一次失败；
- Timeout 后副作用状态未知。

Harness Engineering 的价值，就是把这类不确定性从“模型自己处理”移到明确的运行机制。
