<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }" aria-label="主导航">
    <div class="container nav-inner">
      <router-link to="/" class="nav-brand">
        <img src="https://github.com/Logist1024.png" alt="Logist" class="nav-avatar" />
        <span class="nav-name">Logist</span>
      </router-link>

      <div class="nav-links">
        <router-link to="/" class="nav-link nav-link--home">首页</router-link>
        <router-link to="/about" class="nav-link nav-link--about">关于</router-link>

        <button
          class="theme-toggle"
          type="button"
          @click="toggleTheme"
          :title="isDark ? '切换到亮色模式' : '切换到暗色模式'"
          :aria-label="isDark ? '切换到亮色模式' : '切换到暗色模式'"
          :aria-pressed="isDark"
        >
          <AppIcon :name="isDark ? 'sun' : 'moon'" :size="18" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppIcon from './AppIcon.vue'

const isScrolled = ref(false)
const isDark = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 16
}

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* ============================================================
   顶部栏 —— 吸顶收窄 + 逐项彩色悬停反馈
   颜色全部取自主题令牌（main.css），明暗自动跟随
   ============================================================ */
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  height: var(--nav-height);
  z-index: 100;
  background-color: var(--nav-bg);
  background-image: radial-gradient(160% 320% at 50% -180%, var(--glow-purple), transparent 70%);
  backdrop-filter: var(--nav-blur);
  -webkit-backdrop-filter: var(--nav-blur);
  border-bottom: 1px solid transparent;
  transition: height var(--dur-slow) var(--ease),
    background-color var(--dur-slow) var(--ease), border-color var(--transition),
    box-shadow var(--transition);
}

/* 底部品牌渐变星光线（紫 → 黄），滚动后浮现 */
.navbar::after {
  content: '';
  position: absolute;
  left: 28%;
  right: 28%;
  bottom: -1px;
  height: 2px;
  border-radius: var(--r-full);
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent) 30%,
    var(--star) 50%,
    var(--accent) 70%,
    transparent
  );
  opacity: 0;
  transition: opacity var(--dur-slow) var(--ease);
}

/* 吸顶收窄态 */
.navbar.scrolled {
  height: var(--nav-height-compact);
  background-color: var(--nav-bg-scrolled);
  border-bottom-color: var(--border);
  box-shadow: var(--elevation-1);
}

.navbar.scrolled::after {
  opacity: 0.75;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);
  height: 100%;
}

/* ---------- 品牌区：滚动后整体收窄 ---------- */
.nav-brand {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  min-width: 0;
  padding: var(--sp-1) var(--sp-2);
  margin-left: calc(-1 * var(--sp-2));
  border-radius: var(--r-full);
  font-size: var(--fs-md);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text-strong);
  text-decoration: none;
  transition: background var(--transition), color var(--transition),
    font-size var(--dur-slow) var(--ease), gap var(--dur-slow) var(--ease);
}

.nav-brand:hover {
  color: var(--accent-hover);
  background: var(--accent-soft);
}

.nav-brand:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.nav-avatar {
  width: 34px;
  height: 34px;
  border-radius: var(--r-full);
  border: 1px solid var(--accent-border);
  flex-shrink: 0;
  transition: width var(--dur-slow) var(--ease), height var(--dur-slow) var(--ease),
    border-color var(--transition);
}

.nav-brand:hover .nav-avatar {
  border-color: var(--accent);
}

.navbar.scrolled .nav-brand {
  gap: var(--sp-2);
  font-size: var(--fs-sm);
}

.navbar.scrolled .nav-avatar {
  width: 28px;
  height: 28px;
}

.nav-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ---------- 导航项：逐项彩色悬停反馈 ---------- */
.nav-links {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  flex-shrink: 0;
}

.nav-link {
  --link-ink: var(--text-soft);
  --link-bg: transparent;
  --link-c: var(--accent);

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 16px;
  border-radius: var(--r-full);
  font-size: var(--fs-sm);
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  color: var(--text-soft);
  text-decoration: none;
  transition: color var(--transition), background-color var(--transition);
}

