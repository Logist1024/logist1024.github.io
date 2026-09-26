import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { class: "container nav-inner" }
const _hoisted_2 = { class: "nav-links" }
const _hoisted_3 = ["title", "aria-label", "aria-pressed"]

import { ref, onMounted, onUnmounted } from 'vue'
import AppIcon from './AppIcon.mjs'


export default {
  __name: 'NavBar',
  setup(__props) {

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

return (_ctx, _cache) => {
  const _component_router_link = _resolveComponent("router-link")

  return (_openBlock(), _createElementBlock("nav", {
    class: _normalizeClass(["navbar", { scrolled: isScrolled.value }]),
    "aria-label": "主导航"
  }, [
    _createElementVNode("div", _hoisted_1, [
      _createVNode(_component_router_link, {
        to: "/",
        class: "nav-brand"
      }, {
        default: _withCtx(() => [...(_cache[0] || (_cache[0] = [
          _createElementVNode("img", {
            src: "https://github.com/Logist1024.png",
            alt: "Logist",
            class: "nav-avatar"
          }, null, -1 /* CACHED */),
          _createElementVNode("span", { class: "nav-name" }, "Logist", -1 /* CACHED */)
        ]))]),
        _: 1 /* STABLE */
      }),
      _createElementVNode("div", _hoisted_2, [
        _createVNode(_component_router_link, {
          to: "/",
          class: "nav-link nav-link--home"
        }, {
          default: _withCtx(() => [...(_cache[1] || (_cache[1] = [
            _createTextVNode("首页", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_router_link, {
          to: "/about",
          class: "nav-link nav-link--about"
        }, {
          default: _withCtx(() => [...(_cache[2] || (_cache[2] = [
            _createTextVNode("关于", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }),
        _createElementVNode("button", {
          class: "theme-toggle",
          type: "button",
          onClick: toggleTheme,
          title: isDark.value ? '切换到亮色模式' : '切换到暗色模式',
          "aria-label": isDark.value ? '切换到亮色模式' : '切换到暗色模式',
          "aria-pressed": isDark.value
        }, [
          _createVNode(AppIcon, {
            name: isDark.value ? 'sun' : 'moon',
            size: 18
          }, null, 8 /* PROPS */, ["name"])
        ], 8 /* PROPS */, _hoisted_3)
      ])
    ])
  ], 2 /* CLASS */))
}
}

}