<template>
  <div class="app">
    <NavBar />

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="site-footer">
      <div class="footer-strip" aria-hidden="true"></div>
      <div class="footer-inner">
        <div class="container">
          <div class="ad-banner">
            <div class="ad-label">Advertisement</div>
            <div class="ad-title">广告位招租</div>
            <div class="ad-contact">
              联系邮箱: <a href="mailto:logist1024@hotmail.com">logist1024@hotmail.com</a>
            </div>
          </div>

          <div class="footer-links">
            <div class="link-group">
              <span class="link-group-label">友情链接</span>
              <a class="footer-link footer-link--blue" href="https://h-s.tech/" target="_blank" rel="noopener noreferrer">HIGHLIGHT Studio</a>
            </div>
            <div class="link-group">
              <span class="link-group-label">推广链接</span>
              <a class="footer-link footer-link--green" href="https://www.rainyun.com/MTI0MjEyNw==" target="_blank" rel="noopener noreferrer">雨云</a>
            </div>
          </div>

          <div class="footer-bottom">
            <span>© {{ year }} Logist · Vue 3 + Vite 构建</span>
            <span class="footer-motto">If you don't know the meaning of living, try to create it.</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'

const year = new Date().getFullYear()
</script>
