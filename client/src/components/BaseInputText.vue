<script setup>

const props = defineProps({
    id: String,
    placeholder: String,
    text: String,
})


</script>


<template>

    <input 
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="text"
        @input="$emit('update:text', $event.target.value)"
    />

</template>


<style lang="scss" scoped>

@import "@design";

input {
    width: 100%;
    padding: 6px;
    margin-bottom: $size-grid-padding;
}

</style>