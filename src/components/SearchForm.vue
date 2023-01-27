<template>
  <input type="text" v-model="inputValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMovieStore } from "@/stores/MovieStore";

export default defineComponent({
  setup() {
    const store = useMovieStore();
    return store;
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
