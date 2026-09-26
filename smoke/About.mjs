import { createElementVNode as _createElementVNode, createCommentVNode as _createCommentVNode, createVNode as _createVNode, toDisplayString as _toDisplayString, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { class: "about-page" }
const _hoisted_2 = { class: "container" }
const _hoisted_3 = { class: "about-grid" }
const _hoisted_4 = { class: "about-card about-card--intro" }
const _hoisted_5 = { class: "card-head" }
const _hoisted_6 = {
  class: "card-icon",
  "aria-hidden": "true"
}
const _hoisted_7 = { class: "about-card about-card--dream" }
const _hoisted_8 = {
  class: "dream-mark",
  "aria-hidden": "true"
}
const _hoisted_9 = { class: "about-card about-card--hobby" }
const _hoisted_10 = { class: "card-head" }
const _hoisted_11 = {
  class: "card-icon",
  "aria-hidden": "true"
}
const _hoisted_12 = { class: "card-count" }
const _hoisted_13 = { class: "fact-list" }
const _hoisted_14 = { class: "about-card about-card--learning" }
const _hoisted_15 = { class: "card-head" }
const _hoisted_16 = {
  class: "card-icon",
  "aria-hidden": "true"
}
const _hoisted_17 = { class: "card-count" }
const _hoisted_18 = { class: "learn-list" }
const _hoisted_19 = { class: "learn-index" }
const _hoisted_20 = { class: "learn-text" }
const _hoisted_21 = { class: "about-card about-card--contact" }
const _hoisted_22 = { class: "card-head" }
const _hoisted_23 = {
  class: "card-icon",
  "aria-hidden": "true"
}
const _hoisted_24 = { class: "contact-grid" }
const _hoisted_25 = { class: "contact-card" }
const _hoisted_26 = { class: "contact-icon" }
const _hoisted_27 = { class: "contact-card contact-card--purple" }
const _hoisted_28 = { class: "contact-icon" }

import AppIcon from './AppIcon.mjs'


export default {
  __name: 'About',
  setup(__props) {

const hobbies = ['计算机', 'AI', '网站', 'Minecraft', 'Counter-Strike']
const learning = ['高中的学校知识😭', 'AI Agents', 'Java']

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("section", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _cache[9] || (_cache[9] = _createElementVNode("header", { class: "page-head" }, [
        _createElementVNode("span", { class: "section-eyebrow" }, "About"),
        _createElementVNode("h1", { class: "page-title" }, "关于我"),
        _createElementVNode("span", {
          class: "head-rule",
          "aria-hidden": "true"
        })
      ], -1 /* CACHED */)),
      _createCommentVNode(" Bento 网格：主卡(简介) / 重点卡(梦想) / 信息卡(爱好·在学习) / 功能卡(联系我) "),
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("article", _hoisted_4, [
          _createElementVNode("div", _hoisted_5, [
            _createElementVNode("span", _hoisted_6, [
              _createVNode(AppIcon, {
                name: "user",
                size: 20
              })
            ]),
            _cache[0] || (_cache[0] = _createElementVNode("span", { class: "card-eyebrow" }, "简介", -1 /* CACHED */))
          ]),
          _cache[1] || (_cache[1] = _createElementVNode("p", { class: "about-intro" }, " 一名喜欢代码但是能力不足，一边用AI开发项目一边深入学习的高中生。 ", -1 /* CACHED */))
        ]),
        _createElementVNode("article", _hoisted_7, [
          _createElementVNode("span", _hoisted_8, [
            _createVNode(AppIcon, {
              name: "star",
              size: 28
            })
          ]),
          _cache[2] || (_cache[2] = _createElementVNode("h2", { class: "dream-label" }, "梦想", -1 /* CACHED */)),
          _cache[3] || (_cache[3] = _createElementVNode("p", { class: "dream-text" }, "有点小成就", -1 /* CACHED */))
        ]),
        _createElementVNode("article", _hoisted_9, [
          _createElementVNode("div", _hoisted_10, [
            _createElementVNode("span", _hoisted_11, [
              _createVNode(AppIcon, {
                name: "heart",
                size: 20
              })
            ]),
            _cache[4] || (_cache[4] = _createElementVNode("h2", { class: "card-title" }, "爱好", -1 /* CACHED */)),
            _createElementVNode("span", _hoisted_12, _toDisplayString(hobbies.length), 1 /* TEXT */)
          ]),
          _createElementVNode("ul", _hoisted_13, [
            (_openBlock(), _createElementBlock(_Fragment, null, _renderList(hobbies, (item) => {
              return _createElementVNode("li", {
                key: item,
                class: "fact-chip"
              }, _toDisplayString(item), 1 /* TEXT */)
            }), 64 /* STABLE_FRAGMENT */))
          ])
        ]),
        _createElementVNode("article", _hoisted_14, [
          _createElementVNode("div", _hoisted_15, [
            _createElementVNode("span", _hoisted_16, [
              _createVNode(AppIcon, {
                name: "book-open",
                size: 20
              })
            ]),
            _cache[5] || (_cache[5] = _createElementVNode("h2", { class: "card-title" }, "在学习", -1 /* CACHED */)),
            _createElementVNode("span", _hoisted_17, _toDisplayString(learning.length), 1 /* TEXT */)
          ]),
          _createElementVNode("ol", _hoisted_18, [
            (_openBlock(), _createElementBlock(_Fragment, null, _renderList(learning, (item, index) => {
              return _createElementVNode("li", {
                key: item,
                class: "learn-item"
              }, [
                _createElementVNode("span", _hoisted_19, _toDisplayString(index + 1), 1 /* TEXT */),
                _createElementVNode("span", _hoisted_20, _toDisplayString(item), 1 /* TEXT */)
              ])
            }), 64 /* STABLE_FRAGMENT */))
          ])
        ]),
        _createElementVNode("section", _hoisted_21, [
          _createElementVNode("div", _hoisted_22, [
            _createElementVNode("span", _hoisted_23, [
              _createVNode(AppIcon, {
                name: "mail",
                size: 20
              })
            ]),
            _cache[6] || (_cache[6] = _createElementVNode("h2", { class: "card-title" }, "联系我", -1 /* CACHED */))
          ]),
          _createElementVNode("div", _hoisted_24, [
            _createElementVNode("div", _hoisted_25, [
              _createElementVNode("div", _hoisted_26, [
                _createVNode(AppIcon, {
                  name: "mail",
                  size: 20
                })
              ]),
              _cache[7] || (_cache[7] = _createElementVNode("div", null, [
                _createElementVNode("div", { class: "label" }, "邮箱"),
                _createElementVNode("a", {
                  class: "value",
                  href: "mailto:logist1024@hotmail.com"
                }, "logist1024@hotmail.com")
              ], -1 /* CACHED */))
            ]),
            _createElementVNode("div", _hoisted_27, [
              _createElementVNode("div", _hoisted_28, [
                _createVNode(AppIcon, {
                  name: "github",
                  size: 20
                })
              ]),
              _cache[8] || (_cache[8] = _createElementVNode("div", null, [
                _createElementVNode("div", { class: "label" }, "GitHub"),
                _createElementVNode("a", {
                  class: "value",
                  href: "https://github.com/Logist1024",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, "github.com/Logist1024")
              ], -1 /* CACHED */))
            ])
          ])
        ])
      ])
    ])
  ]))
}
}

}