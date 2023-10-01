import { taskModel, taskApi } from '@/entities/task'
import { TaskStore } from '@/entities/task/model/types'
import { Task } from '@/shared/shared-kernel'

export const useCreateTask = ({ taskStore }: { taskStore: Pick<TaskStore, 'addTask'> }) => {
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

export const useToggleTask = ({ taskStore }: { taskStore: Pick<TaskStore, 'updateTask'> }) => {
    // const taskStore = taskModel.useTaskStore()

    async function toggleTask(task: Task) {
        const updatedTask = taskModel.toggleTask(task)

        const response = await taskApi.updateTask(updatedTask.id, {
            isCompleted: updatedTask.isCompleted,
        })

        if (!response.status) {
            throw new Error(
                `update task with name ${task} is not success (API_ERROR)`
            )
        }

        taskStore.updateTask(updatedTask)
    }

    return {
        toggleTask,
    }
}

export const useRemoveTask = ({ taskStore }: { taskStore: Pick<TaskStore, 'removeTask'> }) => {
    // const taskStore = taskModel.useTaskStore()

    async function removeTask(task: Pick<Task, 'id'>) {
        const response = await taskApi.removeTask(task.id)

        if (!response.status) {
            throw new Error(`remove task ${task} is not success (API_ERROR)`)
        }

        taskStore.removeTask(task)
    }

    return {
        removeTask,
    }
}
