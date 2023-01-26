<template>
  <p class="tall-section-title">
    Movies List (scroll down to see the lazy load images at Network tab of
    devtools)
  </p>
  <p v-if="!movies.length">Loading...</p>
  <div>
    <SearchForm />
    <span v-for="movie in movies" v-bind:key="movie.id">
      <div class="movie">
        <ImageItem :source="movie.posterurl" />
        <MovieDetails v-bind="movieById(movie.id)" />
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMovieStore } from "@/stores/MovieStore";
import ImageItem from "./ImageItem.vue";
import MovieDetails from "./MovieDetails.vue";
import SearchForm from "./SearchForm.vue";

export default defineComponent({
  setup() {
    const store = useMovieStore();

    store.loadMovies();

    return store;
  },
  name: "MoviesList",
  components: { ImageItem, MovieDetails, SearchForm },
});
</script>

<style>
.movie {
  display: flex;
}
</style>
