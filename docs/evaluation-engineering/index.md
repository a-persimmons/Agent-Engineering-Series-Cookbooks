# Evaluation Engineering：让系统可验证、可回归

> AI 系统最危险的一句话，是：“我试了几个，看起来挺好的。”

Prompt 改了一版，感觉更听话。

RAG 调了参数，感觉答案更准。

Agent 加了 Reflection，感觉更聪明。

Harness 增加 Retry，感觉更稳。

如果没有一套稳定的验证方法，这些“感觉”很容易把系统越改越复杂，却不知道到底改善了什么，又悄悄弄坏了什么。

第五册要解决的不是“怎么给模型打分”。

而是：

> **怎样定义好、系统地寻找坏、证明修复有效，并让真实失败不断变成下一版系统的能力。**

主地图：

![Evaluation Engineering 核心闭环](/diagrams/evaluation/core-map.svg)

**Target → Cases → Rubric → Signals → Metrics → Failure Taxonomy → Regression → Production Feedback → Improvement Loop**

## 读完后应该形成三种反射

### 评价反射

看到一个“效果不错”的 Demo，会先问：

> 对哪些 Case 不错？按什么标准？有没有高风险 Slice？

不再把几个成功样本当成能力证明。

### 诊断反射

看到一个低分，不满足于：

> 模型答错了。

而会继续问：

> 这是 Prompt、Context、Agent、Harness，还是 Evaluation 自己的盲区？

Eval 的结果必须能指向工程动作。

### 回归反射

看到一个真实失败，会自然想到：

> 这条失败什么时候进入 Regression Set？

如果一个事故只被修掉，却没有留下 Case，它仍然可能回来。

## 怎么读

最好继续沿用前几册的 Mini Coding Agent。

每读一章，就给它补一层“可证明性”：

~~~text
感觉它能修 Bug
→ 定义 Target

挑几个例子试试
→ 固定 Dataset

结果看起来不错
→ 写 Rubric

最终测试通过
→ 再看 Trajectory

线上出了事故
→ 保存 Trace + Failure Type

修复完成
→ 加入 Regression
~~~

到第 23 章，我们会把这些组成一套完整 Eval Lab。

到第 24 章，五册会收束成同一张从 Human Intent 到 Improvement Loop 的总图。
