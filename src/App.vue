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
      <div class="container">
        <div class="ad-banner">
          <div class="ad-label">Advertisement</div>
          <div class="ad-title">广告位招租</div>
          <div class="ad-contact">
            联系邮箱: <a href="mailto:logist1024@hotmail.com">logist1024@hotmail.com</a>
          </div>
        </div>

        <div class="friends-links">
          <span class="friends-label">友情链接:</span>
          <a href="https://h-s.tech/" target="_blank" rel="noopener noreferrer">HIGHLIGHT Studio</a>
        </div>
      </div>
    </footer>

    <button class="scroll-top" :class="{ visible: showScrollTop }" @click="scrollToTop" title="回到顶部">
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
        <path d="M3.22 9.78a.749.749 0 010-1.06l4.25-4.25a.749.749 0 011.06 0l4.25 4.25a.749.749 0 11-1.06 1.06L8 6.06 4.28 9.78a.749.749 0 01-1.06 0z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'

const showScrollTop = ref(false)

function onScroll() {
  showScrollTop.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
