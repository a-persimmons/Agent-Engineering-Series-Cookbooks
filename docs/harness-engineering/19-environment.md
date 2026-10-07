# 19｜Environment：Agent 不是运行在真空里

同一个 Agent，在不同环境里可能表现完全不同。

因为它接触到的：

- 文件；
- Tool；
- 网络；
- 凭证；
- Runtime；
- 依赖；
- 配置；

都会改变可执行行为。

## Environment 应该可声明

不要让 Agent 靠猜当前世界。

例如：

~~~text
workspace = /workspace/repo
network = restricted
python = 3.12
node = 22
git_branch = feature/x
writable_paths = [...]
available_tools = [...]
~~~

这些是 Harness 的运行事实。

## 初始化很重要

长任务启动时，可以先做环境检查：

- 仓库状态；
- 依赖；
- Tool 可用性；
- 权限；
- 剩余磁盘；
- 外部服务连接。

如果环境一开始就不满足要求，早点失败比跑到第 20 步更好。

## 环境漂移

任务运行中，环境也可能变化：

- 文件被其他人修改；
- token 过期；
- 服务版本升级；
- 分支前进。

所以关键动作前有时需要重新验证环境。

## 地图坐标

Environment 是 **Isolation + Validation** 的现实载体。

Harness 不只是“包代码”，它定义 Agent 真正生活在哪个世界里。
