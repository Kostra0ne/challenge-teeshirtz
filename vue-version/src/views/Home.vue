<template>
  <div id="page-shop" class="page">
    <Sidebar />
    <main id="content">
      <ProductsGrid :products="$store.getters['products/all']" />
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue'
import ProductsGrid from '@/components/ProductsGrid.vue'

export default {
  name: 'Home',
  components: {
    ProductsGrid,
    Sidebar
  }
}
</script>

<style scoped>
#page-shop {
  grid-template-columns: 200px 1fr;
}
#content {
  grid-column: 2 / 3;
}
</style>
