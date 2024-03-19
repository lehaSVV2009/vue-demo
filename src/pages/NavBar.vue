<template>
  <v-layout>
    <v-app-bar :elevation="2">
      <v-app-bar-title @click="$router.push('/')">My Posts</v-app-bar-title>
      <template v-slot:append>
        <v-btn @click="$router.push('/vuex-posts')">Vuex Posts</v-btn>
        <v-btn @click="$router.push('/vue3-posts')">Vue3 Posts</v-btn>
        <v-btn @click="$router.push('/about')">About</v-btn>
      </template>
    </v-app-bar>
  </v-layout>
</template>

<script>
export default {};
</script>

<style scoped>
</style>