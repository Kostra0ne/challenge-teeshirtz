<template>
  <div id="app">
    <HeaderMain />
    <router-view />
  </div>
</template>

<script>
import HeaderMain from "@/components/layout/HeaderMain.vue";

export default {
  name: "App",
  components: {
    HeaderMain
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  background: whitesmoke;
}

input[type="range"],
input[type="checkbox"] {
  margin-right: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: repeat(12, 1fr);
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  border-left: 1px solid;
}

.page {
  position: relative;
  padding: 20px 0 60px 20px;
  grid-column: 1 / 13;
  grid-row: 2 / 3;
  display: grid;
  grid-gap: 20px;
}
</style>
