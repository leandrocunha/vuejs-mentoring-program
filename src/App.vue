<template>
  <PageHeader />
  <MoviesList />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviesList from "./components/MoviesList.vue";
import PageHeader from "./components/PageHeader.vue";
import { useMovieStore } from "./stores/MovieStore";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    const { movies } = store;
    return { movies };
  },
  name: "App",
  components: {
    MoviesList,
    PageHeader,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
