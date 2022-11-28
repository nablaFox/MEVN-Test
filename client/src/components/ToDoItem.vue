<script setup>

import { ref, onMounted } from 'vue'

const props = defineProps({
    label: String,
    placeholder: String,
    id: String,
    text: String,
    select: Boolean,
})

const selected = ref(props.text)

const options = [
    { text: 'To Be done', value: 'To Be Done' },
    { text: 'In Progress', value: 'In Progress' },
    { text: 'Completed', value: 'Completed' }
]

</script>

<template>


    <div class="form-group">
        <label :for="id"> {{ label }} </label>

        <input
            v-if="!select"
            type="text"
            :id="id"
            :value="text"
            :placeholder="placeholder"
            @input="$emit('update:text', $event.target.value)"
        />

        <select 
            v-else 
            :id="id" 
            @input="$emit('update:text', $event.target.value)"
        >
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>

        {{ selected }}

    </div>

    
</template>



<style lang="scss" scoped>

    input, select {
        width: 100%;
        padding: 6px;
        margin-bottom: 10px;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

</style>

