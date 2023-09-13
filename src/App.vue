<template>
    <div class="app">
        <Header />

        <div class="app__content">
            <Section>
                <CreateTaskForm />
            </Section>
            <Section>
                <TaskList filter="uncompleted" />
            </Section>
            <Section>
                <TaskList filter="completed" />
            </Section>
        </div>
    </div>
</template>

<script lang="ts">
import Header from './widgets/Header.vue'
import TaskList from './widgets/TaskList.vue'

import { CreateTaskForm } from './features/task'

import Section from './shared/ui/Section.vue'

export default {
    components: {
        Header,
        Section,
        TaskList,
        CreateTaskForm,
    },
}
</script>

<script setup lang="ts">
//
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
</style>
