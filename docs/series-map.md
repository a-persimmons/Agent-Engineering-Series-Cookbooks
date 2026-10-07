# 全系列总地图

五本书不是五个并列专题。

![Agent Engineering Series 总地图](/diagrams/evaluation/series-loop.svg)

它们描述的是同一个 AI 系统，从“一个人想让模型做什么”，一直到“系统怎样从真实失败里积累能力”的五个尺度。

~~~text
Human Intent
     ↓
┌──────────────────────────────┐
│ Prompt Engineering           │
│ 把意图变成可执行、可约束、可验证的任务 │
└──────────────┬───────────────┘
               ↓
        Runtime Context
               ↓
┌──────────────────────────────┐
│ Context Engineering          │
│ 决定这一轮模型真正应该看到什么         │
└──────────────┬───────────────┘
               ↓
        Model Decision
               ↓
┌──────────────────────────────┐
│ Agent Engineering            │
│ 让 Decision → Action → Observation     │
│ → State → Feedback 持续形成 Loop       │
└──────────────┬───────────────┘
               ↓
         Real Action
               ↓
┌──────────────────────────────┐
│ Harness Engineering          │
│ 用权限、隔离、限制、恢复、持久化和可观测性 │
│ 把行动能力变成可靠软件                 │
└──────────────┬───────────────┘
               ↓
      Trace / Outcome / Failure
               ↓
┌──────────────────────────────┐
│ Evaluation Engineering       │
│ 定义 Target、Cases、Rubric、Regression │
│ 并把生产失败送回正确的工程层            │
└──────────────┬───────────────┘
               ↓
       Engineering Change
               ↓
          Next Version
               └──────────────→
~~~

## 五册分别控制什么

| 册 | 最核心的问题 | 主要控制对象 |
|---|---|---|
| Prompt Engineering | 这一次模型到底要做什么？ | 一次模型行为 |
| Context Engineering | 这一轮模型应该看到什么？ | Runtime Context |
| Agent Engineering | 下一步怎样根据结果动态决定？ | Decision / Action Loop |
| Harness Engineering | 怎样让这条 Loop 长期可控？ | Runtime / Control Plane |
| Evaluation Engineering | 怎样证明它真的更好？ | Feedback / Regression Loop |

## 五张地图怎样嵌套

### 1. Prompt 是最小行为单元

~~~text
Goal
→ Context
→ Process
→ Output
→ Constraints
→ Evaluation
~~~

它解决的是：**人的意图怎样变成一次可执行的模型行为。**

### 2. Context 把“输入”变成运行时系统

~~~text
Need
→ Source
→ Select
→ Shape
→ Budget
→ Lifecycle
→ Evaluation
~~~

它解决的是：**不是有什么就全给，而是每一轮只构造当前决策真正需要的工作集。**

### 3. Agent 把一次调用变成循环

~~~text
Goal
→ Context
→ Decision
→ Action
→ Observation
→ State
→ Feedback
→ Loop
~~~

它解决的是：**结果会改变下一步，因此系统必须持续观察、更新和决策。**

### 4. Harness 把循环变成可靠软件

~~~text
Permission
→ Isolation
→ Validation
→ Limits
→ Recovery
→ Persistence
→ Observability
→ Evaluation
~~~

它解决的是：**Agent 有能力做事之后，谁来限制、保护、恢复和审计它。**

### 5. Evaluation 把失败变成下一版能力

~~~text
Target
→ Cases
→ Rubric
→ Signals
→ Metrics
→ Failure Taxonomy
→ Regression
→ Production Feedback
→ Improvement Loop
~~~

它解决的是：**怎样从“感觉更好”进入“可以证明更好”，并让真实失败不再白白发生。**

## 学习时最重要的不是顺序，而是定位

以后再遇到一个新概念，比如：

- Prompt Cache
- MCP
- Agent Memory
- Computer Use
- Deep Research
- Long-running Agent
- Skills
- Hooks
- Guardrails
- Trace Eval

先不要问：

> 这是不是一个新的 Engineering？

先问：

> **它改变了总图上的哪一层？**

例如：

- MCP 主要改变 Agent 的 Action / Context 接口；
- Memory 主要横跨 Context 的 Source / Lifecycle 与 Agent 的 State；
- Guardrails 可能属于 Prompt 的 Constraints，也可能上升为 Harness 的 Validation / Permission；
- Trace Eval 属于 Evaluation 的 Signals + Rubric；
- Skills 往往是可加载的 Instructions / Procedures，会影响 Context 与 Agent Decision。

一个概念可能跨层。

这不是分类失败，而是系统本来就有交叉。

## 诊断时从“第一次错误”开始

生产系统出错以后，不要直接问“哪个模型更强”。

按运行链往回找：

~~~text
最终结果错
↓
Evaluation 为什么没提前发现？
↓
Harness 有没有让错误扩大？
↓
Agent 的哪一步 Decision / Action 首先偏离？
↓
当时 Context 里看到了什么、缺了什么？
↓
Prompt / Goal 是否一开始就定义错？
~~~

真正值得定位的是：

> **第一次出现不可接受偏差的位置。**

因为越靠后的错误，越可能只是前面错误的连锁反应。

## 这套系列最终想训练的能力

不是会写 Prompt，也不是会搭 Agent。

而是面对一个真实 AI 系统时，能连续回答：

1. 人真正想完成什么？
2. 模型现在需要看到什么？
3. 哪些决定应该动态交给模型？
4. 它能对外部世界做什么？
5. 哪些风险必须由系统机制限制？
6. 怎样观察它实际做了什么？
7. 怎样证明这一版比上一版更好？
8. 一次真实失败怎样留下永久资产？

如果这八个问题会自然出现，五本书就不再是五本书。

它们已经变成一张可以继续生长的工程地图。
