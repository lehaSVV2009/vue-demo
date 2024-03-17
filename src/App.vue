<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './pages/NavBar.vue'
export default {
  components: { NavBar },
}
</script>

<style>
#app {
  margin: 15px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>