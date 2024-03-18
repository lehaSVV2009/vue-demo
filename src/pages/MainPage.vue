<template>
  <vue-viewport>
    <h1>Vue Posts Demo</h1>
    <v-btn v-if="$store.state.auth.isLoggedIn" @click="logout">Logout</v-btn>
    <v-btn v-else @click="login">Login</v-btn>
  </vue-viewport>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.commit('auth/login')
    },
    logout() {
      this.$store.commit('auth/logout')
    },
  },
};
</script>

<style>
</style>