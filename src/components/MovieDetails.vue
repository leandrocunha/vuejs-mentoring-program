<template>
  <div class="movie-detail">
    <TextItem :text="title" />
    <TextItem :text="release_date" />
    <MovieDuration :length="run_time" />
    <TextItem :text="overview" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextItem from "./Text.vue";
import MovieDuration from "./MovieDuration.vue";

export default defineComponent({
  name: "MovieDetails",
  components: { MovieDuration, TextItem },
  props: {
    title: String,
    overview: String,
    release_date: String,
    run_time: Boolean,
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
