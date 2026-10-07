# 06｜Context：每一轮都在重新搭工作台

第二册已经完整讨论 Context Engineering。

到了 Agent 里，Context 的作用更明显：**每一次 Decision 都依赖一次新的 Runtime Context。**

工具调用以后，世界变了。

State 更新以后，任务位置变了。

所以 Agent 不是拿着一个固定 Prompt 循环。

它更像：

~~~text
State₁ → Context₁ → Decision₁
                  ↓
              Observation
                  ↓
State₂ → Context₂ → Decision₂
~~~

## Context 应该跟着步骤变化

做 Coding Agent：

- 搜索阶段需要目录和符号；
- 修改阶段需要相关文件；
- 验证阶段需要测试结果；
- 失败恢复阶段需要错误日志。

如果从头到尾都带相同资料，Agent 很快会被旧信息拖慢。

## Tool Definitions 也是 Context

模型能调用哪些工具、参数是什么、何时适用，都会影响 Decision。

工具太多、描述重叠，也会造成选择错误。

## 地图坐标

Context 是每一轮 Decision 的输入工作集。

Agent Engineering 不重新发明 Context Engineering，而是让 Context 随 Loop 动态变化。
