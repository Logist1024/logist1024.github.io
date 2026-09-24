<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }" aria-label="主导航">
    <div class="container nav-inner">
      <router-link to="/" class="nav-brand">
        <img src="https://github.com/Logist1024.png" alt="Logist" class="nav-avatar" />
        <span class="nav-name">Logist</span>
      </router-link>

      <div class="nav-links">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/about" class="nav-link">关于</router-link>

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
  isScrolled.value = window.scrollY > 20
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
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* ============================================================
   顶部栏样式 —— 仅作用于本组件（scoped）
   颜色一律取自 main.css 的主题令牌，明暗自动跟随，不写死任何颜色
   ============================================================ */
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  height: var(--nav-height);
  z-index: 100;
  /* 双层：顶部紫色光晕（呼应 hero 光晕）+ 主题磨砂底 */
  background-image:
    radial-gradient(120% 220% at 50% -120%, var(--glow-purple), transparent 65%),
    linear-gradient(180deg, var(--nav-bg-top), var(--nav-bg-bottom));
  backdrop-filter: var(--nav-blur);
  -webkit-backdrop-filter: var(--nav-blur);
  border-bottom: 1px solid transparent;
  transition: background-image var(--transition), box-shadow var(--transition),
    border-color var(--transition);
}

/* 吸顶后：底部露出一条居中的星光细线（紫→黄→紫），长度克制，不做满宽彩虹条 */
.navbar::after {
  content: '';
  position: absolute;
  left: 32%;
  right: 32%;
  bottom: 0;
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
  transition: opacity var(--transition);
}

.navbar.scrolled {
  background-image:
    radial-gradient(120% 220% at 50% -120%, var(--glow-purple), transparent 65%),
    linear-gradient(180deg, var(--nav-bg-top-scrolled), var(--nav-bg-bottom-scrolled));
  border-bottom-color: var(--border);
  box-shadow: 0 6px 18px var(--glow-purple), var(--elevation-1);
}

.navbar.scrolled::after {
  opacity: 0.7;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);
  height: 100%;
}

/* ---------- 品牌区 ---------- */
.nav-brand {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  min-width: 0; /* 允许在窄屏收缩，避免溢出 */
  padding: var(--sp-1) var(--sp-2);
  margin-left: calc(-1 * var(--sp-2));
  border-radius: var(--r-full);
  font-size: var(--fs-md);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text-strong);
  text-decoration: none;
  transition: background var(--transition), color var(--transition);
}

.nav-brand:hover {
  color: var(--accent);
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
}

.nav-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ---------- 导航项 ---------- */
.nav-links {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  flex-shrink: 0;
}

.nav-link {
  padding: 9px 16px;
  border-radius: var(--r-full);
  font-size: var(--fs-sm);
  font-weight: 500; /* 固定字重：激活态不换字重，避免宽度抖动 */
  line-height: 1;
  white-space: nowrap;
  color: var(--text-soft);
  text-decoration: none;
  transition: color var(--transition), background var(--transition);
}

.nav-link:hover {
  color: var(--accent);
  background: var(--accent-soft);
  text-decoration: none;
}

/* 按下态 */
.nav-link:active {
  background: var(--accent-border);
  color: var(--accent-hover);
}

/* 当前页：靠底色 + 主色区分，不改字重、不改尺寸，避免布局抖动 */
.nav-link.router-link-exact-active {
  color: var(--accent);
  background: var(--accent-soft);
}

.nav-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* 禁用态（预留：未来有不可用入口时直接挂 is-disabled 即可） */
.nav-link.is-disabled,
.nav-link[aria-disabled='true'] {
  color: var(--text-muted);
  background: transparent;
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
}

/* ---------- 主题切换按钮 ---------- */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: var(--sp-2);
  border-radius: var(--r-full);
  border: 1px solid var(--accent-border);
  background: var(--btn-outline-bg);
  color: var(--accent);
  cursor: pointer;
  flex-shrink: 0;
  transition: color var(--transition), background var(--transition),
    border-color var(--transition), transform var(--transition),
    box-shadow var(--transition);
}

.theme-toggle:hover {
  color: var(--accent-hover);
  background: var(--accent-soft);
  border-color: var(--accent);
  transform: rotate(-12deg);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.theme-toggle:active {
  transform: rotate(-12deg) scale(0.94);
  background: var(--accent-border);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.theme-toggle:disabled {
  color: var(--text-muted);
  background: var(--bg-subtle);
  border-color: var(--border);
  opacity: 0.55;
  cursor: not-allowed;
}

/* ============================================================
   响应式：逐级收紧，任何断点都不改变顶部栏高度
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

/* 窄屏折叠策略：先收起品牌文字，保证导航项与操作按钮始终完整可见 */
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
  .nav-link,
  .theme-toggle {
    transition-duration: 0.01ms;
  }

  .theme-toggle:hover,
  .theme-toggle:active {
    transform: none;
  }
}
</style>
