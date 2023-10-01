import { TaskStore } from '../types'

export const useTaskStore: () => TaskStore = () => ({ 
    list: [],
    completed: [],
    uncompleted: [],
    addTask: vi.fn(),
    updateTask: vi.fn(),
    removeTask: vi.fn(),
})

export { createTask, toggleTask } from '../index'
