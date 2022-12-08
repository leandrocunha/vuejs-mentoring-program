<template>
    <div>
        <Text text="{{label}}" />
        <ButtonDefault>Title</ButtonDefault>
        <ButtonDefault>Genre</ButtonDefault>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "SearchFilter",
    components: { ButtonDefault, Text },
    props: {
        label: String
    }
});
</script>