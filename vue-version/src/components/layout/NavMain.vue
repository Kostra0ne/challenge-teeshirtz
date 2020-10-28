<template>
  <nav id="nav-main">
    <router-link to="/">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
</template>

<style scoped>
#nav-main a {
  font-weight: bold;
  color: inherit;
  margin-right: 10px;
  text-decoration: none;
}

#nav-main a.router-link-exact-active {
  color: #0175ff;
}
</style>
