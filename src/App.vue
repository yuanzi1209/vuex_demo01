<template>
  <div>
    <my-addition></my-addition>
    <p>---分割线---</p>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition'
import Subtraction from './components/Subtraction'

export default {
  data() {
    return {}
  },
  /* 把Addition注册为 App 的子组件 */
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction,
  },
}
</script>

<style>
</style>
