<template>
  <v-layout>
    <v-app-bar :elevation="2">
      <v-app-bar-title @click="$router.push('/')">My Posts</v-app-bar-title>
      <template v-if="$vuetify.display.mdAndUp" v-slot:append>
        <v-btn
          v-for="menuButton in menuButtons"
          :key="menuButton.url"
          @click="$router.push(menuButton.url)"
          >{{ menuButton.label }}</v-btn
        >
      </template>
      <template v-else v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props"> More </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="menuButton in menuButtons" :key="menuButton.url" @click="$router.push(menuButton.url)">
              <v-list-item-title>{{ menuButton.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
  </v-layout>
</template>

<script setup>
const menuButtons = [
  { label: "Vuex Posts", url: "/vuex-posts" },
  { label: "Vue3 Posts", url: "/vue3-posts" },
  { label: "Vue3 Todos", url: "/vue3-todos" },
  { label: "About", url: "/about" },
];
</script>

<style scoped>
</style>