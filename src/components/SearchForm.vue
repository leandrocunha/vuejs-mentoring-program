<template>
  <input type="text" v-model="inputValue" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useMovieStore } from "@/stores/MovieStore";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    const movies = computed(() => store.moviesSearch);
    return { ...store, moviesSearch: movies };
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(str) {
      this.moviesByTitle(str);
    },
  },
  name: "SearchForm",
});
</script>
