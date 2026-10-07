# 12｜LLM-as-Judge：它是测量工具，不是答案

LLM Judge 很方便。

给它输出和 Rubric，它就能自动评大量案例。

也正因为方便，很容易被过度信任。

## Judge 也会错

它可能受：

- 输出长度；
- 文风；
- 顺序；
- 自己的模型偏好；
- Prompt；
- 参考答案质量；

影响。

所以 Judge 也需要被校准。

## 先让 Judge 给“证据”，再给判断

不要只输出：

~~~text
score = 4
~~~

更有用：

~~~text
criterion = evidence_support
result = fail
evidence = "结论 X 在输入中没有对应来源"
~~~

这样才能抽查 Judge 是否合理。

## 用人工样本校准

准备一小组人工已确认结果。

比较 Judge：

- precision；
- recall；
- agreement；
- 哪类标准最容易误判。

Judge 不需要完美，但你要知道它在哪些地方不可靠。

## 避免评价泄漏

如果 Judge 知道：

> 这是新版本输出。

它可能出现偏见。

Pairwise 时也可以随机左右顺序。

## Judge 模型也要版本化

更换 Judge 后，历史分数可能不可直接比较。

所以 Evaluation Stack 自己也需要版本管理。

## 地图坐标

LLM-as-Judge 位于 **Rubric → Signals / Judgment**。

它不是评价体系本身，只是执行评价规则的一种工具。
