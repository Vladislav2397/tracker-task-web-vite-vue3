import { vi, describe, it, beforeEach } from 'vitest'

import { useCreateTask, useToggleTask, useRemoveTask, Dependencies } from './model'

const SYSTEM_TIME = 1694669222291
vi.setSystemTime(SYSTEM_TIME)

const id = `${SYSTEM_TIME}`

const taskApiMock = {
    createTask: vi.fn().mockReturnValueOnce(Promise.resolve({ id, status: true })).mockReturnValueOnce(Promise.reject),
    removeTask: vi.fn().mockReturnValueOnce(Promise.resolve({ status: true })).mockReturnValueOnce(Promise.reject),
    updateTask: vi.fn().mockReturnValueOnce(Promise.resolve({ status: true })).mockReturnValueOnce(Promise.reject),
}

// vi.spyOn(taskModel, 'useTaskStore').mockImplementation(() => implementation)

describe('features/task model', () => {
    let deps: Dependencies

    beforeEach(() => {
        deps = {
            taskApi: taskApiMock,
            taskStore: {
                addTask: vi.fn(),
                updateTask: vi.fn(),
                removeTask: vi.fn(),
            }
        }
    })

    it('should call addTask fn with created task', async () => {
        const name = 'Task name'
        const { createTask } = useCreateTask(deps)

        await createTask(name)

        expect(deps.taskStore.addTask).toHaveBeenCalledWith({
            id,
            name,
            isCompleted: false,
        })
    })
    it('should not call addTask fn if has api error', async () => {
        const name = 'Task name'
        const { createTask } = useCreateTask(deps)

        expect(createTask(name)).rejects.toThrow()

        expect(deps.taskStore.addTask).not.toHaveBeenCalled()
    })

    it('should call updateTask fn with updated task', async () => {
        const task = { id, name: 'Task name', isCompleted: false }

        const { toggleTask } = useToggleTask(deps)

        await toggleTask(task)

        expect(deps.taskStore.updateTask).toHaveBeenCalledWith({
            ...task,
            isCompleted: true,
        })
    })
    it('should not call updateTask fn if has api error', () => {
        const task = { id, name: 'Task name', isCompleted: false }

        const { toggleTask } = useToggleTask(deps)

        expect(toggleTask(task)).rejects.toThrow(/API_ERROR/)

        expect(deps.taskStore.updateTask).not.toHaveBeenCalled()
    })

    it('should call removeTask fn with selected task', async () => {
        const task = { id, name: 'Task name', isCompleted: false }

        const { removeTask } = useRemoveTask(deps)

        await removeTask(task)

        expect(deps.taskStore.removeTask).toHaveBeenCalledWith(task)
    })
    it('should not call removeTask fn if has api error', () => {
        const task = { id, name: 'Task name', isCompleted: false }

        const { removeTask } = useRemoveTask(deps)

        expect(removeTask(task)).rejects.toThrow(/API_ERROR/)

        expect(deps.taskStore.removeTask).not.toHaveBeenCalled()
    })
})
