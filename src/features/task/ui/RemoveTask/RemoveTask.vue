<template>
    <Action data-testid="Action" view="critical" @click="onClick" />
</template>

<script lang="ts">
import { Action } from '@/shared/ui/Action'

export default {
    components: {
        Action,
    },
}
</script>

<script lang="ts" setup>
import { Task } from 'vitest'
import { useRemoveTask } from '../../model'
import { taskModel } from '@/entities/task'

const taskStore = taskModel.useTaskStore()

const props = defineProps<{ task: Pick<Task, 'id'> }>()

const { removeTask } = useRemoveTask({ taskStore })

function onClick() {
    removeTask(props.task)
}
</script>
