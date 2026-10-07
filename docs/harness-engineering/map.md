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

## 设计时：先问“最坏会怎样”

Harness 不从“还可以加什么功能”开始。

先看 Agent 的 Action，然后问：

1. 如果它执行错了，最大伤害是什么？
2. 哪些资源本来就不该接触？
3. 哪些非法动作可以在执行前拦住？
4. 一次任务最多能消耗多少资源？
5. 失败后外部世界可能处在什么状态？
6. 中断后恢复需要哪些 State？
7. 事故发生后能不能还原完整轨迹？
8. 修复以后怎样保证不再复发？

这八个问题分别会把你带到八个 Harness 原语。

## 调试时：从“失控方式”往回查

~~~text
发生事故
↓
Evaluation 为什么没提前覆盖？
↓
Observability 能否还原？
↓
Persistence / Resume 是否重复副作用？
↓
Recovery 是否选错策略？
↓
Limits 为什么没有停住？
↓
Validation 为什么没拦住？
↓
Isolation 是否过宽？
↓
Permission 为什么允许？
~~~

有时答案会停在某一层；有时会穿过几层。

## 一个关键判断

Prompt 里写：

> 不要删除工作区之外的文件。

属于意图。

Harness 写：

~~~text
if !path.startsWith(workspace):
    reject()
~~~

属于机制。

Harness Engineering 的核心，就是把**重复出现、可以确定执行的约束**从“提醒模型”变成系统事实。

当你开始自动问“这件事为什么还在靠模型自觉”，地图就开始起作用了。
