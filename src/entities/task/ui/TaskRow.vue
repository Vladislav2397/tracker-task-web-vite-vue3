<template>
    <div class="task-row">
        <h4 class="task-row__name">{{ task.name }}</h4>
        <div class="task-row__actions">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{ task: { id: number; name: string } }>()
</script>

<style scoped>
.task-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #12121280;
    min-height: 48px;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 4px;
}

.task-row__name {
    font-size: 14px;
    line-height: 18px;
    font-family: sans-serif;
    color: #fff;
}

@media (min-width: 768px) {
    .task-row {
        min-height: 52px;
    }

    .task-row__name {
        font-size: 24px;
        line-height: 28px;
    }
}
</style>
