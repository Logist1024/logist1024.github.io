<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <!-- 页眉信息卡：横向介绍（头像居左）+ 日期/导航侧栏 + 统计条 -->
        <div class="hero-card">
          <div class="hero-main">
            <div class="hero-avatar">
              <img src="https://github.com/Logist1024.png" alt="Logist" />
            </div>

            <div class="hero-body">
              <div class="hero-badges">
                <span class="badge badge--yellow"><span class="dot"></span>欢迎来到我的主页</span>
                <span class="badge badge--blue">高中生 · 自学编程中</span>
              </div>

              <h1 class="hero-name">Logist</h1>

              <p class="hero-lead">
                一名喜欢代码但是能力不足，一边用AI开发项目一边深入学习的高中生。
              </p>

              <ul class="hero-tags">
                <li class="tag tag--purple">Vue 3</li>
                <li class="tag tag--blue">Java</li>
                <li class="tag tag--green">Minecraft</li>
                <li class="tag tag--yellow">AI Agents</li>
              </ul>

              <div class="hero-actions">
                <a
                  href="https://github.com/Logist1024"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-lg"
                >
                  <AppIcon name="github" :size="20" />
                  GitHub
                </a>
                <a href="mailto:logist1024@hotmail.com" class="btn btn-secondary btn-lg">
                  <AppIcon name="mail" :size="20" />
                  发邮件给我
                </a>
              </div>
            </div>
          </div>

          <aside class="hero-aside">
            <div class="aside-block">
              <span class="aside-label"><AppIcon name="calendar" :size="15" />今天</span>
              <span class="aside-value">{{ today.date }}</span>
              <span class="aside-sub">{{ today.weekday }} · UTC+8</span>
            </div>

            <span class="aside-divider" aria-hidden="true"></span>

            <div class="aside-block">
              <span class="aside-label"><AppIcon name="compass" :size="15" />快速导航</span>
              <nav class="aside-nav">
                <router-link to="/">
                  <AppIcon name="house" :size="16" />
                  首页
                </router-link>
                <router-link to="/about">
                  <AppIcon name="user" :size="16" />
                  关于我
                </router-link>
                <button type="button" @click="scrollToProjects">
                  <AppIcon name="code" :size="16" />
                  项目列表
                </button>
              </nav>
            </div>
          </aside>

          <div class="stats-bar">
            <div class="stat-item stat-item--blue">
              <span class="stat-icon"><AppIcon name="code" :size="18" /></span>
              <span class="stat-text">
                <span class="stat-value">{{ projects.length }}</span>
                <span class="stat-label">开源项目</span>
              </span>
            </div>
            <div class="stat-item stat-item--yellow">
              <span class="stat-icon"><AppIcon name="tag" :size="18" /></span>
              <span class="stat-text">
                <span class="stat-value">{{ tagCount }}</span>
                <span class="stat-label">技术标签</span>
              </span>
            </div>
            <div class="stat-item stat-item--green">
              <span class="stat-icon"><AppIcon name="external-link" :size="18" /></span>
              <span class="stat-text">
                <span class="stat-value">{{ demoCount }}</span>
                <span class="stat-label">在线站点</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="container">
        <header class="section-head">
          <span class="section-eyebrow">Projects</span>
          <h2 class="section-title">
            开源项目
            <span class="section-count"><span class="dot"></span>共 {{ projects.length }} 个</span>
          </h2>
        </header>

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

const weekNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const now = new Date()
const today = {
  date: `${now.getFullYear()} 年 ${now.getMonth() + 1} 月 ${now.getDate()} 日`,
  weekday: weekNames[now.getDay()]
}

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
