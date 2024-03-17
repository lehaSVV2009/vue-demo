<template>
  <div class="navbar">
    <h1 @click="$router.push('/')">My Posts</h1>
    <div class="navar__buttons"></div>
    <v-btn class="mr-2" @click="$router.push('/posts')">Posts</v-btn>
    <v-btn class="mr-2" @click="$router.push('/about')">About</v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
}

.navar__buttons {
  margin-left: auto;
}
</style>