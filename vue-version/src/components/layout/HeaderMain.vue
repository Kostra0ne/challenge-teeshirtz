<template>
  <header id="header-main">
    <Logo brand="IronShoppaz" />
    <NavMain />
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
import NavMain from '@/components/layout/NavMain.vue'

export default {
  components: {
    Logo,
    NavMain
  }
}
</script>

<style scoped>
#header-main {
  align-items: center;
  background: #000000eb;
  border-bottom-right-radius: 0.2rem;
  display: flex;
  grid-column: 1 / 13;
  height: 80px;
  justify-content: space-between;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
