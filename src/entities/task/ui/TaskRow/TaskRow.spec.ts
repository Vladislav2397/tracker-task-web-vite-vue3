import { render } from '@testing-library/vue'
import { describe, it } from 'vitest'

import TaskRow from './TaskRow.vue'

const map = [
    {
        id: '123213124124',
        name: 'task name',
        isCompleted: false,
    },
    {
        id: '123213124124',
        name: 'task name',
        isCompleted: true,
    },
]

describe('entities/task TaskRow component', () => {
    it.each(map)('Snapshot for view task', async (task) => {
        const { html } = render(TaskRow, {
            props: {
                task,
            },
            slots: {
                default: ['<button>Action</button>'],
            },
        })

        expect(html()).toMatchSnapshot()
    })
})
