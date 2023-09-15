<template>
    <div class="create-task-form">
        <input
            class="create-task-form__input"
            placeholder="Task name"
            :value="inputValue"
            @input="onInput($event.target.value)"
        />
        <button class="create-task-form__button" @click="onClick">
            Create task
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useCreateTask } from '../../model'

const { createTask } = useCreateTask()

const inputValue = ref('')
function onInput(value: string) {
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
