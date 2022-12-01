<script setup>

import { ref } from 'vue'
import { useTaskStore } from '@stores'

import BaseInputText from '@components/BaseInputText.vue'
import BaseButton from '@components/BaseButton.vue'
import BaseSelect from '@components/BaseSelect.vue'

const title = ref('')
const description = ref('')
const status = ref('')

const taskForm = ref(null)

const options = [
    { label: 'To Be Done', value: 'To Be Done' },
    { label: 'In Progress', value: 'In Progress' },
    { label: 'Done', value: 'Done' }
]

function onSubmit() {
    const taskStore = useTaskStore()
    
    taskStore.register(
        title.value, 
        description.value, 
        status.value
    )
    .then(() => taskForm.value.reset())
}

</script>

<template>


    <div class="create-task">

        <h1 class="title"> ToDo List </h1>
        <form
            @submit.prevent="onSubmit"
            ref="taskForm"
        >
            <div class="row">
                <div class="form-group">
                    <label for="title"> Task </label>
                    <BaseInputText
                        id="title"
                        placeholder="Enter task name"
                        v-model:text="title"
                    />
                </div>
                <div class="form-group">
                    <label for="description"> Description </label>
                    <BaseInputText
                        id="description"
                        placeholder="Description"
                        v-model:text="description"
                    />
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label for="status"> Status </label>
                    <BaseSelect
                        id="status"
                        :options="options"
                        v-model:selected="status"
                        default="Done"
                    />
                </div>
            </div>

            <BaseButton type="submit"> Create </BaseButton>

        </form>

    </div>




</template>

<style lang="scss" scoped>

.create-task {
    width: 80vw;
    margin: 0 auto;

    .row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 5%;
        row-gap: 0;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

    .title {
        margin-bottom: 20px;
    }

}

</style>