.nav-link--home {
  --link-ink: var(--c-blue-ink);
  --link-bg: var(--c-blue-bg);
  --link-c: var(--c-blue);
}

.nav-link--about {
  --link-ink: var(--c-green-ink);
  --link-bg: var(--c-green-bg);
  --link-c: var(--c-green);
}

/* hover：彩色浅底胶囊 + 底部小色条浮现 */
.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 4px;
  width: 16px;
  height: 3px;
  border-radius: var(--r-full);
  background: var(--link-c);
  transform: translateX(-50%) scaleX(0);
  opacity: 0;
  transition: transform var(--dur-slow) var(--ease), opacity var(--transition);
}

.nav-link:hover {
  color: var(--link-ink);
  background: var(--link-bg);
  text-decoration: none;
}

.nav-link:hover::after {
  transform: translateX(-50%) scaleX(1);
  opacity: 1;
}

.nav-link:active {
  transform: scale(0.97);
}

/* 当前页：统一紫色胶囊，保持主色识别度 */
.nav-link.router-link-exact-active {
  color: var(--accent-pressed);
  background: var(--accent-soft);
  --link-c: var(--accent);
}

.nav-link.router-link-exact-active::after {
  transform: translateX(-50%) scaleX(1);
  opacity: 1;
}

.nav-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.nav-link.is-disabled,
.nav-link[aria-disabled='true'] {
  color: var(--text-muted);
  background: transparent;
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
}

/* ---------- 主题切换：悬停转星芒黄 ---------- */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: var(--sp-2);
  border-radius: var(--r-full);
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  color: var(--icon-color);
  cursor: pointer;
  flex-shrink: 0;
  transition: color var(--transition), background var(--transition),
    border-color var(--transition), transform var(--dur-slow) var(--ease),
    box-shadow var(--transition);
}

.theme-toggle:hover {
  color: var(--c-yellow-ink);
  background: var(--c-yellow-bg);
  border-color: var(--c-yellow);
  transform: rotate(-12deg);
  box-shadow: 0 0 0 4px var(--c-yellow-bg);
}

.theme-toggle:active {
  transform: rotate(-12deg) scale(0.94);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--c-yellow);
  outline-offset: 2px;
}

.theme-toggle .icon {
  color: inherit;
}

.theme-toggle:disabled {
  color: var(--text-muted);
  background: var(--bg-subtle);
  border-color: var(--border);
  opacity: 0.55;
  cursor: not-allowed;
}

/* ============================================================
   响应式：逐级收紧，吸顶收窄在所有断点生效
   ============================================================ */
@media (max-width: 768px) {
  .nav-inner {
    gap: var(--sp-3);
  }

  .nav-link {
    padding: 9px 12px;
  }

  .theme-toggle {
    margin-left: var(--sp-1);
  }
}

/* 窄屏折叠策略：先收起品牌文字，保证导航项与操作按钮完整可见 */
@media (max-width: 560px) {
  .nav-name {
    display: none;
  }

  .nav-brand {
    padding: var(--sp-1);
    margin-left: calc(-1 * var(--sp-1));
  }

  .nav-links {
    gap: var(--sp-1);
  }

  .nav-link {
    padding: 8px 10px;
    font-size: var(--fs-xs);
  }

  .theme-toggle {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 360px) {
  .nav-inner {
    gap: var(--sp-2);
  }

  .nav-link {
    padding: 8px;
  }
}

/* 尊重系统「减少动态效果」设置 */
@media (prefers-reduced-motion: reduce) {
  .navbar,
  .navbar::after,
  .nav-brand,
  .nav-avatar,
  .nav-link,
  .nav-link::after,
  .theme-toggle {
    transition-duration: 0.01ms;
  }

  .theme-toggle:hover,
  .theme-toggle:active,
  .nav-link:active {
    transform: none;
  }
}
</style>
