# 13｜Human Eval：人的价值不是“手工替代 Judge”

人工评测成本高。

所以不应该把人当成低速版自动评分器。

更适合把人放在自动化难以稳定判断的地方。


![Deterministic、LLM Judge 与 Human Eval 的分工](/diagrams/evaluation/grader-stack.svg)

## 人更适合什么

### 主观偏好

风格、创意、沟通质量。

### 高风险 Case

错误代价高，需要责任判断。

### 新 Failure Type

自动 Rubric 还没有覆盖。

### Judge Calibration

检查自动 Judge 是否偏离。

## Human Eval 也需要 Rubric

“凭经验看看”会产生很大评审差异。

即使人判断，也应该明确：

- 关注什么；
- 什么算 Pass；
- 哪类错误最严重；
- 需要引用什么证据。

## 记录分歧

两个评审者意见不同，不要立刻抹平。

分歧本身可能说明：

- Rubric 含糊；
- 任务定义不清；
- 本来就是偏好问题。

这也是有价值的 Signal。

## Sampling

不必人工看全部。

可以优先抽查：

- Judge 低置信；
- 高风险 Slice；
- 新版本明显变化；
- 线上投诉；
- 新失败模式。

## 地图坐标

Human Eval 是自动评价系统的校准器和高风险裁判。

它应该被用在最需要人的地方。
