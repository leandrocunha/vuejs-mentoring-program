<template>
  <Text :text="duration" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Text from "./Text.vue";

export default defineComponent({
  name: "MovieDuration",
  props: {
    length: {
      type: Number,
      default: 0,
    },
  },
  components: { Text },
  computed: {
    duration() {
      return `${this.length} min`;
    },
  },
});
</script>
