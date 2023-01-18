<template>
  <p class="tall-section-title">
    Movies List (scroll down to see the lazy load images at Network tab of
    devtools)
  </p>
  <!-- a tall section title to test the lazy load images -->
  <MoviePoster />
  <ImageItem
    source="https://media-cache.cinematerial.com/p/500x/ffziyoju/kill-bill-vol-2-movie-poster.jpg?v=1456295956"
  />

  <ImageItem
    source="https://media-cache.cinematerial.com/p/500x/ouo9ahgl/four-rooms-movie-poster.jpg?v=1456742758"
  />

  <ImageItem
    source="https://media-cache.cinematerial.com/p/500x/pkyii968/jackie-brown-movie-poster.jpg?v=1630441893"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviePoster from "./MoviePoster.vue";
import ImageItem from "./ImageItem.vue";

export default defineComponent({
  name: "MoviesList",
  components: { MoviePoster, ImageItem },
});
</script>

<style>
.tall-section-title {
  height: 100vh;
}
</style>
