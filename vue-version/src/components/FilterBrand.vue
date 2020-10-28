<template>
  <div id="filter-brand" class="filter">
    <h2 class="title">brandz</h2>
    <ul class="list">
      <li v-for="(brand, b) in brands" :key="b">
        <input
          type="checkbox"
          :id="brand"
          :value="brand"
          :checked="selected.includes(brand)"
          @input="
            $store.commit('products/setSelectedBrands', $event.target.value)
          "
        />
        <label class="label" :for="brand">{{ brand }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterBrand',
  computed: {
    brands() {
      return this.$store.getters['products/brands']
    },
    selected() {
      return this.$store.getters['products/selectedBrands']
    }
  }
}
</script>

<style scoped>
#filter-brand .list {
  list-style: none;
  padding: 0;
}
#filter-brand .label {
  cursor: pointer;
}
</style>
