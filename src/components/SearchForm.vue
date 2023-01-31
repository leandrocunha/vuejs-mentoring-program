<template>
  <div>
    <!-- <Input /> -->
    <input type="text" v-model="inputValue" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useMovieStore } from "@/stores/MovieStore";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    const moviesList = computed(() => store.moviesList);
    return { ...store, moviesList };
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
