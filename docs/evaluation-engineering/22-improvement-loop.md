# 22｜真正的 Eval 终点不是 Dashboard

一个项目做完 Evaluation，最容易留下来的东西是一张 Dashboard。

成功率、成本、延迟、Judge 分数，全都画成漂亮曲线。

这些当然有用。

但如果曲线变红之后，没有人知道下一步该做什么，这套 Eval 还没有形成闭环。

![Evaluation Improvement Loop](/diagrams/evaluation/improvement-loop.svg)

## 一个失败真正应该走完这条路

~~~text
Failure
↓
Classify
↓
Locate Root Layer
↓
Engineering Change
↓
Regression
↓
Release
↓
Production
↓
New Feedback
~~~

每一步都不能省。

## 不同 Failure 要回到不同地方

模型误解任务，可能回 Prompt。

关键证据没进 Context，应该回 Context Pipeline。

Tool 选错或 Loop 重复，应该回 Agent。

Timeout 导致重复付款，应该回 Harness。

测试根本没覆盖这个问题，Evaluation 自己也需要修。

这也是为什么第五册放在整个系列最后。

它不是站在外面给前四册打分。

它负责把真实失败重新送回正确的工程层。

## 一次修复如果没有留下 Regression，知识仍然只在人脑里

某次事故发生：

> Agent 在 Tool Timeout 后重复执行写操作。

工程师修了代码。

如果到这里就结束，这个知识仍然依赖“大家记得这件事”。

更完整的做法是：

1. 保存事故 Trace；
2. 建立 Failure Type；
3. 写一个可以稳定复现的 Case；
4. 修复 Harness；
5. 把 Case 加进 Regression；
6. 以后每个版本自动重跑。

这时经验才真正进入系统。

## Improvement Loop 的本质

不是让系统“自动自我进化”。

而是让：

> **失败不再只是一次事故，而能稳定地转化成数据、规则、测试和机制。**

这已经足够强大。

因为一个团队长期真正积累的，不应该只是越来越长的 Prompt 和越来越复杂的代码。

还应该有一套越来越难被旧问题击穿的验证系统。
