<template>
  <div class="filter">
    <h2 class="title">colorz</h2>
    <ul id="filter-color" class="list-grid">
      <li
        class="color"
        :class="{ 'is-selected': selectedColors.includes(color) }"
        v-for="(color, c) in colors"
        :key="c"
        :style="{ background: color }"
        @click="$store.commit('products/setSelectedColors', color)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterColor',
  computed: {
    colors() {
      return this.$store.getters['products/colors']
    },
    selectedColors() {
      return this.$store.getters['products/selectedColors']
    }
  }
}
</script>

<style scoped>
.list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 20px);
  grid-auto-rows: 20px;
  grid-gap: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.color {
  cursor: pointer;
  border: 2px solid transparent;
}

.color.is-selected {
  border-color: #0175ff;
}
</style>
