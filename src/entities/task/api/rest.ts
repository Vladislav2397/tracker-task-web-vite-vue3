import type { TaskAPI } from './types'

export const taskApi: TaskAPI = {
    async createTask(name) {
        return { id: `${Date.now()}`, status: Boolean(name) }
    },
    async updateTask(id, fields) {
        return { status: Boolean(id && fields) }
    },
    async removeTask(id) {
        return { status: Boolean(id) }
    },
}
