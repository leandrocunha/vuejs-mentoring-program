<template>
  <div class="movie-detail">
    <TextItem :text="movie.title" />
    <TextItem :text="movie.releaseDate" />
    <MovieDuration :length="movie.duration" />
    <TextItem :text="movie.storyline" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IMovie } from "@/stores/MovieStore";
import TextItem from "./Text.vue";
import MovieDuration from "./MovieDuration.vue";

export default defineComponent({
  name: "MovieDetails",
  components: { MovieDuration, TextItem },
  props: {
    movie: Object as () => IMovie,
  },
});
</script>

<style>
.movie-detail {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
</style>
