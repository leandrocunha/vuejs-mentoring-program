<template>
  <MovieDetails />
</template>

<script lang="ts">
import { useMovieStore } from "@/stores/MovieStore";
import { defineComponent } from "vue";
import MovieDetails from "@/components/MovieDetails.vue";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    return { store };
  },
  name: "MovieDetailsView",
  components: { MovieDetails },
});
</script>
