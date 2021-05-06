import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * state 数据源
 * mutations 变更数据
 * actions 处理异步任务
 * getters 拷贝state中的数据 => 新数据（响应式）
 */
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // add(state) {
    //   state.count ++
    // },
    // sub(state) {
    //   state.count--
    // }
  },
  actions: {
    // addAsync(context) {
    //   setTimeout(() => {
    //     context.commit('add')
    //   }, 1000)
    // }
  },
  getters:{
    showCount: state => {
      return state.count+=8
    }
  },
  modules: {
  }
})
