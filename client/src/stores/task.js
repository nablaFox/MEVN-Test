import { defineStore } from "pinia";
import { ref, computed } from 'vue'

import axios from 'axios'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref(null)

    async function getAll() {
        const res = await axios.get('http://localhost:3000/task')
        tasks.value = res.data
    }

    async function register(title, description, status) {
        await axios.post('http://localhost:3000/task', {
            title: title,
            description: description,
            status: status
        })
        getAll()
    }
    

    function remove() {

    }


    return { tasks, getAll, register, remove }
})