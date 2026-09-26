import { createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, createVNode as _createVNode, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, withCtx as _withCtx, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createStaticVNode as _createStaticVNode } from "vue"

const _hoisted_1 = { class: "home" }
const _hoisted_2 = { class: "hero" }
const _hoisted_3 = { class: "container" }
const _hoisted_4 = { class: "hero-card" }
const _hoisted_5 = { class: "hero-main" }
const _hoisted_6 = { class: "hero-body" }
const _hoisted_7 = { class: "hero-actions" }
const _hoisted_8 = {
  href: "https://github.com/Logist1024",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "btn btn-primary btn-lg"
}
const _hoisted_9 = {
  href: "mailto:logist1024@hotmail.com",
  class: "btn btn-secondary btn-lg"
}
const _hoisted_10 = { class: "hero-aside" }
const _hoisted_11 = { class: "aside-block" }
const _hoisted_12 = { class: "aside-label" }
const _hoisted_13 = { class: "aside-value" }
const _hoisted_14 = { class: "aside-sub" }
const _hoisted_15 = { class: "aside-block" }
const _hoisted_16 = { class: "aside-label" }
const _hoisted_17 = { class: "aside-nav" }
const _hoisted_18 = { class: "stats-bar" }
const _hoisted_19 = { class: "stat-item stat-item--blue" }
const _hoisted_20 = { class: "stat-icon" }
const _hoisted_21 = { class: "stat-text" }
const _hoisted_22 = { class: "stat-value" }
const _hoisted_23 = { class: "stat-item stat-item--yellow" }
const _hoisted_24 = { class: "stat-icon" }
const _hoisted_25 = { class: "stat-text" }
const _hoisted_26 = { class: "stat-value" }
const _hoisted_27 = { class: "stat-item stat-item--green" }
const _hoisted_28 = { class: "stat-icon" }
const _hoisted_29 = { class: "stat-text" }
const _hoisted_30 = { class: "stat-value" }
const _hoisted_31 = {
  class: "section",
  id: "projects"
}
const _hoisted_32 = { class: "container" }
const _hoisted_33 = { class: "section-head" }
const _hoisted_34 = { class: "section-title" }
const _hoisted_35 = { class: "section-count" }
const _hoisted_36 = { class: "project-grid" }
const _hoisted_37 = { class: "project-card-header" }
const _hoisted_38 = {
  class: "project-icon",
  "aria-hidden": "true"
}
const _hoisted_39 = {
  key: 0,
  class: "project-tags"
}
const _hoisted_40 = { class: "project-links" }
const _hoisted_41 = ["href"]
const _hoisted_42 = ["href"]

import { computed } from 'vue'
import AppIcon from './AppIcon.mjs'


