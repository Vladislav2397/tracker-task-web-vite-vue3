<template>
    <div class="create-task-form">
        <input
            class="create-task-form__input"
            placeholder="Task name"
            :value="inputValue"
            @input="onInput"
        />
        <button class="create-task-form__button" @click="onClick">
            Create task
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useCreateTask } from '../../model'
import { taskModel, taskApi } from '@/entities/task'

const taskStore = taskModel.useTaskStore()
const { createTask } = useCreateTask({ taskStore, taskApi })

const inputValue = ref('')
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onInput(event: any) {
    const value = (event.target && event.target.value) || ''

    inputValue.value = value
}

function clear() {
    inputValue.value = ''
}

function onClick() {
    createTask(inputValue.value)
    clear()
}
</script>

<style scoped>
.create-task-form {
    display: flex;
    width: 100%;
    gap: 12px;
}

.create-task-form__input {
    flex-grow: 1;
}
</style>
