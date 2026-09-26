import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = ["width", "height", "stroke-width"]
const _hoisted_2 = ["d"]

import { computed } from 'vue'

const TARGET_PX = 1.75


export default {
  __name: 'AppIcon',
  props: {
  /** 图标名称，取值见下方 ICONS 注册表 */
  name: { type: String, required: true },
  /** 渲染尺寸（px），建议 16 / 18 / 20 / 24 */
  size: { type: [Number, String], default: 18 },
  /**
   * 描边粗细（24 网格单位）。默认不传时按「渲染后恒定 1.5px」反算，
   * 保证 16 / 18 / 20 / 24 各尺寸下实际线宽一致，避免小图标描边过细发虚。
   */
  strokeWidth: { type: [Number, String], default: null }
},
  setup(__props) {

const props = __props

const resolvedStroke = computed(() => {
  if (props.strokeWidth !== null && props.strokeWidth !== '') return props.strokeWidth
  return Number(((TARGET_PX * 24) / Number(props.size)).toFixed(2))
})

// 全部图标统一 24×24 网格 + 线性描边风格，路径均为纯 path（无 circle / rect），
// 以保证描边粗细随尺寸等比缩放，不会出现发虚或过细。
const ICONS = {
  github: [
    'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
    'M9 18c-4.51 2-5-2-7-2'
  ],
  mail: [
    'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
    'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'
  ],
  'external-link': [
    'M15 3h6v6',
    'M10 14 21 3',
    'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
  ],
  'chevron-up': ['m18 15-6-6-6 6'],
  sun: [
    'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
    'M12 2v2',
    'M12 20v2',
    'm4.93 4.93 1.41 1.41',
    'm17.66 17.66 1.41 1.41',
    'm19.07 4.93-1.41 1.41',
    'm6.34 17.66-1.41 1.41',
    'M2 12h2',
    'M20 12h2'
  ],
  moon: ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'],
  house: [
    'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8',
    'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z'
  ],
  ticket: [
    'M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z',
    'M13 5v2',
    'M13 17v2',
    'M13 11v2'
  ],
  calendar: [
    'M8 2v4',
    'M16 2v4',
    'M3 10h18',
    'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z'
  ],
  compass: [
    'M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20Z',
    'm16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z'
  ],
  code: ['m18 16 4-4-4-4', 'm6 8-4 4 4 4', 'm14.5 4-5 16'],
  tag: [
    'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z',
    'M7.5 7.5h.01'
  ],
  user: [
    'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2',
    'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
  ],
  heart: [
    'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'
  ],
  'book-open': [
    'M12 7v14',
    'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'
  ],
  star: [
    'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.71a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.695a.53.53 0 0 1 .294-.904l5.165-.755a2.122 2.122 0 0 0 1.597-1.16Z'
  ]
}

const paths = computed(() => ICONS[props.name] || [])

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("svg", {
    class: "icon",
    width: __props.size,
    height: __props.size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": resolvedStroke.value,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true",
    focusable: "false"
  }, [
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(paths.value, (d, i) => {
      return (_openBlock(), _createElementBlock("path", {
        key: i,
        d: d
      }, null, 8 /* PROPS */, _hoisted_2))
    }), 128 /* KEYED_FRAGMENT */))
  ], 8 /* PROPS */, _hoisted_1))
}
}

}