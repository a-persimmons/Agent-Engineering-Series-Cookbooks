# 05｜Target：先决定你到底要优化什么

“让 Agent 更好”不是 Target。

“准确率更高”也可能不够。

一个系统通常同时有多个目标：

- 任务成功；
- 事实正确；
- 安全；
- 成本；
- 延迟；
- 用户体验。

它们甚至会互相冲突。

## 先写 Success Criteria

例如客服 Agent：

~~~text
正确解决用户问题
+
不违反退款规则
+
高风险退款需要人工审批
+
平均成本低于预算
+
P95 响应时间可接受
~~~

这比“用户满意”更容易测。

## Target 要有优先级

例如：

~~~text
Safety > Correctness > Completeness > Latency
~~~

当指标冲突时，系统才知道怎么取舍。

## 不要只优化代理指标

例如“回答更长”不等于“更有帮助”。

“Tool Call 更多”不等于“更智能”。

“Judge 分高”也不等于用户真的完成任务。

指标只是 Target 的代理。

## 地图坐标

Target 是所有 Eval 的北极星。

后面的 Dataset、Rubric、Metric 都应该从它倒推。
