import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { parse, compileScript } from '@vue/compiler-sfc'
import postcss from 'postcss'

const ROOT = resolve('..')
const OUT = resolve('.')

/** 把 SFC 编译成可在 Node 里直接 import 的 ESM（模板内联进 render） */
function compileSfc(relPath, id) {
  const filename = resolve(ROOT, relPath)
  const source = readFileSync(filename, 'utf-8')
  const { descriptor, errors } = parse(source, { filename })
  if (errors.length) throw new Error(`${relPath} 解析失败:\n${errors.map(e => e.message).join('\n')}`)

  const compiled = compileScript(descriptor, { id, inlineTemplate: true })
  let code = compiled.content
  // 把 .vue 的 import 改写到编译产物
  code = code.replace(/from ['"](\.{1,2}\/[^'"]+)\.vue['"]/g, (_, p) => {
    const name = p.split('/').pop()
    return `from './${name}.mjs'`
  })

  const outName = relPath.split('/').pop().replace(/\.vue$/, '') + '.mjs'
  const outPath = resolve(OUT, outName)
  writeFileSync(outPath, code, 'utf-8')
  return outName
}

mkdirSync(OUT, { recursive: true })

const files = [
  ['src/components/AppIcon.vue', 'icon'],
  ['src/components/NavBar.vue', 'nav'],
  ['src/views/About.vue', 'about'],
  ['src/views/Home.vue', 'home'],
  ['src/App.vue', 'app']
]
const outputs = {}
for (const [p, id] of files) outputs[p] = compileSfc(p, id)
console.log('[compile] SFC 全部编译通过:', Object.values(outputs).join(', '))

// ---- CSS 语法校验 ----
const css = readFileSync(resolve(ROOT, 'src/assets/main.css'), 'utf-8')
postcss.parse(css, { from: 'main.css' })
console.log('[css] main.css 解析通过,', css.split('\n').length, '行')

// ---- SSR 渲染 About 页，核对内容完整性 ----
const { createSSRApp } = await import('vue')
const { renderToString } = await import('vue/server-renderer')
const About = (await import('./About.mjs')).default
const html = await renderToString(createSSRApp(About))

const must = [
  '关于我',
  '一名喜欢代码但是能力不足，一边用AI开发项目一边深入学习的高中生。',
  '爱好', '计算机', 'AI', '网站', 'Minecraft', 'Counter-Strike',
  '在学习', '高中的学校知识😭', 'AI Agents', 'Java',
  '梦想', '有点小成就',
  '联系我', 'logist1024@hotmail.com', 'github.com/Logist1024'
]
const missing = must.filter(s => !html.includes(s))
console.log('[ssr] About 渲染长度', html.length, missing.length ? `缺失: ${missing.join(' | ')}` : '内容全部保留 ✅')
if (missing.length) process.exitCode = 1

// 网格区域类名是否都落地
const gridAreas = ['about-card--intro', 'about-card--dream', 'about-card--hobby', 'about-card--learning', 'about-card--contact']
console.log('[ssr] 卡片区块:', gridAreas.map(c => `${c}=${html.includes(c) ? '✓' : '✗'}`).join(' '))
