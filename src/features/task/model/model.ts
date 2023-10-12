import { taskModel } from '@/entities/task'
import { TaskAPI } from '@/entities/task/api/types'
import { TaskStore } from '@/entities/task/model/types'
import { Task } from '@/shared/shared-kernel'

export type Dependencies = {
    taskStore: Pick<TaskStore, 'addTask' | 'updateTask' | 'removeTask'>
    taskApi: Pick<TaskAPI, 'createTask' | 'updateTask' | 'removeTask'>
}

export const useCreateTask = ({ taskStore, taskApi }: Dependencies) => {
    // const taskStore = taskModel.useTaskStore()

    async function createTask(taskName: string) {
        const response = await taskApi.createTask(taskName)

        if (!response.status) {
            throw new Error(
                `create task with name ${taskName} is not success (API_ERROR)`
            )
        }

        const task = taskModel.createTask(taskName, response.id)

        taskStore.addTask(task)
    }

    return {
        createTask,
    }
}

export const useToggleTask = ({ taskStore, taskApi }: Dependencies) => {
    // const taskStore = taskModel.useTaskStore()

    async function toggleTask(task: Task) {
        const updatedTask = taskModel.toggleTask(task)

        const response = await taskApi.updateTask(updatedTask.id, {
            isCompleted: updatedTask.isCompleted,
        })

        if (!response.status) {
            throw new Error(
                `update task with name ${task.id} is not success (API_ERROR)`
            )
        }

        taskStore.updateTask(updatedTask)
    }

    return {
        toggleTask,
    }
}

export const useRemoveTask = ({ taskStore, taskApi }: Dependencies) => {
    // const taskStore = taskModel.useTaskStore()

    async function removeTask(task: Pick<Task, 'id'>) {
        const response = await taskApi.removeTask(task.id)

        if (!response.status) {
            throw new Error(`remove task with id ${task.id} is not success (API_ERROR)`)
        }

        taskStore.removeTask(task)
    }

    return {
        removeTask,
    }
}
