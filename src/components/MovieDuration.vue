<template>
  <Text :text="duration" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { parse } from "tinyduration";
import Text from "./Text.vue";

export default defineComponent({
  name: "MovieDuration",
  props: {
    length: {
      type: String,
      default: "PT0M",
    },
  },
  components: { Text },
  computed: {
    duration() {
      const parsedDuration = parse(this.length);
      return `${parsedDuration.minutes} min`;
    },
  },
});
</script>
