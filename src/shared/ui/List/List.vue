<template>
    <div class="list" v-auto-animate>
        <slot v-for="item in props.list" :key="props.keyExtractor(item)" :item="item" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ list: any[], keyExtractor: (item: any) => string }>()
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}
</style>
