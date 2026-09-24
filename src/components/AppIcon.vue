<template>
  <svg
    class="icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="resolvedStroke"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** 图标名称，取值见下方 ICONS 注册表 */
  name: { type: String, required: true },
  /** 渲染尺寸（px），建议 16 / 18 / 20 / 24 */
  size: { type: [Number, String], default: 18 },
  /**
   * 描边粗细（24 网格单位）。默认不传时按「渲染后恒定 1.5px」反算，
   * 保证 16 / 18 / 20 / 24 各尺寸下实际线宽一致，避免小图标描边过细发虚。
   */
  strokeWidth: { type: [Number, String], default: null }
})

const TARGET_PX = 1.75

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
  ]
}

const paths = computed(() => ICONS[props.name] || [])
</script>
