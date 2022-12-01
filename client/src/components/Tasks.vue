<script setup>

import { storeToRefs } from 'pinia'
import { useTaskStore } from '@stores'
import { onMounted } from 'vue';

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)

onMounted(taskStore.getAll)

</script>


<template>
    

    <div class="wrapper">
        <div class="row head">
            <div> Task Id </div>
            <div> Task Name </div>
            <div> Description </div>
            <div> Status </div>
        </div>


        <div class="row"
            v-for="task in tasks"
            :key="task.id"
        >
            <div> {{ task.id }} </div>
            <div> {{ task.title }} </div>
            <div> {{ task.description }} </div>
            <div> {{ task.status }} </div>
        </div>
    </div>


</template>


<style lang="scss" scoped>

    @import "@design";

    .wrapper {
        display: grid;
        grid-template-columns: repeat(4, auto);

        div {
            border: 1px solid #535454;
            padding: 10px;
        }
        
        .row {
            display: contents;
            &.head { @extend %font-heading }
        }
    }

 
    


</style>