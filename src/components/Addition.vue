<template>
  <div>
    <h4>count的值为：{{ this.$store.getters.showCount }}</h4>
    <button @click="addhandle">加</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    // ...mapActions(['addAsync']),
    addhandle() {
      // this.$store.commit('add',5)
      // this.$store.dispatch('addAsync',2)
      //   this.addAsync()
    },
  },
}
</script>