<template>
  <p class="tall-section-title">
    Movies List (scroll down to see the lazy load images at Network tab of
    devtools)
  </p>
  <p v-if="!moviesList.length">Loading...</p>
  <div>
    <SearchForm />
    <span v-for="movie in moviesList" v-bind:key="movie.id">
      <div class="movie">
        <router-link :to="{ name: 'movie', params: { movieSlug: movie.id } }">
          <ImageItem :source="movie.posterurl" />
        </router-link>
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMovieStore } from "@/stores/MovieStore";
import ImageItem from "./ImageItem.vue";
import SearchForm from "./SearchForm.vue";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    store.loadMovies();

    return store;
  },
  name: "MoviesList",
  components: { ImageItem, SearchForm },
});
</script>

<style>
.movie {
  display: flex;
}
</style>
