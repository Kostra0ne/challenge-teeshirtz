<template>
  <ul id="products-grid" v-if="products.length">
    <Product v-for="(product, p) in products" :key="p" :product="product" />
  </ul>
  <p v-else>
    We're sorry, no product available for your query
  </p>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  name: 'ProductGrid',
  components: {
    Product
  },
  props: {
    products: Array
  }
}
</script>

<style lang="scss" scoped>
#products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
