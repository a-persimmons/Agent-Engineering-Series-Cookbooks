import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agent Engineering Series',
  description: '从 Prompt 到 Context、Agent、Harness 与 Evaluation 的系统学习系列',
  lang: 'zh-CN',
  base: '/Agent-Engineering-Series-Cookbooks/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '🧭',
    nav: [
      { text: '系列首页', link: '/' },
      { text: '第一本：Prompt', link: '/prompt-engineering/' },
      { text: '第二本：Context', link: '/context-engineering/' },
      { text: '第三本：Agent', link: '/agent-engineering/' },
      { text: '第四本：Harness', link: '/harness-engineering/' },
      { text: 'GitHub', link: 'https://github.com/a-persimmons/Agent-Engineering-Series-Cookbooks' }
    ],
    sidebar: {
      '/prompt-engineering/': [
        { text: '开始之前', items: [
          { text: '这本书要解决什么', link: '/prompt-engineering/' },
          { text: '先记住这一张地图', link: '/prompt-engineering/map' }
        ]},
        { text: '第一部｜先忘掉“写提示词”', items: [
          { text: '01 你不是在和 AI 聊天', link: '/prompt-engineering/01-not-chat' },
          { text: '02 从需求到任务规格', link: '/prompt-engineering/02-requirement-to-spec' },
          { text: '03 模型为什么会答坏', link: '/prompt-engineering/03-why-model-fails' }
        ]},
        { text: '第二部｜六个基本问题', items: [
          { text: '04 Goal：到底要完成什么', link: '/prompt-engineering/04-goal' },
          { text: '05 Context：模型需要知道什么', link: '/prompt-engineering/05-context' },
          { text: '06 Process：过程要不要设计', link: '/prompt-engineering/06-process' },
          { text: '07 Output：定义交付合同', link: '/prompt-engineering/07-output' },
          { text: '08 Constraints：边界与规则', link: '/prompt-engineering/08-constraints' },
          { text: '09 Evaluation：怎样知道它真的好', link: '/prompt-engineering/09-evaluation' }
        ]},
        { text: '第三部｜把技巧放回地图', items: [
          { text: '10 Few-shot：例子不是装饰', link: '/prompt-engineering/10-examples' },
          { text: '11 Reasoning：什么时候需要推理过程', link: '/prompt-engineering/11-reasoning' },
          { text: '12 Decomposition：复杂任务为什么要拆', link: '/prompt-engineering/12-decomposition' },
          { text: '13 Role：角色设定到底有什么用', link: '/prompt-engineering/13-role' },
          { text: '14 Structure：Markdown、XML 与结构', link: '/prompt-engineering/14-structure' }
        ]},
        { text: '第四部｜真正的工程：调试', items: [
          { text: '15 Prompt Debugging', link: '/prompt-engineering/15-debugging' },
          { text: '16 Failure Taxonomy', link: '/prompt-engineering/16-failure-taxonomy' },
          { text: '17 版本化与回归', link: '/prompt-engineering/17-versioning' },
          { text: '18 别再优化 Prompt，优化系统', link: '/prompt-engineering/18-system-not-prompt' }
        ]},
        { text: '第五部｜把地图用起来', items: [
          { text: '19 一个 Prompt 是怎样长出来的', link: '/prompt-engineering/19-case-study' },
          { text: '20 三类任务，三种设计方式', link: '/prompt-engineering/20-practice' }
        ]},
        { text: '第六部｜Prompt 的边界', items: [
          { text: '21 当上下文开始失控', link: '/prompt-engineering/21-context-window' },
          { text: '22 从 Prompt 到 Context Engineering', link: '/prompt-engineering/22-context-engineering' },
          { text: '23 Prompt 不再是一段文字', link: '/prompt-engineering/23-runtime-context' },
          { text: '24 下一站', link: '/prompt-engineering/24-next' }
        ]},
        { text: '附录', items: [
          { text: 'Prompt 设计与评审清单', link: '/prompt-engineering/checklist' }
        ]}
      ],
      '/context-engineering/': [
        { text: '开始之前', items: [
          { text: '这本书要解决什么', link: '/context-engineering/' },
          { text: '先记住这一张地图', link: '/context-engineering/map' }
        ]},
        { text: '第一部｜重新理解 Context', items: [
          { text: '01 不是“更长的 Prompt”', link: '/context-engineering/01-not-longer-prompt' },
          { text: '02 Context Window 不是 Memory', link: '/context-engineering/02-window-is-not-memory' },
          { text: '03 Context 为什么会失效', link: '/context-engineering/03-why-context-fails' }
        ]},
        { text: '第二部｜Context 从哪里来', items: [
          { text: '04 Instructions', link: '/context-engineering/04-instructions' },
          { text: '05 Conversation History', link: '/context-engineering/05-history' },
          { text: '06 Task State', link: '/context-engineering/06-task-state' },
          { text: '07 Retrieval', link: '/context-engineering/07-retrieval' },
          { text: '08 Tool Result', link: '/context-engineering/08-tools-environment' },
          { text: '09 Long-term Memory', link: '/context-engineering/09-memory' }
        ]},
        { text: '第三部｜六个关键操作', items: [
          { text: '10 Selection', link: '/context-engineering/10-selection' },
          { text: '11 Order：显著性与位置', link: '/context-engineering/11-order-salience' },
          { text: '12 Shape：形态与来源', link: '/context-engineering/12-shape-provenance' },
          { text: '13 Budget：压缩与注意力', link: '/context-engineering/13-budget-compaction' },
          { text: '14 Lifecycle', link: '/context-engineering/14-lifecycle' },
          { text: '15 Isolation', link: '/context-engineering/15-isolation' }
        ]},
        { text: '第四部｜把常见技术放回地图', items: [
          { text: '16 RAG 是 Context Pipeline', link: '/context-engineering/16-rag-pipeline' },
          { text: '17 Memory 是写入、选择与遗忘', link: '/context-engineering/17-memory-system' },
          { text: '18 Just-in-time Context', link: '/context-engineering/18-just-in-time' },
          { text: '19 Long-running Tasks', link: '/context-engineering/19-long-running' }
        ]},
        { text: '第五部｜真正的工程：调试与评测', items: [
          { text: '20 Context Debugging', link: '/context-engineering/20-debugging' },
          { text: '21 Observability', link: '/context-engineering/21-observability' },
          { text: '22 Evaluation', link: '/context-engineering/22-evaluation' }
        ]},
        { text: '第六部｜把地图用起来', items: [
          { text: '23 超长日志根因分析', link: '/context-engineering/23-case-study' },
          { text: '24 下一站：Agent Engineering', link: '/context-engineering/24-next' }
        ]},
        { text: '附录', items: [
          { text: 'Context 设计与评审清单', link: '/context-engineering/checklist' },
          { text: '延伸阅读', link: '/context-engineering/references' }
        ]}
      ],
      '/agent-engineering/': [
        { text: '开始之前', items: [
          { text: '这本书要解决什么', link: '/agent-engineering/' },
          { text: '先记住这一条 Loop', link: '/agent-engineering/map' }
        ]},
        { text: '第一部｜Agent 从哪里开始', items: [
          { text: '01 Model 不是 Agent', link: '/agent-engineering/01-model-is-not-agent' },
          { text: '02 Agent 从 Loop 开始', link: '/agent-engineering/02-minimal-loop' },
          { text: '03 Workflow 还是 Agent', link: '/agent-engineering/03-workflow-vs-agent' },
          { text: '04 Agent 为什么会失败', link: '/agent-engineering/04-agent-failures' }
        ]},
        { text: '第二部｜最小 Loop 的原语', items: [
          { text: '05 Goal', link: '/agent-engineering/05-goal' },
          { text: '06 Context', link: '/agent-engineering/06-context' },
          { text: '07 Decision', link: '/agent-engineering/07-decision' },
          { text: '08 Action', link: '/agent-engineering/08-action' },
          { text: '09 Observation', link: '/agent-engineering/09-observation' },
          { text: '10 State', link: '/agent-engineering/10-state' },
          { text: '11 Feedback', link: '/agent-engineering/11-feedback' },
          { text: '12 Stop', link: '/agent-engineering/12-stopping' }
        ]},
        { text: '第三部｜设计模式从 Loop 长出来', items: [
          { text: '13 ReAct', link: '/agent-engineering/13-react' },
          { text: '14 Planning', link: '/agent-engineering/14-planning' },
          { text: '15 Reflection', link: '/agent-engineering/15-reflection' },
          { text: '16 Routing 与 Parallel', link: '/agent-engineering/16-routing-parallel' },
          { text: '17 Human-in-the-loop', link: '/agent-engineering/17-human-in-loop' }
        ]},
        { text: '第四部｜从 Demo 到系统', items: [
          { text: '18 Tool Design 与 MCP', link: '/agent-engineering/18-tool-design-mcp' },
          { text: '19 Error Recovery', link: '/agent-engineering/19-error-recovery' },
          { text: '20 Subagent', link: '/agent-engineering/20-subagent' },
          { text: '21 Multi-Agent', link: '/agent-engineering/21-multi-agent' }
        ]},
        { text: '第五部｜调试与评测', items: [
          { text: '22 Tracing 与 Evals', link: '/agent-engineering/22-tracing-evals' }
        ]},
        { text: '第六部｜把 Loop 跑起来', items: [
          { text: '23 Mini Coding Agent', link: '/agent-engineering/23-case-study' },
          { text: '24 下一站：Harness Engineering', link: '/agent-engineering/24-next' }
        ]},
        { text: '附录', items: [
          { text: 'Agent 设计与评审清单', link: '/agent-engineering/checklist' },
          { text: '延伸阅读', link: '/agent-engineering/references' }
        ]}
      ],
      '/harness-engineering/': [
        { text: '开始之前', items: [
          { text: '这本书要解决什么', link: '/harness-engineering/' },
          { text: 'Harness 核心地图', link: '/harness-engineering/map' }
        ]},
        { text: '第一部｜为什么需要 Harness', items: [
          { text: '01 能跑还远远不够', link: '/harness-engineering/01-why-harness' },
          { text: '02 Agent 的 Control Plane', link: '/harness-engineering/02-control-plane' },
          { text: '03 Harness Failure', link: '/harness-engineering/03-harness-failures' }
        ]},
        { text: '第二部｜运行边界', items: [
          { text: '04 Permission', link: '/harness-engineering/04-permission' },
          { text: '05 Sandbox', link: '/harness-engineering/05-sandbox' },
          { text: '06 Validation', link: '/harness-engineering/06-validation' },
          { text: '07 Timeout 与 Cancellation', link: '/harness-engineering/07-timeout-cancel' },
          { text: '08 Retry', link: '/harness-engineering/08-retry' },
          { text: '09 Budget', link: '/harness-engineering/09-budget-limits' }
        ]},
        { text: '第三部｜失败以后还能继续', items: [
          { text: '10 Checkpoint', link: '/harness-engineering/10-checkpoint' },
          { text: '11 Persistence 与 Resume', link: '/harness-engineering/11-persistence-resume' },
          { text: '12 Idempotency', link: '/harness-engineering/12-idempotency' },
          { text: '13 Recovery', link: '/harness-engineering/13-recovery' }
        ]},
        { text: '第四部｜看见与治理', items: [
          { text: '14 Observability', link: '/harness-engineering/14-observability' },
          { text: '15 Audit', link: '/harness-engineering/15-audit' },
          { text: '16 Hooks', link: '/harness-engineering/16-hooks' },
          { text: '17 Long-running Tasks', link: '/harness-engineering/17-long-running' },
          { text: '18 Approval', link: '/harness-engineering/18-approval' },
          { text: '19 Environment', link: '/harness-engineering/19-environment' }
        ]},
        { text: '第五部｜工程化与验证', items: [
          { text: '20 Harness Evals', link: '/harness-engineering/20-evals' },
          { text: '21 Harness 与 Framework', link: '/harness-engineering/21-frameworks' },
          { text: '22 从真实 Coding Agent 看 Harness', link: '/harness-engineering/22-real-systems' }
        ]},
        { text: '第六部｜把 Agent 硬化', items: [
          { text: '23 Mini Coding Agent → Harness', link: '/harness-engineering/23-case-study' },
          { text: '24 下一站：Evaluation', link: '/harness-engineering/24-next' }
        ]},
        { text: '附录', items: [
          { text: 'Harness 评审清单', link: '/harness-engineering/checklist' },
          { text: '延伸阅读', link: '/harness-engineering/references' }
        ]}
      ]
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' },
    search: { provider: 'local' },
    footer: {
      message: 'Agent Engineering Series Cookbooks',
      copyright: 'Built for learning, debugging and shipping.'
    }
  }
})
