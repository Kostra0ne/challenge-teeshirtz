<template>
  <div id="filter-price" class="filter">
    <h2 class="title">mula</h2>
    <div class="wrap">
      <input
        type="range"
        @input="$store.commit('products/setMaxPrice', currentSelectedPrice)"
        v-model="currentSelectedPrice"
        :min="minPrice"
        :max="maxPrice"
      />
      <b>{{ currentSelectedPrice }}&euro;</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterPrice',
  data() {
    return {
      currentSelectedPrice: this.$store.getters['products/maxPrice']
    }
  },
  computed: {
    minPrice() {
      return this.$store.getters['products/minPrice']
    },
    maxPrice() {
      return this.$store.getters['products/maxPrice']
    }
  }
}
</script>

<style scoped>
#filter-price .wrap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
