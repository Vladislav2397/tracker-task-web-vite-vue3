import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Task } from '@/shared/shared-kernel'

import * as model from './logic'

export const { createTask, toggleTask } = model

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
        list.value = model.addTask(list.value, task)
    }

    function updateTask(task: Task) {
        list.value = model.updateTask(list.value, task)
    }

    function removeTask(task: Pick<Task, 'id'>) {
        list.value = model.removeTask(list.value, task)
    }

    const completed = computed(() => model.getCompletedTasks(list.value))
    const uncompleted = computed(() => model.getUncompletedTasks(list.value))

    return {
        list,
        completed,
        uncompleted,
        addTask,
        updateTask,
        removeTask,
    }
})
