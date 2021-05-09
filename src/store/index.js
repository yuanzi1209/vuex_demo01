import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * state 数据源
 * mutations 变更数据（同步、唯一变更数据的地方）
 * actions 处理异步任务
 * getters 拷贝state中的数据 => 新数据（响应式）
 */
const store = new Vuex.Store({
  state: {
    count: 0,
    list: [1, 3, 5, 7, 9]
  },
  mutations: {
    add(state, p) {
      state.count += p
    },
    sub(state, pp) {
      state.count -= pp
    }
  },
  actions: {
    addAsync({ commit }, p) {
      setTimeout(() => {
        commit('add', p)
      }, 1000)
    },
    subAsync({ commit }, pp) {
      setTimeout(() => {
        commit('sub', pp)
      }, 3000)
    }
  },
  getters: {
    filterList(state) {
      return state.list.filter(item => item > 5)
    }
  },
  modules: {
  }
})

export default store
