<template>
  <section class="about-page">
    <div class="container">
      <header class="page-head">
        <span class="section-eyebrow">About</span>
        <h1 class="page-title">关于我</h1>
        <span class="head-rule" aria-hidden="true"></span>
      </header>

      <!-- Bento 网格：主卡(简介) / 重点卡(梦想) / 信息卡(爱好·在学习) / 功能卡(联系我) -->
      <div class="about-grid">
        <article class="about-card about-card--intro">
          <div class="card-head">
            <span class="card-icon" aria-hidden="true">
              <AppIcon name="user" :size="20" />
            </span>
            <span class="card-eyebrow">简介</span>
          </div>
          <p class="about-intro">
            一名喜欢代码但是能力不足，一边用AI开发项目一边深入学习的高中生。
          </p>
        </article>

        <article class="about-card about-card--dream">
          <span class="dream-mark" aria-hidden="true">
            <AppIcon name="star" :size="28" />
          </span>
          <h2 class="dream-label">梦想</h2>
          <p class="dream-text">有点小成就</p>
        </article>

        <article class="about-card about-card--hobby">
          <div class="card-head">
            <span class="card-icon" aria-hidden="true">
              <AppIcon name="heart" :size="20" />
            </span>
            <h2 class="card-title">爱好</h2>
            <span class="card-count">{{ hobbies.length }}</span>
          </div>
          <ul class="fact-list">
            <li v-for="item in hobbies" :key="item" class="fact-chip">{{ item }}</li>
          </ul>
        </article>

        <article class="about-card about-card--learning">
          <div class="card-head">
            <span class="card-icon" aria-hidden="true">
              <AppIcon name="book-open" :size="20" />
            </span>
            <h2 class="card-title">在学习</h2>
            <span class="card-count">{{ learning.length }}</span>
          </div>
          <ol class="learn-list">
            <li v-for="(item, index) in learning" :key="item" class="learn-item">
              <span class="learn-index">{{ index + 1 }}</span>
              <span class="learn-text">{{ item }}</span>
            </li>
          </ol>
        </article>

        <section class="about-card about-card--contact">
          <div class="card-head">
            <span class="card-icon" aria-hidden="true">
              <AppIcon name="mail" :size="20" />
            </span>
            <h2 class="card-title">联系我</h2>
          </div>
          <div class="contact-grid">
            <div class="contact-card">
              <div class="contact-icon"><AppIcon name="mail" :size="20" /></div>
              <div>
                <div class="label">邮箱</div>
                <a class="value" href="mailto:logist1024@hotmail.com">logist1024@hotmail.com</a>
              </div>
            </div>
            <div class="contact-card contact-card--purple">
              <div class="contact-icon"><AppIcon name="github" :size="20" /></div>
              <div>
                <div class="label">GitHub</div>
                <a class="value" href="https://github.com/Logist1024" target="_blank" rel="noopener noreferrer">github.com/Logist1024</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'

const hobbies = ['计算机', 'AI', '网站', 'Minecraft', 'Counter-Strike']
const learning = ['高中的学校知识😭', 'AI Agents', 'Java']
</script>
