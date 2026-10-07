# 04｜Failure Taxonomy：先让“效果不好”变成可修的问题

“效果不好”不是工程描述。

它无法统计，也无法路由到修复动作。

## 一个好 Failure Type 应该帮助决策

例如：

~~~text
Context Missing
Tool Selection Error
Unsupported Claim
Output Schema Error
Premature Stop
Retry Misclassification
Permission Violation
~~~

看到名字，大致就知道该看哪一层。

## 分类不要一开始做得太细

最初可以只有几类。

当某一类内部出现大量重复模式，再继续拆分。

例如：

~~~text
Tool Error
↓
Wrong Tool
Invalid Args
Timeout
Permission
Business Failure
~~~

Taxonomy 应该跟着真实失败生长。

## Failure Type 要稳定

如果同一种错误今天叫“幻觉”，明天叫“事实错误”，统计就失去意义。

团队需要统一定义和示例。

## 一个重要用途：看失败分布

假设 100 个失败：

- 43% Context Missing；
- 25% Tool Selection；
- 12% Premature Stop；
- 8% Format；
- 其他 12%。

这时最值得优化的方向已经很清楚。

不是“换个更强模型”，而是先修 Context Pipeline。

## 地图坐标

Failure Taxonomy 是 Eval 到 Engineering Action 之间的路由器。

没有分类，评测结果很难变成系统改进。
