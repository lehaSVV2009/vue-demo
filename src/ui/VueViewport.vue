<template>
  <v-container fluid class="viewport"><slot /></v-container>
</template>
<script>
export default {
  name: 'vue-viewport'
}
</script>
<style scoped>
.viewport {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>