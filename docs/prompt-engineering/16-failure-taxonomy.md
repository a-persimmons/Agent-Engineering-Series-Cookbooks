# 16｜Failure Taxonomy：给失败起名字

“效果不好”不是一个可用的工程描述。

只有把失败分成稳定类别，团队才能统计、讨论和修复。

## 一套够用的起始分类

### Task Misunderstanding

做错了任务。通常回到 Goal。

### Context Insufficiency

缺少完成任务所需事实。通常回到 Context。

### Context Distraction

信息过多或冲突，关键内容被淹没。仍然是 Context 问题。

### Reasoning Failure

信息足够，任务也明确，但推导过程错误。检查 Process。

### Output Contract Failure

内容可能正确，但格式、字段、粒度不合格。检查 Output。

### Boundary Violation

超出允许范围、无证据断言、忽略限制。检查 Constraints。

### Evaluation Blind Spot

系统看起来通过测试，但真实使用仍失败。说明 Evaluation 没覆盖关键场景。

## 分类不是为了显得专业

真正价值在于把“修 Prompt”变成路由：

~~~
失败样本
↓
归类
↓
定位责任层
↓
选择修改手段
↓
回归验证
~~~

一旦团队积累了上百条失败样本，你甚至可以回答：

> 这个系统最主要的问题不是推理能力，而是 43% 的失败来自 Context Insufficiency。

这时优化方向会完全不同。

## 分类要跟着系统长

最开始不必追求完美 taxonomy。先有六七类，出现无法归类的重复问题时再增加。

一个好的分类体系应该帮助决策，而不是收集术语。

## 挂回地图

Failure Taxonomy 是整张地图的“反向索引”。

地图告诉你怎么设计；失败分类告诉你坏了以后回哪一层修。
