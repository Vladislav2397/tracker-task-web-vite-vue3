<template>
    <div :class="classes"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = withDefaults(defineProps<{ view: 'success' | 'critical' }>(), {
    view: 'success',
})

const classes = computed(() => ['action', `action--${props.view}`])
</script>

<style scoped>
.action {
    width: 24px;
    height: 24px;
    border-radius: 4px;
}

.action--success {
    background-color: green;
}
.action--critical {
    background-color: red;
}
</style>
