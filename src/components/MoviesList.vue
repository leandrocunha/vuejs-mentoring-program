<template>
  <p class="tall-section-title">
    Movies List (scroll down to see the lazy load images at Network tab of
    devtools)
  </p>
  <SearchForm />
  <span v-for="movie in moviesList" v-bind:key="movie.id">
    <div class="movie">
      <ImageItem :source="movie.poster_path" />
      <MovieDetails v-bind="movieById(movie.id)" />
    </div>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useMovieStore } from "@/stores/MovieStore";
import ImageItem from "./ImageItem.vue";
import MovieDetails from "./MovieDetails.vue";
import SearchForm from "./SearchForm.vue";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    const moviesList = computed(() => store.moviesList);

    return { ...store, moviesList };
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
