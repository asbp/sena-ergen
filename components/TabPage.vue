<template>
  <slot></slot>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>