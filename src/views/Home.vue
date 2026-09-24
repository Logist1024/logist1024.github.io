<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-info">
          <img src="https://github.com/Logist1024.png" alt="Logist" class="hero-avatar" />
          <div class="hero-text">
            <p class="hero-eyebrow"><span class="dot"></span>欢迎来到我的主页</p>
            <h1>Logist</h1>
            <p class="subtitle">一名喜欢代码但是能力不足，一边用AI开发项目一边深入学习的高中生。</p>
            <div class="hero-actions">
              <a href="https://github.com/Logist1024" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
                <AppIcon name="github" :size="20" />
                GitHub
              </a>
              <a href="mailto:logist1024@hotmail.com" class="btn btn-secondary btn-lg">
                <AppIcon name="mail" :size="20" />
                logist1024@hotmail.com
              </a>
            </div>
          </div>
        </div>

        <div class="stats-bar">
          <div class="stat-item">
            <div class="stat-value">{{ projects.length }}</div>
            <div class="stat-label">开源项目</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ tagCount }}</div>
            <div class="stat-label">技术标签</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ demoCount }}</div>
            <div class="stat-label">在线站点</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">项目<span class="count">{{ projects.length }} 个</span></h2>
        <div class="project-grid">
          <article v-for="project in projects" :key="project.name" class="project-card">
            <div class="project-card-header">
              <div class="project-icon" aria-hidden="true">
                <AppIcon :name="project.icon" :size="20" />
              </div>
              <h3>{{ project.name }}</h3>
            </div>
            <p>{{ project.description }}</p>
            <div v-if="project.tags" class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a :href="project.github" target="_blank" rel="noopener noreferrer">
                <AppIcon name="github" :size="18" />
                源码
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer">
                <AppIcon name="external-link" :size="18" />
                在线访问
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppIcon from '../components/AppIcon.vue'

const projects = [
  {
    name: 'logist1024.github.io',
    icon: 'house',
    description: '个人主页站点。Vue 3 + Vite + Vue Router（Hash 模式）构建的单页应用，部署于 GitHub Pages。包含首页项目展示、关于页技术栈与学习计划，支持任意子路径部署。',
    github: 'https://github.com/Logist1024/logist1024.github.io',
    demo: 'https://logist1024.github.io',
    tags: ['vue3', 'vite', 'vue-router', 'github-pages', 'spa']
  },
  {
    name: 'ServerTicket',
    icon: 'ticket',
    description: '面向 Minecraft 1.20.4+ (Spigot/Paper) 的轻量级工单/反馈插件。支持提交工单、管理员管理、分类路由、邮件通知（Jakarta Mail 内嵌）、离线投递、自动归档、频率限制、服务器指标采集（TPS/TickTime/Ping）及完整国际化（zh_CN/en_US）。',
    github: 'https://github.com/Logist1024/ServerTicket',
    tags: ['java', 'minecraft', 'minecraft-plugin', 'paper', 'spigot', 'ticket-system']
  }
]

const tagCount = computed(() => new Set(projects.flatMap(p => p.tags ?? [])).size)
const demoCount = computed(() => projects.filter(p => p.demo).length)
</script>
