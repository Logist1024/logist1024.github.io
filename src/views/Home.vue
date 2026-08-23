<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="hero-info">
          <img src="https://github.com/Logist1024.png" alt="Logist" class="hero-avatar" />
          <div class="hero-text">
            <h1>Logist</h1>
            <p class="subtitle">一名喜欢代码但是能力不足，一边用AI开发项目一边深入学习的高中生。</p>
            <div class="hero-actions">
              <a href="https://github.com/Logist1024" target="_blank" class="btn btn-primary">
                <GitHubIcon />
                GitHub
              </a>
              <a href="mailto:logist1024@hotmail.com" class="btn btn-secondary">logist1024@hotmail.com</a>

            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">项目</h2>
        <div class="project-grid">
          <div v-for="project in projects" :key="project.name" class="project-card">
            <div class="project-card-header">
              <div class="project-icon">{{ project.icon }}</div>
              <h3>{{ project.name }}</h3>
            </div>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag.text" :class="['tag', tag.color]">{{ tag.text }}</span>
            </div>
            <div class="project-links">
              <a :href="project.github" target="_blank">
                <GitHubIcon />
                源码
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank">
                🌐 在线访问
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import GitHubIcon from '../components/GitHubIcon.vue'

const projects = [
  {
    name: 'ServerTicket',
    icon: '🎫',
    description: '面向 Minecraft 1.20.4+ (Spigot/Paper) 的轻量级工单/反馈插件。支持提交工单、管理员管理、分类路由、邮件通知、离线投递、自动归档和速率限制等功能。',
    github: 'https://github.com/Logist1024/ServerTicket',
    tags: [
      { text: 'Java', color: '' },
      { text: 'Minecraft Plugin', color: 'green' },
      { text: 'Spigot/Paper', color: 'purple' }
    ]
  },
  {
    name: 'MCcmd',
    icon: '⚒️',
    description: 'Minecraft 指令生成器（静态网页）。选版本 → 挑指令 → 填参数 → 实时生成可直接粘贴到游戏中的指令。支持 Java 版 + 基岩版，30+ 条指令，中英双语。',
    github: 'https://github.com/Logist1024/MCcmd',
    tags: [
      { text: 'JavaScript', color: '' },
      { text: 'Static Site', color: 'green' },
      { text: 'i18n', color: 'purple' }
    ]
  },
  {
    name: 'Pages-docs',
    icon: '📚',
    description: '基于 Cloudflare Workers 的在线编辑文档站。访客免登录阅读（SSR + SEO），团队后台用 Vditor 编辑发布；内容存 D1、图片与每日备份存 R2、KV 页面缓存，支持全文搜索、版本历史与用量看板。',
    github: 'https://github.com/Logist1024/Pages-docs',
    demo: 'https://pages-docs.logist1024.workers.dev',
    tags: [
      { text: 'TypeScript', color: '' },
      { text: 'Cloudflare Workers', color: 'green' },
      { text: 'Hono / D1 / R2', color: 'purple' }
    ]
  }
]

</script>
