<template>
  <h1>Movie Details {{ movie.title }}</h1>
</template>

<script lang="ts">
import { useMovieStore } from "@/stores/MovieStore";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    return { store };
  },
  name: "MovieDetailsView",
  computed: {
    movie() {
      console.log(this.store.movies.filter(({ id }) => id === 1));
      return this.store.movies.filter(({ id }) => id === 1);
    },
  },
});
</script>
