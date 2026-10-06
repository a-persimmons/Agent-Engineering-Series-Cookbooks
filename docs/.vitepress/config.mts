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
      { text: '第一本：Prompt Engineering', link: '/prompt-engineering/' },
      { text: '核心地图', link: '/prompt-engineering/map' },
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
