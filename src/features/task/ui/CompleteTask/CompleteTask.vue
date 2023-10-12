<template>
    <Action data-testid="Action" view="success" @click="onClick" />
</template>

<script lang="ts">
import { Action } from '@/shared/ui/Action'
import type { Task } from '@/shared/shared-kernel'

export default {
    components: {
        Action,
    },
}
</script>

<script lang="ts" setup>
import { useToggleTask } from '../../model'
import { taskModel, taskApi } from '@/entities/task'

const taskStore = taskModel.useTaskStore()
const { toggleTask } = useToggleTask({ taskStore, taskApi })
const props = defineProps<{ task: Task }>()

function onClick() {
    toggleTask(props.task)
}
</script>
