<template>
  <div>
    <h4>count的值为：{{ count }}</h4>
    <button @click="sub(2)">减</button>
    <button @click="subAsync(1)">异步减1</button>

    <h4>{{ filterList }}</h4>
  </div>
</template>

<script>
/**
 * mapState => 将state中的数据映射为当前组件的计算属性
 * mapMutations => 将mutations中的方法映射为当前组件的方法
 * mapActions => 将actions中的方法映射为当前组件的方法
 * mapGetters => 将getters中的数据映射为当前组件的计算属性
 */
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Sub',
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['filterList']),
  },
  methods: {
    // 思考：如何传参
    ...mapMutations(['sub']),
    ...mapActions(['subAsync']),

    // btnSub() {
    //   this.sub(2)
    // },
  },
}
</script>