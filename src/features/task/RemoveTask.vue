<template>
    <Action view="critical" @click="onClick" />
</template>

<script lang="ts">
import Action from '../../shared/ui/Action.vue'

import { useRemoveTask } from './model'

export default {
    components: {
        Action,
    },
}
</script>

<script lang="ts" setup>
const props = defineProps<{ task: { id: number } }>()

const { removeTask } = useRemoveTask()

function onClick() {
    removeTask(props.task)
}
</script>
