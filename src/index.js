import BadgerAccordion from './components/BadgerAccordion.vue'
import BadgerAccordionItem from './components/BadgerAccordionItem.vue'

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('BadgerAccordion', BadgerAccordion)
  Vue.component('BadgerAccordionItem', BadgerAccordionItem)
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default { BadgerAccordion, BadgerAccordionItem }
