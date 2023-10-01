import { setActivePinia, createPinia } from 'pinia'
import { useTaskStore, createTask, toggleTask } from './index'
import { vi } from 'vitest'

const SYSTEM_TIMESTAMP = 1694669222291
const GENERATED_ID = `${SYSTEM_TIMESTAMP}`
vi.setSystemTime(SYSTEM_TIMESTAMP)

const initialValue = [
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

describe('entities/task module', () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it('should add created task to store', () => {
        const taskStore = useTaskStore()
        expect(taskStore.list).toStrictEqual(initialValue)

        const newTask = createTask('new task', '3')

        taskStore.addTask(newTask)
        expect(taskStore.list).toStrictEqual([...initialValue, newTask])
    })

    it('should toggle task into store', () => {
        const taskStore = useTaskStore()
        expect(taskStore.list).toStrictEqual(initialValue)

        const originTask = taskStore.list[0]
        const updatedTask = toggleTask(originTask)

        taskStore.updateTask(updatedTask)
        expect(taskStore.list).toStrictEqual([updatedTask, initialValue[1]])
    })

    it('should remove task from store', () => {
        const taskStore = useTaskStore()
        expect(taskStore.list).toStrictEqual(initialValue)

        const originTask = taskStore.list[0]

        taskStore.removeTask(originTask)
        expect(taskStore.list).toStrictEqual([initialValue[1]])
    })

    it('should return only checked tasks', () => {
        const taskStore = useTaskStore()

        expect(taskStore.completed).toStrictEqual([initialValue[1]])
    })

    it('should return only unchecked tasks', () => {
        const taskStore = useTaskStore()

        expect(taskStore.uncompleted).toStrictEqual([initialValue[0]])
    })
})

describe('entities/task model', () => {
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
