import type { Task } from '@/shared/shared-kernel'
import {
    createTask,
    toggleTask,
    addTask,
    updateTask,
    removeTask,
    getCompletedTasks,
    getUncompletedTasks,
} from './logic'
import { vi } from 'vitest'

const SYSTEM_TIMESTAMP = 1694669222291
const GENERATED_ID = `${SYSTEM_TIMESTAMP}`
vi.setSystemTime(SYSTEM_TIMESTAMP)

describe('entities/task logic', () => {
    // let list: Task[] = []
    const originList: Task[] = [
        {
            id: '1',
            name: 'first task',
            isCompleted: false,
        },
        {
            id: '2',
            name: 'second task',
            isCompleted: true,
        },
    ]

    beforeEach(() => {
        // list = [
        //     {
        //         id: '1',
        //         name: 'first task',
        //         isCompleted: false,
        //     },
        //     {
        //         id: '2',
        //         name: 'second task',
        //         isCompleted: true,
        //     },
        // ]
    })

    it('should add created task to list', () => {
        const task = {
            id: '3',
            name: 'third task',
            isCompleted: true,
        }

        const list = addTask(originList, task)

        expect(list).toContain(task)
    })

    it('should toggle task into store', () => {
        const task = {
            id: '2',
            name: 'other task',
            isCompleted: true,
        }

        const list = updateTask(originList, task)

        expect(list).toContainEqual(task)
    })

    it('should remove task from store', () => {
        const task = originList[1]

        const list = removeTask(originList, task)

        expect(list).not.toContain(task)
    })

    it('should return only checked tasks', () => {
        const list = getCompletedTasks(originList)

        expect(list).toStrictEqual([originList[1]])
    })

    it('should return only unchecked tasks', () => {
        const list = getUncompletedTasks(originList)

        expect(list).toStrictEqual([originList[0]])
    })

    it('should return new task by createTask fn', () => {
        const name = 'name'

        const task1 = createTask(name)
        expect(task1).toStrictEqual({
            id: GENERATED_ID,
            name,
            isCompleted: false,
        })

        const id = '1'
        const task2 = createTask(name, id)
        expect(task2).toStrictEqual({
            id,
            name,
            isCompleted: false,
        })
    })

    it('should toggle `isCompleted` for gived task in toggleTask fn', () => {
        const name = 'name'
        const task = createTask(name)
        const updatedTask = toggleTask(task)

        expect(updatedTask).toStrictEqual({
            id: GENERATED_ID,
            name,
            isCompleted: true,
        })
    })
})
