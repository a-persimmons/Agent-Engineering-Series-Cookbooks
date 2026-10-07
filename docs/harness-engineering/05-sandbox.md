# 05｜Sandbox：给 Agent 一个可以犯错的地方

Agent 能执行代码、Shell 或浏览器操作后，Isolation 就变得非常具体。

最安全的错误，是发生在一个不会伤害真实环境的地方。

这就是 Sandbox 的意义。


![Permission、Isolation、Validation 三层边界](/diagrams/harness/boundary-layers.svg)

## Sandbox 隔离什么

可能包括：

- 文件系统；
- 进程；
- 网络；
- 环境变量；
- 凭证；
- CPU / Memory；
- 执行时间。

不是所有任务都需要最强隔离，但边界必须明确。

## Coding Agent 的典型工作区

理想状态下，它能：

- 读项目文件；
- 修改项目文件；
- 运行测试；
- 安装允许的依赖。

但不能：

- 读取用户私人目录；
- 获取宿主机 SSH Key；
- 随意访问内网；
- 杀掉宿主机进程。

## Sandbox 不是安全的全部

隔离环境仍可能：

- 泄漏敏感输入；
- 访问不该访问的网络；
- 执行资源耗尽攻击；
- 产生危险输出供人复制执行。

因此 Sandbox 要和 Permission、Limits、Validation 一起使用。

## 地图坐标

Sandbox 是 **Isolation** 的主要实现。

它不是为了阻止 Agent 犯错，而是让错误的爆炸半径可控。
