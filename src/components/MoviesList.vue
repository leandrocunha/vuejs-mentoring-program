<template>
  <Suspense>
    <template #default>
      <p class="tall-section-title">
        Movies List (scroll down to see the lazy load images at Network tab of
        devtools)
      </p>
      <div>
        <SearchForm />
        <span v-for="movie in moviesList" v-bind:key="movie.id">
          <div class="movie">
            <ImageItem :source="movie.poster_path" />
            <MovieDetails v-bind="movieById(movie.id)" />
          </div>
        </span>
      </div>
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMovieStore } from "@/stores/MovieStore";
import ImageItem from "./ImageItem.vue";
import MovieDetails from "./MovieDetails.vue";
import SearchForm from "./SearchForm.vue";
import { api } from "@/api";

export default defineComponent({
  async setup() {
    const store = useMovieStore();
    const movies = await api.fetchAllMovies();

    store.$patch({
      moviesList: [...movies],
    });
    // store.setMovies(movies);

    return { ...store };
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
