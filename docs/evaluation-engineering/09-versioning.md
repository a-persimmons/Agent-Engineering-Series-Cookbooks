# 09｜Dataset Versioning：不记录版本，就不知道自己在比较什么

Eval 最常见的隐性问题之一，是测试集在变，大家却还在比较同一个“准确率”。

今天加了 20 条难题，明天修了 5 条标注，后天删掉 10 条重复案例。

总分变化以后，很难知道：

> 是系统变了，还是考试变了？

## 至少记录四个版本

~~~text
model_version
prompt_or_agent_version
dataset_version
rubric_version
~~~

如果是 Agent，还应该记录：

- Tool 版本；
- Harness 配置；
- Environment；
- 运行参数。

## Case 也需要稳定 ID

一条真实失败进入回归集后，应该有固定 Case ID。

以后即使 Expected 被修正，也能看到历史变化。

## Dataset 变更也需要 Changelog

例如：

> v1.4：加入 12 条 timeout-after-write 案例，用于覆盖 Resume 重复副作用问题。

这比“更新评测集”更有诊断价值。

## 不要偷偷修测试

如果某个版本失败后，直接把 Expected 改成模型输出，Eval 就失去意义。

Rubric 或标注错误当然可以修，但要记录原因。

## 地图坐标

Versioning 让 Regression 有可信基线。

没有稳定版本，所有趋势图都可能只是数据漂移。
