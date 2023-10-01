import { Task } from '@/shared/shared-kernel'

export type TaskStore = {
    list: Task[]
    uncompleted: Task[]
    completed: Task[]
    addTask: (task: Task) => void
    updateTask: (task: Task) => void
    removeTask: (task: Pick<Task, 'id'>) => void
}