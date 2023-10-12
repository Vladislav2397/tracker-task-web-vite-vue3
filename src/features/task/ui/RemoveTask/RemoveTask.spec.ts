import { fireEvent, render } from '@testing-library/vue'
import { setActivePinia, createPinia } from 'pinia'
import { vi, describe, it, beforeEach } from 'vitest'

import RemoveTask from './RemoveTask.vue'

const removeTask = vi.fn()
// const useRemoveTask = vi.fn(() => ({
//     removeTask,
// }))

vi.mock('../../model', () => ({
    useRemoveTask: () => ({
        removeTask
    }),
}))

describe('features/task RemoveTask component', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should call removeTask fn with task in props', async () => {
        const task = {
            id: '123213124124',
            name: 'task name',
            isCompleted: false,
        }
        const { getByTestId } = render(RemoveTask, {
            props: {
                task,
            },
        })

        const action = getByTestId('Action')
        await fireEvent.click(action)

        expect(removeTask).toHaveBeenCalledWith(task)
    })
})

// describe('feature/task RemoveTask type', () => {
// })
