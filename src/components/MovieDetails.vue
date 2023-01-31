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
import { IMovie, useMovieStore } from "@/stores/MovieStore";
import TextItem from "./Text.vue";
import MovieDuration from "./MovieDuration.vue";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    return { store };
  },
  name: "MovieDetails",
  components: { MovieDuration, TextItem },
  computed: {
    movie(): IMovie {
      const movie = this.store.movies.filter(
        ({ id }) => id === Number(this.$route.params.movieSlug)
      );
      return movie[0];
    },
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
