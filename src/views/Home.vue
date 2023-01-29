<template>
  <MoviesList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviesList from "../components/MoviesList.vue";

export default defineComponent({
  name: "HomeView",
  components: { MoviesList },
});
</script>
