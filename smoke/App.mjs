import { createVNode as _createVNode, resolveDynamicComponent as _resolveDynamicComponent, openBlock as _openBlock, createBlock as _createBlock, Transition as _Transition, withCtx as _withCtx, resolveComponent as _resolveComponent, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, unref as _unref, toDisplayString as _toDisplayString, createStaticVNode as _createStaticVNode, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { class: "app" }
const _hoisted_2 = { class: "site-footer" }
const _hoisted_3 = { class: "footer-inner" }
const _hoisted_4 = { class: "container" }
const _hoisted_5 = { class: "footer-bottom" }

import NavBar from './NavBar.mjs'


export default {
  __name: 'App',
  setup(__props) {

const year = new Date().getFullYear()

return (_ctx, _cache) => {
  const _component_router_view = _resolveComponent("router-view")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(NavBar),
    _createElementVNode("main", null, [
      _createVNode(_component_router_view, null, {
        default: _withCtx(({ Component }) => [
          _createVNode(_Transition, {
            name: "fade",
            mode: "out-in"
          }, {
            default: _withCtx(() => [
              (_openBlock(), _createBlock(_resolveDynamicComponent(Component)))
            ]),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _createElementVNode("footer", _hoisted_2, [
      _cache[2] || (_cache[2] = _createElementVNode("div", {
        class: "footer-strip",
        "aria-hidden": "true"
      }, null, -1 /* CACHED */)),
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("div", _hoisted_4, [
          _cache[1] || (_cache[1] = _createStaticVNode("<div class=\"ad-banner\"><div class=\"ad-label\">Advertisement</div><div class=\"ad-title\">广告位招租</div><div class=\"ad-contact\"> 联系邮箱: <a href=\"mailto:logist1024@hotmail.com\">logist1024@hotmail.com</a></div></div><div class=\"footer-links\"><div class=\"link-group\"><span class=\"link-group-label\">友情链接</span><a class=\"footer-link footer-link--blue\" href=\"https://h-s.tech/\" target=\"_blank\" rel=\"noopener noreferrer\">HIGHLIGHT Studio</a></div><div class=\"link-group\"><span class=\"link-group-label\">推广链接</span><a class=\"footer-link footer-link--green\" href=\"https://www.rainyun.com/MTI0MjEyNw==\" target=\"_blank\" rel=\"noopener noreferrer\">雨云</a></div></div>", 2)),
          _createElementVNode("div", _hoisted_5, [
            _createElementVNode("span", null, "© " + _toDisplayString(_unref(year)) + " Logist · Vue 3 + Vite 构建", 1 /* TEXT */),
            _cache[0] || (_cache[0] = _createElementVNode("span", { class: "footer-motto" }, "If you don't know the meaning of living, try to create it.", -1 /* CACHED */))
          ])
        ])
      ])
    ])
  ]))
}
}

}