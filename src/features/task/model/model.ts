import { taskModel } from '../../../entities/task'
import { Task } from '../../../shared/shared-kernel'

const api = {
    task: {
        async remove(_taskId: string) {
            return { status: true }
        },
        async update(_taskId: string, _fields: Record<string, unknown>) {
            return { status: true }
        },
        async create(_taskName: string) {
            return { id: `${Date.now()}`, status: true }
        },
    },
}

export const useCreateTask = () => {
    const taskStore = taskModel.useTaskStore()

    async function createTask(taskName: string) {
        const response = await api.task.create(taskName)

        if (!response.status) {
            console.error(
                `create task with name ${taskName} is not success (API_ERROR)`
            )
        }

        taskStore.addTask(taskModel.createTask(taskName, response.id))
    }

    return {
        createTask,
    }
}

export const useToggleTask = () => {
    const taskStore = taskModel.useTaskStore()

    async function toggleTask(task: Task) {
        const updatedTask = taskModel.toggleTask(task)

        const response = await api.task.update(updatedTask.id, {
            isCompleted: updatedTask.isCompleted,
        })

        if (!response.status) {
            console.error(
                `create task with name ${task} is not success (API_ERROR)`
            )
        }

        taskStore.updateTask(updatedTask)
    }

    return {
        toggleTask,
    }
}

export const useRemoveTask = () => {
    const taskStore = taskModel.useTaskStore()

    async function removeTask(task: Task) {
        const response = await api.task.remove(task.id)

        if (!response.status) {
            console.error(`remove task ${task} is not success (API_ERROR)`)
        }

        taskStore.removeTask(task)
    }

    return {
        removeTask,
    }
}
