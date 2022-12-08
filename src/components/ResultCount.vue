<template>
    <Text text="{{ count }} movie(s) found" />
</template>

<script lang="ts">

export default {
    name: 'ResultCount',
    components: [Text],
    props: {
        count: Number
    }
}
</script>