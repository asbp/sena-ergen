<script lang="ts" setup>
const props = defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <nav class="grow md:hidden" :class="{ 'hidden': !isOpen }">
    <NavList />
  </nav>
</template>

<style></style>