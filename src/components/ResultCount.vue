<template>
    <Text :text="countText" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Text from './Text.vue';

export default defineComponent({
    name: 'ResultCount',
    components: { Text },
    props: {
        count: Number
    },
    computed: {
        countText() {
            return `${this.count} movie(s) found`
        }
    }
});
</script>