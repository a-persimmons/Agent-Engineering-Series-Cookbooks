# 02｜Agent 从 Loop 开始

如果只保留几十行代码，Agent 的核心大概是：

~~~python
while not done:
    context = build_context(state)
    decision = model(context)

    if decision.is_action:
        observation = execute(decision.action)
        state = update_state(state, observation)
    else:
        done = True
~~~

真实系统会复杂得多，但核心没有变。

## Loop 带来了什么

没有 Loop：

~~~text
输入 → 输出
~~~

有了 Loop：

~~~text
判断 → 行动 → 观察 → 再判断
~~~

模型开始有机会根据世界的反馈修正下一步。

这也是为什么 Tool Calling 本身还不等于完整 Agent。

如果模型只能调用一次工具，然后程序固定结束，它更像“带工具的单次调用”。

Agent 的关键是：**结果能重新进入决策循环。**

## Loop 也带来了新的失败

循环一旦出现，新的工程问题立刻出现：

- 一直不停止；
- 重复调用同一个工具；
- 错误结果不断污染后续判断；
- 成本失控；
- Action 成功了但 State 没更新；
- 工具失败后模型误以为成功。

Agent Engineering 很大一部分工作，就是控制这些循环行为。

## 地图坐标

Loop 不是一个额外模块。

它是把 Context、Decision、Action、Observation、State、Feedback 串起来的运行方式。
