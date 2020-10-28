<template>
  <li class="product">
    <h3 class="name">{{ product.name }}</h3>
    <h4 class="brand">
      <i class="design">design by</i> <b>{{ product.brand }}</b>
    </h4>
    <img
      class="image"
      :src="require(`@/assets/${product.image}`)"
      :alt="`image for ${product.name}`"
    />
    <span class="price">{{ product.price }} &euro;</span>
  </li>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 40px 1fr 20px;
  grid-row-gap: 10px;
  box-shadow: 0px 0.7px 1.9px black;
  border-radius: 0.2rem;
  padding: 16px;
}

.name {
  font-weight: bolder;
  grid-column: 1 / 3;
  margin: 0;
}

.design {
  font-size: 0.8rem;
}

.brand {
  text-align: left;
  grid-row: 3 / 4;
  grid-column: 1 / 4;
  margin: 0;
}

.price {
  grid-column: 4 / 5;
  text-align: right;
}

.image {
  grid-column: 1 / 5;
  max-width: 70%;
  display: block;
  margin: 0 auto;
}
</style>
