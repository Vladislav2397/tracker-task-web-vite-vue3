<template>
    <Action view="success" @click="onClick" />
</template>

<script lang="ts">
import Action from '../../shared/ui/Action.vue'

export default {
    components: {
        Action,
    },
}
</script>

<script lang="ts" setup>
import { useToggleTask } from './model'

const { toggleTask } = useToggleTask()
const props = defineProps<{ task: { id: number } }>()

function onClick() {
    toggleTask(props.task)
}
</script>
