<template>
  <p class="tall-section-title">
    Movies List (scroll down to see the lazy load images at Network tab of
    devtools)
  </p>
  <!-- a tall section title to test the lazy load images -->
  <span v-for="movie in movies" v-bind:key="movie.id">
    <div class="movie">
      <ImageItem :source="movie.poster_path" />
      <MovieDetails v-bind="movieById(movie.id)" />
    </div>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageItem from "./ImageItem.vue";
import MovieDetails from "./MovieDetails.vue";
import { useMovieStore } from "@/stores/MovieStore";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    return { ...store };
  },
  name: "MoviesList",
  components: { ImageItem, MovieDetails },
});
</script>

<style>
.tall-section-title {
  height: 100vh;
}
.movie {
  display: flex;
}
</style>
