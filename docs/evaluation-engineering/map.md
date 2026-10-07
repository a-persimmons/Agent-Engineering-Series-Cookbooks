# Evaluation Engineering 核心地图

Evaluation Engineering 可以压缩成一条闭环：

![Evaluation Engineering 核心闭环](/diagrams/evaluation/core-map.svg)

<div class="map-card">

**Target**：我们到底想让系统变好什么？  
**Cases**：哪些场景最能代表真实任务和真实风险？  
**Rubric**：单个 Case 按什么标准判断？  
**Signals**：为了判断，需要采集哪些输出、Trace、状态和运行数据？  
**Metrics**：怎样把大量结果聚合成可比较的指标？  
**Failure Taxonomy**：失败属于哪一类，应该回到哪一层修？  
**Regression**：修复以后，旧能力有没有被破坏？  
**Production Feedback**：真实世界又暴露了什么未知问题？  
**Improvement Loop**：怎样把失败沉淀成下一版 Case、规则和机制？

</div>

~~~text
Target
  ↓
Cases
  ↓
Rubric
  ↓
Signals
  ↓
Metrics
  ↓
Failure Taxonomy
  ↓
Regression
  ↓
Release
  ↓
Production Feedback
  ↓
New Failure
  └──────────→ New Case / New Rule / New Mechanism
~~~

## 设计 Eval 时：顺着地图往下走

先不要问：

> 用哪个 LLM 当 Judge？

先问：

1. **Target**：系统真正要优化什么？
2. **Cases**：什么输入最能暴露它的能力边界？
3. **Rubric**：一个结果为什么算对、为什么算错？
4. **Signals**：只看 Final Answer 够不够，还需要 Context、Tool Call、Trace、State 吗？
5. **Metrics**：哪些数字能支持发布决策？
6. **Failure Taxonomy**：失败后能不能知道该修 Prompt、Context、Agent 还是 Harness？
7. **Regression**：修复一个问题时，怎样保护已有能力？
8. **Production Feedback**：线上出现的新问题怎样重新进入离线 Eval？

Judge、框架和 Dashboard 都应该在这些问题之后出现。

## 失败时：沿着闭环往回追

假设线上出现一个严重错误：

> Agent 在资料不足时给出了确定结论。

不要只给这条输出打低分。

沿着链路追：

~~~text
Production Failure
↓
为什么现有 Regression 没拦住？
↓
Failure Taxonomy 里有没有这一类？
↓
Metrics 是否把高风险 Slice 淹没在平均分里？
↓
Rubric 有没有检查“无证据断言”？
↓
Cases 里有没有“信息不足”场景？
↓
Target 是否明确要求“不确定时正确降级”？
~~~

最后你可能发现，真正缺的不是一个更强 Judge，而是一条从未被定义过的质量要求。

## 五册知识怎样在这里汇合

| 失败表现 | 优先回到哪一层 |
|---|---|
| 任务理解错 | Prompt / Goal |
| 缺信息、旧信息、噪声 | Context |
| Tool 选错、Loop 路径差 | Agent |
| 越权、超时、Resume 重复副作用 | Harness |
| 测试根本没发现问题 | Evaluation |

Evaluation Engineering 不是站在前四册之外给它们打分。

它更像整个系统的**反馈神经**：发现问题，把问题送回正确层，再验证修复有没有真的生效。

真正要长进脑子里的，是这句话：

> **每一个重要失败，最后都应该有一个可以复现它的 Case；每一次修复，都应该留下防止它复发的 Regression。**
