<script setup>

import { ref } from 'vue'

import ToDoItem from '@components/ToDoItem.vue'

const title = ref('')
const description = ref('')
const status = ref('')


</script>

<template>


    <div class="create-task">

        <h1 class="title"> ToDo List </h1>

        <form @submit.prevent="$emit('createTask')">
            <div class="row">
                <ToDoItem
                    id="input-one"
                    label="Task"
                    placeholder="Create a Task"
                    v-model:text="title"
                />
                <ToDoItem
                    id="input-two"
                    label="Description" 
                    placeholder="Description"
                    v-model:text="description"
                />
            </div>

            <div class="row">
                <ToDoItem
                    id="select"
                    select
                    label="Status:"
                    v-model:text="status"
                />
            </div>

            <input type="submit" value="Create">

        </form>

    </div>




</template>

<style lang="scss" scoped>


.create-task {
    width: 80vw;
    margin: 0 auto;
    margin-top: 50px;

    .row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 5%;
        row-gap: 0;
    }

    input[type=submit] {
        background-color: #ff3f4d;
        border-radius: 3px;
        padding: 8px;
        color: white;
        border: none;
        cursor: pointer;
        transition: .1s ease;

        &:hover {
            background-color: #cf323d;
        }
    }

}

</style>