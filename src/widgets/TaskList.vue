<template>
    <List :list="list">
        <template #default="{ item }">
            <TaskRow :task="item">
                <div class="row">
                    <CompleteTask :task="item" />
                    <RemoveTask :task="item" />
                </div>
            </TaskRow>
        </template>
    </List>
</template>

<script lang="ts">
import { CompleteTask, RemoveTask } from '@/features/task'

import { TaskRow } from '@/entities/task'

import { List } from '@/shared/ui/List'

export default {
    components: {
        CompleteTask,
        RemoveTask,
        TaskRow,
        List,
    },
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { taskModel } from '@/entities/task'

const props = withDefaults(
    defineProps<{ filter?: 'all' | 'completed' | 'uncompleted' }>(),
    {
        filter: 'all',
    }
)

const taskStore = taskModel.useTaskStore()

const list = computed(() => {
    switch (props.filter) {
        case 'uncompleted':
            return taskStore.uncompleted
        case 'completed':
            return taskStore.completed
        default:
            return taskStore.list
    }
})
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    gap: 12px;
}
</style>
