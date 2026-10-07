# 20｜Context Debugging：别先怪模型

当一个 Agent 做错事，第一反应经常是：

> 模型能力不够。

但很多生产问题其实来自 Context。

## 一套固定诊断顺序

### 1. Need 是否判断错了

系统有没有搞清这一轮真正需要什么信息？

### 2. Source 是否存在

信息根本不存在，还是只是没有被取到？

### 3. Select 是否选错

相关信息被漏掉，还是无关信息太多？

### 4. Shape 是否不利于使用

关键信息是不是埋在原始日志、长文或混乱 JSON 里？

### 5. Budget 是否失衡

某类 Context 是否占用了过多注意力？

### 6. Lifecycle 是否出错

是不是用了过期状态、旧规则或旧 Memory？

### 7. Evaluation 是否没覆盖

为什么测试阶段没有发现这类问题？

## 建立 Context Trace

对重要 Agent，最好能记录每一次模型调用时：

- 当前 Goal；
- 当前 State；
- 选择了哪些 Memory；
- RAG 返回了什么；
- 哪些工具结果进入了 Context；
- 哪些内容被压缩或丢弃；
- 最终 token / 成本；
- 模型输出和后续动作。

没有 Context Trace，很难解释“模型为什么会这么做”。

## 一次只改变一条策略

如果同时换 Embedding、改 Top-K、增加 Memory、重写 Prompt，很难判断修复来自哪里。

Context 调试同样需要控制变量。

## 地图坐标

Context Debugging 就是沿着：

**Need → Source → Select → Shape → Budget → Lifecycle → Evaluation**

逐层定位。

当这条链变成习惯，Context Engineering 才真正成为可调试系统。
