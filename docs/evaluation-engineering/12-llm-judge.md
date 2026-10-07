# 12｜LLM-as-Judge：先校准测量工具，再相信分数

LLM Judge 很方便。

给它结果和 Rubric，就能自动评大量案例。

问题也恰恰在这里：因为自动化太容易，人很容易跳过“这个 Judge 到底准不准”。

## Judge 不是 Oracle

它会受：

- 文风；
- 长度；
- Prompt；
- 自己的模型偏好；
- 参考答案质量；
- Rubric 含糊程度；

影响。

所以 Judge 本身也要经过 Evaluation。

## 先要求证据，再要求判断

不要只返回：

~~~text
score = 4
~~~

更有用：

~~~text
criterion = evidence_support
result = fail
evidence = "结论 X 没有输入来源支持"
~~~

这样人工抽查时可以看到它依据什么。

## 用人工校准集测 Judge

准备一批已经人工确认的 Case。

检查：

- agreement；
- precision / recall；
- 哪类 Rubric 最容易误判；
- 哪些 Case 置信最低。

Judge 不需要完美。

你需要知道它的误差边界。

## Judge 配置也要版本化

更换：

- Judge Model；
- Judge Prompt；
- Rubric；
- Reference；

都可能改变分数。

因此历史趋势必须同时记录 Evaluation Stack 的版本。

## 能程序判断的部分不要交给 Judge

Schema、Tool 名称、权限、数值边界等，优先确定性检查。

Judge 更适合补充语义判断。

## 地图坐标

LLM-as-Judge 是 **Rubric 的执行器之一**。

它不是 Evaluation Engineering 的中心；它本身也是需要被校准的测量仪器。
