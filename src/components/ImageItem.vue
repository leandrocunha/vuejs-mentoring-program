<template>
  <figure v-lazyload class="image_wrapper">
    <img class="image_item" :data-url="source" alt="Movie Poster" src="" />
  </figure>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageItem",
  props: {
    source: {
      type: String,
      required: true,
    },
  },
});
</script>
