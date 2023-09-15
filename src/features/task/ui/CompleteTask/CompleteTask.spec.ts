import { fireEvent, render } from '@testing-library/vue'
import { setActivePinia, createPinia } from 'pinia'
import { vi, describe, it, beforeEach } from 'vitest'

import CompleteTask from './CompleteTask.vue'

const toggleTask = vi.fn()

vi.mock('../../model', () => ({
    useToggleTask: () => ({
        toggleTask,
    }),
}))

describe('features/task CompleteTask component', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should call toggleTask fn with task in props', async () => {
        const task = {
            id: '123213124124',
            name: 'task name',
            isCompleted: false,
        }
        const { getByTestId } = render(CompleteTask, {
            props: {
                task,
            },
        })

        const action = getByTestId('Action')
        await fireEvent.click(action)

        expect(toggleTask).toHaveBeenCalledWith(task)
    })
})
