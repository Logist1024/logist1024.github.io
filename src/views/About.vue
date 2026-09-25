<template>
  <div class="about-page">
    <div class="container">
      <header class="page-head">
        <span class="section-eyebrow">About</span>
        <h1 class="page-title">关于我</h1>
      </header>

      <div class="about-content">
        <p class="about-intro">
          一名喜欢代码但是能力不足，一边用AI开发项目一边深入学习的高中生。
        </p>

        <h2>爱好</h2>
        <ul>
          <li class="chip">计算机</li>
          <li class="chip">AI</li>
          <li class="chip">网站</li>
          <li class="chip">Minecraft</li>
          <li class="chip">Counter-Strike</li>
        </ul>

        <h2>在学习</h2>
        <ol>
          <li class="chip">高中的学校知识😭</li>
          <li class="chip">AI Agents</li>
          <li class="chip">Java</li>
        </ol>

        <h2>梦想</h2>
        <p>有点小成就</p>

        <h2>联系我</h2>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
</script>
