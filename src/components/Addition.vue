<template>
  <div>
    <h4>count的值为：{{ $store.state.count }}</h4>
    <button @click="btnAdd">加</button>
    <button @click="btnAddAsync">异步加5</button>

    <h4>{{ $store.getters.filterList }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data() {
    return {}
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    btnAdd() {
      this.$store.commit('add', 10)
    },
    btnAddAsync() {
      this.$store.dispatch('addAsync', 5)
    },
  },
}
</script>