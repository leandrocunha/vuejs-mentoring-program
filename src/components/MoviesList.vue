<template>
  <p>Movies List</p>
  <MoviePoster />
  <ImageItem
    source="https://media-cache.cinematerial.com/p/500x/ffziyoju/kill-bill-vol-2-movie-poster.jpg?v=1456295956"
  />

  <ImageItem
    source="https://media-cache.cinematerial.com/p/500x/ffziyoju/kill-bill-vol-2-movie-poster.jpg?v=1456295956"
  />

  <ImageItem
    source="https://media-cache.cinematerial.com/p/500x/ffziyoju/kill-bill-vol-2-movie-poster.jpg?v=1456295956"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviePoster from "./MoviePoster.vue";

export default defineComponent({
  name: "MoviesList",
  components: { MoviePoster },
});
</script>
