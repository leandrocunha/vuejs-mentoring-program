<template>
  <div>
    <!-- <Input /> -->
    <input
      type="text"
      ref="movieTitle"
      v-model="inputValue"
      @keydown="searchMovies"
    />
    <p>movies count: {{ movies.length }}</p>
  </div>
</template>

<script lang="ts">
import { useMovieStore } from "@/stores/MovieStore";
import { defineComponent, ref } from "vue";
import InputCpt from "./Input.vue";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    const movieTitle = ref();
    const searchMovies = () => {
      const { el } = movieTitle.value;
      console.log(el.value);
      store.moviesByTitle(el.value);
    };

    return { ...store };
  },
  name: "SearchForm",
  components: { InputCpt },
});
</script>
