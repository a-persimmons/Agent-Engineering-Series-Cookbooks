# 11｜Deterministic Checks：能用程序判断，就不要让 LLM 猜

不是所有 Eval 都需要 LLM Judge。

很多指标程序可以直接检查，而且更便宜、更稳定。


![Deterministic、LLM Judge 与 Human Eval 的分工](/diagrams/evaluation/grader-stack.svg)

## 常见确定性检查

### Schema

JSON 是否合法，字段是否完整。

### Exact / Set Match

分类、标签、ID 是否正确。

### Numeric

误差是否在范围内。

### Citation

引用的 source id 是否真实存在。

### Tool

是否调用允许的工具、参数是否正确。

### Harness

是否越权、超时、超过预算。

## 程序检查的优势

- 一致；
- 快；
- 便宜；
- 易回归；
- 容易定位。

如果一条规则能写成代码，就没必要让模型判断“我觉得它大概符合”。

## 但不要强行把语义问题变成 Exact Match

文章改写、复杂分析、开放问答很难只有唯一答案。

这时 Deterministic Check 可以检查硬约束，语义质量再交给 Judge 或人。

## 组合式 Eval

例如：

~~~text
Schema Check
+
Citation Existence
+
LLM Rubric Judge
+
Human Sample Review
~~~

不同评测方式负责不同问题。

## 地图坐标

Signals 和 Rubric 确定以后，先找能确定性验证的部分。

LLM Judge 应该补语义空白，而不是替代所有测试。
