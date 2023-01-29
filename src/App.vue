<template>
  <PageHeader />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
