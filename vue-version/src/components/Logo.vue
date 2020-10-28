<template>
  <router-link to="/" id="logo">{{ brand || 'Fake Shop' }}</router-link>
</template>

<script>
export default {
  props: {
    brand: String
  }
}
</script>

<style scoped>
#logo {
  font-size: 2rem;
  color: whitesmoke;
  text-decoration: none;
}
</style>
