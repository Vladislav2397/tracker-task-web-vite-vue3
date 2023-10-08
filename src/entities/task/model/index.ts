import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Task } from '@/shared/shared-kernel'

export function createTask(name: string, id?: string) {
    return {
        id: id ?? `${Date.now()}`,
        name,
        isCompleted: false,
    }
}

export function toggleTask(task: Task) {
    return {
        ...task,
        isCompleted: !task.isCompleted,
    }
}

export const useTaskStore = defineStore('task', () => {
    const list = ref<Task[]>([
        {
            id: '1',
            name: 'first task',
            isCompleted: false,
        },
        {
            id: '2',
            name: 'second task',
            isCompleted: true,
        },
    ])

    function addTask(task: Task) {
        list.value.push(task)
    }

    function updateTask(task: Task) {
        list.value = list.value.map((item) => {
            if (item.id !== task.id) return item

            return task
        })
    }

    function removeTask(task: Pick<Task, 'id'>) {
        list.value = list.value.filter((item) => item.id !== task.id)
    }

    const completed = computed(() =>
        list.value.filter(({ isCompleted }) => isCompleted)
    )
    const uncompleted = computed(() =>
        list.value.filter(({ isCompleted }) => !isCompleted)
    )

    return {
        list,
        completed,
        uncompleted,
        addTask,
        updateTask,
        removeTask,
    }
})
