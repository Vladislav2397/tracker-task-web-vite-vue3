<template>
    <Action view="success" @click="onClick" />
</template>

<script lang="ts">
import { Action } from '../../shared/ui/Action'
import { Task } from '../../shared/shared-kernel'

export default {
    components: {
        Action,
    },
}
</script>

<script lang="ts" setup>
import { useToggleTask } from './model'

const { toggleTask } = useToggleTask()
const props = defineProps<{ task: Task }>()

function onClick() {
    toggleTask(props.task)
}
</script>
