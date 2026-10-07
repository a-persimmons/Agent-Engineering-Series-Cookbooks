# 04｜Permission：Agent 能做什么，不是由 Prompt 决定

权限是 Harness 最先应该硬化的边界之一。

不要只写：

> 未经允许不要修改重要文件。

应该让执行层真的拒绝。

## 权限可以分层

### Read

读取文件、查询数据、搜索。

### Write

修改工作区、创建草稿。

### Execute

运行 Shell、代码或外部程序。

### External Side Effect

发邮件、付款、部署、删除远程资源。

风险越高，授权要求越严格。

## Scope 比“是否允许”更细

一个 Coding Agent 可以允许写文件，但只允许：

~~~text
/workspace/project/**
~~~

不能写：

~~~text
~/.ssh/**
/etc/**
other-repo/**
~~~

权限应该绑定资源范围。

## 动态权限

有些动作不是永远允许或禁止。

可以：

- 默认 deny；
- 满足条件自动 allow；
- 高风险请求人工 approval；
- 临时 grant；
- 任务结束 revoke。

## 模型不应该决定自己的权限

模型可以请求：

> 我需要修改 deploy.yml。

Harness 决定：

> 这个任务是否允许、范围是什么、是否要人批准。

## 地图坐标

Permission 定义 Agent 的行为边界。

它把“请不要做危险操作”变成执行层真正无法越过的墙。
