import { defineStore } from 'pinia'
import { ref } from 'vue'

export function createTask(name: string, id?: string) {
    return {
        id: id ?? `${Date.now()}`,
        name,
        isCompleted: false,
    }
}

export function toggleTask(task: any) {
    return {
        ...task,
        isComplete: !task.isComplete,
    }
}

export const useTaskStore = defineStore('task', () => {
    const list = ref([])

    function addTask(task: any) {
        list.value.push(task)
    }

    function updateTask(task: any) {
        list.value.map((item) => {
            if (item.id !== task.id) return item

            return task
        })
    }

    function removeTask(task: any) {
        list.value = list.value.filter((item) => item.id !== task.id)
    }

    return {
        list,
        addTask,
        updateTask,
        removeTask,
    }
})
