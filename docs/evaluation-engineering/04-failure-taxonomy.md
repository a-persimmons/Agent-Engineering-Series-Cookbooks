# 04｜Failure Taxonomy：让失败知道自己该“回哪一层”

“效果不好”不是一个可用的工程描述。

它既不能统计，也不能告诉你下一步该改哪里。

Evaluation Engineering 需要给失败一个稳定的“地址”。

## 第一层先按系统责任区分

例如：

### Prompt / Task Failure

- 目标理解错；
- 指令冲突；
- Output Contract 不清。

### Context Failure

- Missing；
- Noise；
- Conflict；
- Stale；
- Wrong Retrieval。

### Agent Failure

- Wrong Tool；
- Invalid Args；
- Premature Stop；
- Repeated Action；
- Bad Planning。

### Harness Failure

- Permission Violation；
- Retry Misclassification；
- Timeout Handling；
- Resume Duplicate Side Effect；
- Budget Failure。

### Evaluation Failure

- Dataset Blind Spot；
- Rubric Ambiguity；
- Judge Error；
- Metric Hides Critical Slice。

这一级分类已经能回答：

> 主要应该回哪一册修？

## 第二层再按真实重复模式细分

不要一开始设计几十个 Failure Type。

例如开始只有：

~~~text
Tool Failure
~~~

真实 Trace 多了以后，才发现它应该拆成：

~~~text
Tool Failure
├─ Wrong Tool
├─ Invalid Args
├─ Tool Timeout
├─ Permission Denied
└─ Result Misread
~~~

Taxonomy 应该被真实问题“长”出来，而不是先从术语表抄出来。

## 好分类要能驱动动作

一个 Failure Type 最好能回答：

- 谁负责；
- 去看什么 Signal；
- 常见 Root Cause；
- 修复手段；
- 应该补什么 Regression Case。

例如：

~~~text
Failure:
Unsupported Claim

Owner Layer:
Prompt / Context / Output

Check:
Evidence Context
Citation
Uncertainty Rule

Regression:
信息不足 + 诱导模型猜测的 Case
~~~

这样分类才真正有工程价值。

## 看失败分布，而不是只看成功率

假设整体成功率 94%。

剩下 6% 的失败里：

~~~text
43% Context Missing
25% Tool Selection
12% Premature Stop
8% Output Contract
12% Other
~~~

这张分布比一句“模型准确率 94%”更能决定下一步投入。

## 地图坐标

Failure Taxonomy 位于“测量”和“改进”之间。

它把 Eval 从：

> 发现系统不好

推进到：

> **知道它坏在哪一层、下一步应该修什么。**
