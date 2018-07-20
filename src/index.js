import jiangSwitch from './packages/jiang-switch'

const components = [
  jiangSwitch
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 支持使用標籤的方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {install}