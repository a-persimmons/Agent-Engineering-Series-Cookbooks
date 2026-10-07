# 12｜LLM-as-Judge：别把另一个模型当成裁判席上的真理

LLM Judge 很诱人。

人工一天只能看几十条，模型几分钟就能评几千条。

于是很容易发生一件事：

> 原来人工的“感觉”，现在变成了另一个模型的“感觉”，只是速度更快。

自动化并不会自动带来可靠性。

## Judge 也是一个会犯错的模型

它会受很多东西影响：

- 输出更长，看起来更充分；
- 文风更流畅，看起来更专业；
- 被评答案和 Judge 使用同一模型家族；
- Rubric 写得含糊；
- Reference 本身就不准确；
- A/B 顺序不同。

所以“Judge 给了 4.7 分”并不天然比人工判断更客观。

## 让 Judge 留下证据

不要只让它返回：

~~~text
score = 4
~~~

让它按 Rubric 判断：

~~~text
criterion: evidence_support
result: fail
evidence:
  "回答声称服务在 14:02 重启，但输入中没有这个事实。"
~~~

这样至少能检查：

> 它为什么这么判？

如果理由站不住，分数也没有意义。

## 给 Judge 做一次自己的 Eval

准备一小组人工已经确认的 Case。

然后看 Judge：

- 哪些标准与人工一致；
- 哪些经常误判；
- 对哪个 Slice 最不稳定；
- Pairwise 是否有位置偏好；
- 低置信 Case 集中在哪里。

从那以后，你不再说：

> Judge 准不准？

而是能说：

> 它在这几类标准上可靠，在另外两类上需要人工抽查。

这才像一个测量工具。

如果 Judge 用来决定发布门槛，最好定期用一批人工确认样本重新校准。模型版本、Rubric 和被评答案风格变化后，Judge 的偏差也可能变化。

## 能写成代码的，不要交给 Judge

JSON 是否合法、Tool 名称是否正确、路径是否越权、测试是否通过——这些问题程序可以直接判断。

让 LLM 去判断，只会增加成本和不确定性。

Judge 最适合补那些真正需要语义理解的部分。

对于关键决策，不要让单次 Judge 结果承担全部责任。可以结合 deterministic checks、pairwise、human sample review，或者对低置信 / 高风险 Case 触发人工复核。

## 地图坐标

LLM-as-Judge 只是 Rubric 的一种执行方式。

一个成熟的 Eval System，不会因为用了 Judge 就自动成立。

它仍然要回到 Target、Cases、Rubric、Signals 和 Calibration。
