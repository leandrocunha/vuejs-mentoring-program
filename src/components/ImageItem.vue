<template>
  <figure v-lazyload class="image__wrapper">
    <img class="image_item" :data-url="source" alt="Movie Poster" />
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

<style scoped lang="scss">
.image {
  &__wrapper {
    display: flex;

    justify-content: center;

    align-items: center;

    border-radius: 4px;

    &.loaded {
      .image {
        &__item {
          visibility: visible;

          opacity: 1;

          border: 0;
        }

        &__spinner {
          display: none;

          width: 100%;
        }
      }
    }
  }

  &__item {
    width: 100%;

    border-radius: 4px;

    transition: all 0.4s ease-in-out;

    opacity: 0;

    visibility: hidden;
  }
}
</style>
