import { vi, describe, it } from 'vitest'

// import { taskModel } from '../../../entities/task'
import { useCreateTask, useToggleTask, useRemoveTask } from './model'
import { TaskStore } from '@/entities/task/model/types'

const SYSTEM_TIME = 1694669222291
vi.setSystemTime(SYSTEM_TIME)

const id = `${SYSTEM_TIME}`

const addTask = vi.fn()
const updateTask = vi.fn()
const deleteTask = vi.fn()

const implementation: Pick<TaskStore, 'addTask' |'removeTask' | 'updateTask'> = {
    addTask,
    updateTask,
    removeTask: deleteTask,
}

// vi.spyOn(taskModel, 'useTaskStore').mockImplementation(() => implementation)

describe('features/task model', () => {
    it('should call addTask fn with created task', async () => {
        const name = 'Task name'
        const { createTask } = useCreateTask({ taskStore: implementation })

        await createTask(name)

        expect(addTask).toHaveBeenCalledWith({
            id,
            name,
            isCompleted: false,
        })
    })
    it.todo('should not call addTask fn if has api error')

    it('should call updateTask fn with updated task', async () => {
        const task = { id, name: 'Task name', isCompleted: false }

        const { toggleTask } = useToggleTask({ taskStore: implementation })

        await toggleTask(task)

        expect(updateTask).toHaveBeenCalledWith({
            ...task,
            isCompleted: true,
        })
    })
    it.todo('should not call updateTask fn if has api error')

    it('should call removeTask fn with selected task', async () => {
        const task = { id, name: 'Task name', isCompleted: false }

        const { removeTask } = useRemoveTask({ taskStore: implementation })

        await removeTask(task)

        expect(deleteTask).toHaveBeenCalledWith(task)
    })
    it.todo('should not call removeTask fn if has api error')
})
