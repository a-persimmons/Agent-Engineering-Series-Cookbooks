# 系列编辑记录

每一册都按同一套三轮编辑标准处理。

## 第一轮：全书去重复

- 一个概念只在最合适的位置完整解释一次。
- 后文再次出现时，只增加新的工程视角。
- 如果删掉一章，心智地图没有缺口，这章就不该存在。

## 第二轮：让地图长进脑子里

第一册：

**Goal → Context → Process → Output → Constraints → Evaluation**

第二册：

**Need → Source → Select → Shape → Budget → Lifecycle → Evaluation**

第三册：

**Goal → Context → Decision → Action → Observation → State → Feedback → Loop**

第四册：

**Permission → Isolation → Validation → Limits → Recovery → Persistence → Observability → Evaluation**

第五册：

**Target → Cases → Rubric → Signals → Metrics → Failure Taxonomy → Regression → Production Feedback → Improvement Loop**

所有新技巧都必须能挂回当前册的主地图。设计和 Debug 复用同一张图。

## 图解原则

- 图只在能压缩结构、流程、对比或演化关系时出现，不做装饰性插图。
- 每册优先保证：核心地图、关键诊断图、持续案例演化图、与下一册的过渡图。
- 图中文字必须与正文术语完全一致，避免视觉层再发明一套说法。
- 图先给结构，正文解释关系；正文不逐字复述图。
- 第一册核心图：六问总地图、设计/调试双向图、需求→任务规格、Few-shot 边界图、Reasoning 中间结构、Debug 诊断树、Prompt 演化、Runtime Context 与跨册过渡图。
- 第二册核心图：七问总地图、Window / Runtime Context / Memory 区分、History / State / Memory 分工、Lifecycle、Long-running 三层结构、Context Debugging、超长日志 Pipeline 与 Agent 过渡图。

## 第三轮：文学 / 编辑精修

- 删除机械连接词、空洞开场和重复总结。
- 少用宣传式形容词，多写具体任务、失败和对比。
- 一段只推进一个判断。
- 术语第一次出现时解释，后面不重复科普。
- 开篇尽量从错误直觉或真实问题进入。
- 章节结尾只负责回挂地图或引出下一章。

## 第三册额外约束

- 不从 Agent Framework 开始。
- ReAct、Planning、Reflection、Multi-Agent 必须作为最小 Loop 的变体解释。
- Workflow 与 Agent 要明确区分，不把“自主性更高”写成“更高级”。
- Tool Design 必须包含副作用、错误和返回语义，不只讲 Function Calling。
- Agent Eval 同时看 Outcome、Trajectory 与 System。
- 第 23 章用一个持续演化的 Mini Coding Agent 把整张 Loop 串起来。


## 第四册额外约束

- Harness 必须被解释为 Agent Loop 的 Control Plane，而不是某个框架名称。
- Permission、Sandbox、Validation、Limits、Recovery、Persistence、Observability、Evaluation 各自承担独立职责。
- Retry、Timeout、Resume 必须讨论副作用与幂等，不能只给“重试几次”的表面做法。
- Long-running Task 要有阶段、Checkpoint、Progress 与 Pause / Resume。
- Harness Eval 优先测试坏情况：越权、超时、崩溃、重复副作用、恢复失败。


## 第五册额外约束

- Evaluation 不写成“LLM-as-Judge 教程”，Judge 只是测量工具之一。
- Target 与 Cases 先于 Metric；先定义什么算好，再讨论怎么打分。
- Dataset 必须覆盖 Normal / Edge / Adversarial / Historical Failure，并支持 Slices 与版本化。
- Agent Eval 同时看 Outcome 与 Trajectory；Harness Eval 要主动做 Failure Injection。
- 每个真实失败最终应尽量进入 Failure Taxonomy、Regression Set 或系统机制。
- 系列终章必须把五册收束为一张从 Human Intent 到 Improvement Loop 的总图。


## 第三册终审补充

- Agent 层描述行为策略；Harness 层负责把权限、超时、预算、幂等、恢复等变成运行保证。
- Action 章节必须描述副作用语义，但不能把 Permission / Sandbox 的实现责任吞进 Agent 层。
- Error Recovery 在第三册讨论“失败后下一步策略”，第四册讨论“运行时怎样安全重试、对账与恢复”。
- Stop 同时包含语义停止条件与硬边界；硬边界必须由 Harness 强制。
- Agent Eval 重点看 Outcome + Trajectory；系统可靠性指标在后两册展开。


## 第五册终审补充

- Dataset 要防止 eval leakage；必要时区分 development / regression / holdout。
- Agent Eval 中 Case 与 Trial 必须区分；一次运行不能自动代表稳定能力。
- 重要发布决策要考虑 repeated trials、随机波动、Slice 与置信度，而不是只看单次平均分。
- Capability Eval 用来爬能力上限，Regression Eval 用来保护已经拥有的能力，两者目标不同。
- Production Signal 也有盲区和偏差，不能自动当作 Ground Truth。
