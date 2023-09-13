<template>
    <div class="list">
        <slot v-for="item in props.list" :item="item" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ list: any[] }>()
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}
</style>
