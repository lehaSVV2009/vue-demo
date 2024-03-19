<template>
  <v-card
    ><v-card-item>
      <v-card-title>
        {{ comment.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ comment.email }}
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      {{ comment.body }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>