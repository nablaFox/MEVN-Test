import { defineStore } from "pinia";
import { ref, computed } from 'vue'

import axios from 'axios'

export const useTaskStore = defineStore('task', () => {
    const task = ref(null)

    async function getAll() {
        const res = await axios.get('http://localhost:3000/task')
        task.value = res.data
        
    }

    async function register(title, description, status) {
        const res = await axios.post('http://localhost:3000/task', {
            title: title,
            description: description,
            status: status
        })
        task.value = res.data
    }
    

    function remove() {

    }


    return { task, getAll, register, remove }
})