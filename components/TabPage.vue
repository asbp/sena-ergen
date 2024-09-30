<template>
  <div class="p-3 rounded">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    title: string;
  }>();
</script>

<style>

</style>