export default {
  __name: 'Home',
  setup(__props) {

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

return (_ctx, _cache) => {
  const _component_router_link = _resolveComponent("router-link")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("section", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createCommentVNode(" 页眉信息卡：横向介绍（头像居左）+ 日期/导航侧栏 + 统计条 "),
        _createElementVNode("div", _hoisted_4, [
          _createElementVNode("div", _hoisted_5, [
            _cache[3] || (_cache[3] = _createElementVNode("div", { class: "hero-avatar" }, [
              _createElementVNode("img", {
                src: "https://github.com/Logist1024.png",
                alt: "Logist"
              })
            ], -1 /* CACHED */)),
            _createElementVNode("div", _hoisted_6, [
              _cache[2] || (_cache[2] = _createStaticVNode("<div class=\"hero-badges\"><span class=\"badge badge--yellow\"><span class=\"dot\"></span>欢迎来到我的主页</span><span class=\"badge badge--blue\">高中生 · 自学编程中</span></div><h1 class=\"hero-name\">Logist</h1><p class=\"hero-lead\"> 一名喜欢代码但是能力不足，一边用AI开发项目一边深入学习的高中生。 </p><ul class=\"hero-tags\"><li class=\"tag tag--purple\">Vue 3</li><li class=\"tag tag--blue\">Java</li><li class=\"tag tag--green\">Minecraft</li><li class=\"tag tag--yellow\">AI Agents</li></ul>", 4)),
              _createElementVNode("div", _hoisted_7, [
                _createElementVNode("a", _hoisted_8, [
                  _createVNode(AppIcon, {
                    name: "github",
                    size: 20
                  }),
                  _cache[0] || (_cache[0] = _createTextVNode(" GitHub ", -1 /* CACHED */))
                ]),
                _createElementVNode("a", _hoisted_9, [
                  _createVNode(AppIcon, {
                    name: "mail",
                    size: 20
                  }),
                  _cache[1] || (_cache[1] = _createTextVNode(" 发邮件给我 ", -1 /* CACHED */))
                ])
              ])
            ])
          ]),
          _createElementVNode("aside", _hoisted_10, [
            _createElementVNode("div", _hoisted_11, [
              _createElementVNode("span", _hoisted_12, [
                _createVNode(AppIcon, {
                  name: "calendar",
                  size: 15
                }),
                _cache[4] || (_cache[4] = _createTextVNode("今天", -1 /* CACHED */))
              ]),
              _createElementVNode("span", _hoisted_13, _toDisplayString(today.date), 1 /* TEXT */),
              _createElementVNode("span", _hoisted_14, _toDisplayString(today.weekday) + " · UTC+8", 1 /* TEXT */)
            ]),
            _cache[9] || (_cache[9] = _createElementVNode("span", {
              class: "aside-divider",
              "aria-hidden": "true"
            }, null, -1 /* CACHED */)),
            _createElementVNode("div", _hoisted_15, [
              _createElementVNode("span", _hoisted_16, [
                _createVNode(AppIcon, {
                  name: "compass",
                  size: 15
                }),
                _cache[5] || (_cache[5] = _createTextVNode("快速导航", -1 /* CACHED */))
              ]),
              _createElementVNode("nav", _hoisted_17, [
                _createVNode(_component_router_link, { to: "/" }, {
                  default: _withCtx(() => [
                    _createVNode(AppIcon, {
                      name: "house",
                      size: 16
                    }),
                    _cache[6] || (_cache[6] = _createTextVNode(" 首页 ", -1 /* CACHED */))
                  ]),
                  _: 1 /* STABLE */
                }),
                _createVNode(_component_router_link, { to: "/about" }, {
                  default: _withCtx(() => [
                    _createVNode(AppIcon, {
                      name: "user",
                      size: 16
                    }),
                    _cache[7] || (_cache[7] = _createTextVNode(" 关于我 ", -1 /* CACHED */))
                  ]),
                  _: 1 /* STABLE */
                }),
                _createElementVNode("button", {
                  type: "button",
                  onClick: scrollToProjects
                }, [
                  _createVNode(AppIcon, {
                    name: "code",
                    size: 16
                  }),
                  _cache[8] || (_cache[8] = _createTextVNode(" 项目列表 ", -1 /* CACHED */))
                ])
              ])
            ])
          ]),
          _createElementVNode("div", _hoisted_18, [
            _createElementVNode("div", _hoisted_19, [
              _createElementVNode("span", _hoisted_20, [
                _createVNode(AppIcon, {
                  name: "code",
                  size: 18
                })
              ]),
              _createElementVNode("span", _hoisted_21, [
                _createElementVNode("span", _hoisted_22, _toDisplayString(projects.length), 1 /* TEXT */),
                _cache[10] || (_cache[10] = _createElementVNode("span", { class: "stat-label" }, "开源项目", -1 /* CACHED */))
              ])
            ]),
            _createElementVNode("div", _hoisted_23, [
              _createElementVNode("span", _hoisted_24, [
                _createVNode(AppIcon, {
                  name: "tag",
                  size: 18
                })
              ]),
              _createElementVNode("span", _hoisted_25, [
                _createElementVNode("span", _hoisted_26, _toDisplayString(tagCount.value), 1 /* TEXT */),
                _cache[11] || (_cache[11] = _createElementVNode("span", { class: "stat-label" }, "技术标签", -1 /* CACHED */))
              ])
            ]),
            _createElementVNode("div", _hoisted_27, [
              _createElementVNode("span", _hoisted_28, [
                _createVNode(AppIcon, {
                  name: "external-link",
                  size: 18
                })
              ]),
              _createElementVNode("span", _hoisted_29, [
                _createElementVNode("span", _hoisted_30, _toDisplayString(demoCount.value), 1 /* TEXT */),
                _cache[12] || (_cache[12] = _createElementVNode("span", { class: "stat-label" }, "在线站点", -1 /* CACHED */))
              ])
            ])
          ])
        ])
      ])
    ]),
    _createElementVNode("section", _hoisted_31, [
      _createElementVNode("div", _hoisted_32, [
        _createElementVNode("header", _hoisted_33, [
          _cache[15] || (_cache[15] = _createElementVNode("span", { class: "section-eyebrow" }, "Projects", -1 /* CACHED */)),
          _createElementVNode("h2", _hoisted_34, [
            _cache[14] || (_cache[14] = _createTextVNode(" 开源项目 ", -1 /* CACHED */)),
            _createElementVNode("span", _hoisted_35, [
              _cache[13] || (_cache[13] = _createElementVNode("span", { class: "dot" }, null, -1 /* CACHED */)),
              _createTextVNode("共 " + _toDisplayString(projects.length) + " 个", 1 /* TEXT */)
            ])
          ])
        ]),
        _createElementVNode("div", _hoisted_36, [
          (_openBlock(), _createElementBlock(_Fragment, null, _renderList(projects, (project) => {
            return _createElementVNode("article", {
              key: project.name,
              class: "project-card"
            }, [
              _createElementVNode("div", _hoisted_37, [
                _createElementVNode("div", _hoisted_38, [
                  _createVNode(AppIcon, {
                    name: project.icon,
                    size: 20
                  }, null, 8 /* PROPS */, ["name"])
                ]),
                _createElementVNode("h3", null, _toDisplayString(project.name), 1 /* TEXT */)
              ]),
              _createElementVNode("p", null, _toDisplayString(project.description), 1 /* TEXT */),
              (project.tags)
                ? (_openBlock(), _createElementBlock("div", _hoisted_39, [
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(project.tags, (tag) => {
                      return (_openBlock(), _createElementBlock("span", {
                        key: tag,
                        class: "chip"
                      }, _toDisplayString(tag), 1 /* TEXT */))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]))
                : _createCommentVNode("v-if", true),
              _createElementVNode("div", _hoisted_40, [
                _createElementVNode("a", {
                  href: project.github,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  _createVNode(AppIcon, {
                    name: "github",
                    size: 18
                  }),
                  _cache[16] || (_cache[16] = _createTextVNode(" 源码 ", -1 /* CACHED */))
                ], 8 /* PROPS */, _hoisted_41),
                (project.demo)
                  ? (_openBlock(), _createElementBlock("a", {
                      key: 0,
                      href: project.demo,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, [
                      _createVNode(AppIcon, {
                        name: "external-link",
                        size: 18
                      }),
                      _cache[17] || (_cache[17] = _createTextVNode(" 在线访问 ", -1 /* CACHED */))
                    ], 8 /* PROPS */, _hoisted_42))
                  : _createCommentVNode("v-if", true)
              ])
            ])
          }), 64 /* STABLE_FRAGMENT */))
        ])
      ])
    ])
  ]))
}
}

}