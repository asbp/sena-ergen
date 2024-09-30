<template>
  <div class="bg-neutral-800 p-3 rounded">
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