import Vue from 'vue'
import App from './App.vue'

// 导入 vuex
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 把 store 实例挂载到全局 => 所有组件身上会自动添加一个$store
  store,
  render: h => h(App)
}).$mount('#app')
