<template>
  <aside id="sidebar-main">
    <FilterReset />
    <FilterPrice />
    <FilterBrand />
    <FilterColor />
  </aside>
</template>

<script>
import FilterBrand from '@/components/FilterBrand.vue'
import FilterColor from '@/components/FilterColor.vue'
import FilterPrice from '@/components/FilterPrice.vue'
import FilterReset from '@/components/FilterReset.vue'

export default {
  components: {
    FilterColor,
    FilterBrand,
    FilterPrice,
    FilterReset
  }
}
</script>

<style>
#sidebar-main {
  border-right: 1px dashed;
  padding-right: 20px;
  position: sticky;
  top: 100px;
  grid-column: 1 / 2;
  height: min-content;
}

#sidebar-main > * {
  border-bottom: 1px dashed;
  padding: 10px 0;
}

.filter .title {
  margin-bottom: 5px;
  font-size: 1.25rem;
}
</style>
