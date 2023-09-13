import { setActivePinia, createPinia } from 'pinia'
import { useTaskStore, createTask, toggleTask } from './index'

const initialValue = [
    {
        id: '1',
        isCompleted: false,
        name: 'first task',
    },
    {
        id: '2',
        isCompleted: true,
        name: 'second task',
    },
]

describe('entities/task model', () => {
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
})
