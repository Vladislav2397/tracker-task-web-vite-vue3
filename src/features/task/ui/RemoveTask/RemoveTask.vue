<template>
    <Action data-testid="Action" view="critical" @click="onClick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Action } from '@/shared/ui/Action'

export default defineComponent({
    name: 'RemoveTask',
    components: {
        Action,
    },
})
</script>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRemoveTask } from '../../model/index'
import { taskModel, taskApi } from '@/entities/task'

const taskStore = taskModel.useTaskStore()

const props = defineProps<{ task: Pick<Task, 'id'> }>()

const { removeTask } = useRemoveTask({ taskStore, taskApi })

function onClick() {
    removeTask(props.task)
}
</script>
