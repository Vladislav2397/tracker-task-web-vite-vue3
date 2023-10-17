import { type Task } from '@/shared/shared-kernel'

export function addTask(tasks: Task[], task: Task): Task[] {
    return [...tasks, task]
}

export function removeTask(tasks: Task[], task: Pick<Task, 'id'>): Task[] {
    return tasks.filter(({ id }) => id !== task.id)
}

export function updateTask(tasks: Task[], task: Task): Task[] {
    return tasks.map(item => {
        if (item.id === task.id) return task

        return item
    })
}

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

export function getUncompletedTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => !task.isCompleted)
}

export function getCompletedTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => task.isCompleted)
}