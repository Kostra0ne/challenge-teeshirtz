<template>
  <div id="filter-reset" class="filter">
    <button class="btn" @click="$store.commit('products/setInitialProducts')">
      reset all
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterReset'
}
</script>

<style scoped>
.btn {
  height: 32px;
  width: 120px;
  padding: 10px;
  border: 1px dashed;
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
