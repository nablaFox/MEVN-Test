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


<style scoped>

    select {
        width: 100%;
        margin-bottom: 10px;
    }

</style>