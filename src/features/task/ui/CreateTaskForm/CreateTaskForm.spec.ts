import { fireEvent, render } from '@testing-library/vue'
import { setActivePinia, createPinia } from 'pinia'
import { vi, describe, it, beforeEach } from 'vitest'

import CreateTaskForm from './CreateTaskForm.vue'

vi.setSystemTime(1694669222291)

const createTask = vi.fn()

vi.mock('../../model', () => ({
    useCreateTask: () => ({
        createTask,
    }),
}))

describe('features/task CreateTaskForm component', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should call createTask fn and clear value', async () => {
        const { getByPlaceholderText, getByText } = render(CreateTaskForm)

        const taskName = 'New task name'

        const input = getByPlaceholderText<HTMLInputElement>('Task name')
        await fireEvent.update(input, taskName)

        const button = getByText<HTMLButtonElement>('Create task')
        await fireEvent.click(button)

        expect(createTask).toHaveBeenCalledWith(taskName)
        expect(input.value).toBe('')
    })
})
