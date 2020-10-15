import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/index.js',
  output: {
    name: 'VueBadgerAccordion',
    format: 'esm',
    file: 'dist/vue-badger-accordion.js',
    exports: 'named'
  },
  external: ['core-js', 'badger-accordion', 'vue'],
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    scss(),
    babel({ babelHelpers: 'bundled' })
  ]
}
