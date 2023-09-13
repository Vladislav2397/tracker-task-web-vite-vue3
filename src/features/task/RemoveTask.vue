<template>
    <Action view="critical" @click="onClick" />
</template>

<script lang="ts">
import { Action } from '../../shared/ui/Action'

export default {
    components: {
        Action,
    },
}
</script>

<script lang="ts" setup>
import { useRemoveTask } from './model'

const props = defineProps<{ task: { id: number } }>()

const { removeTask } = useRemoveTask()

function onClick() {
    removeTask(props.task)
}
</script>
