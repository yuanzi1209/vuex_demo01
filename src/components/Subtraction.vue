<template>
  <div>
    <h4>count的值为：{{ count }}</h4>
    <button @click="subHandle">减</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  /* 将全局数据映射为当前组件的计算属性 */
  computed: {
    ...mapState(['count']),
  },
  methods:{
      ...mapMutations(['sub']),
      subHandle(){
          this.sub()
      }
  }
}
</script>