<script setup>

const props = defineProps({
    id: String,
    options: Array,
    selected: String,
    default: String,
})

</script>


<template>
    

    <select 
        :id="id"
        :value="selected"
        @input="$emit('update:selected', $event.target.value)"
    >
        <option 
            v-for="option in options"
            :value="option.value"
        >
            {{ option.label }}
        </option>

    </select>

</template>


<style lang="scss" scoped>

    @import "@design";

    select {
        width: 100%;
        margin-bottom: $size-grid-padding;
    }

</style>