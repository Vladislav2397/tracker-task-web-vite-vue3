<template>
    <div class="app">
        <Header />

        <div class="app__content">
            <Section class="app__form">
                <CreateTaskForm />
            </Section>
            <Section class="app__form">
                <List :list="tasks">
                    <template #default="{ item }">
                        <TaskRow :task="item">
                            <div class="app__row">
                                <CompleteTask :task="item" />
                                <RemoveTask :task="item" />
                            </div>
                        </TaskRow>
                    </template>
                </List>
            </Section>
        </div>
    </div>
</template>

<script lang="ts">
import Header from './widgets/Header.vue'

import { TaskRow } from './entities/task'

import { CompleteTask, RemoveTask, CreateTaskForm } from './features/task'

import Section from './shared/ui/Section.vue'
import List from './shared/ui/List.vue'

export default {
    components: {
        Header,
        Section,
        List,
        TaskRow,
        CompleteTask,
        RemoveTask,
        CreateTaskForm,
    },
}
</script>

<script setup lang="ts">
import { taskModel } from './entities/task'

const taskStore = taskModel.useTaskStore()

const tasks = taskStore.list
</script>

<style scoped>
.app {
    background-color: #121212;
    min-height: 100vh;
}

.app__content {
    padding: 12px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
}

.app__form {
    display: flex;
    gap: 12px;
}

.app__input {
    flex-grow: 1;
}

.app__row {
    display: flex;
    gap: 12px;
}
</style>
