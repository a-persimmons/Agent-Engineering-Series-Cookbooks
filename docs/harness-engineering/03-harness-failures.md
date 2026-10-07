# 03｜Harness Failure：系统是怎么失控的

Harness 问题经常被误认为 Agent 推理问题。

先给失败起名字，会更容易修。

## Permission Failure

不该执行的动作被允许了，或者该允许的动作被错误阻止。

## Isolation Failure

Agent 能访问超出任务范围的文件、网络、进程或凭证。

## Validation Failure

非法参数、错误 Schema 或危险命令进入执行层。

## Limit Failure

死循环、超时、token、费用、进程资源没有上限。

## Recovery Failure

错误发生后无限重试、错误回滚，或者副作用状态不明。

## Persistence Failure

任务中断后 State 丢失，恢复时重复执行已经完成的动作。

## Observability Failure

出了事故却无法还原哪一轮、哪个 Tool、什么参数造成。

## Evaluation Failure

同一种事故修过一次，下次又出现。

## 地图坐标

这八类失败刚好对应本册主地图。

后面的目标不是记住名词，而是让每一种风险都有明确的系统责任层。
