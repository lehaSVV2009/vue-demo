<template>
  <div>Likes: {{ this.likes }}</div>
  <v-btn @click="incrementLikes">Like</v-btn>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const likes = ref(0);
    
    onMounted(() => {
      console.log(likes);
    })

    return { likes };
  },
  methods: {
    incrementLikes() {
      this.likes++;
    }
  }
};
</script>