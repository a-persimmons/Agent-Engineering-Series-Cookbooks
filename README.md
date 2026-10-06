# Agent Engineering Series Cookbooks

一套围绕 **Prompt → Context → Agent → Harness → Evaluation** 逐层展开的 AI Engineering 系列读物。

这套系列不以“记住多少技巧”为目标，而是希望读者形成一张可迁移的工程地图：面对新任务时，能够自己建模、设计、诊断、评估和改进，而不是继续搜索模板。

## 系列规划

1. **Prompt Engineering：从需求到可控行为**（第一本，已开始）
2. **Context Engineering：控制模型看到的世界**（规划中）
3. **Agent Engineering：让模型持续决策与行动**（规划中）
4. **Harness Engineering：让 Agent 可靠运行**（规划中）
5. **Evaluation Engineering：让系统可验证、可回归**（规划中）

## 本地阅读

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

站点使用 VitePress，并通过 GitHub Actions 自动部署到 GitHub Pages。
