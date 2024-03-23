<template>
  <vue-viewport>
    <h1>Vue Posts Demo</h1>
    <div>App to learn vue basics (vuex, vuetify, vue3)</div>
    <v-btn v-if="$store.state.auth.isLoggedIn" @click="logout">Logout</v-btn>
    <v-btn v-else @click="login">Login</v-btn>
  </vue-viewport>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.commit("auth/login");
      this.$router.push('/vuex-posts');
    },
    logout() {
      this.$store.commit("auth/logout");
    },
  },
};
</script>

<style>
</style>