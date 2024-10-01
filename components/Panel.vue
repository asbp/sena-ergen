<script lang="ts" setup>

</script>

<template>
  <div class="p-6 flex flex-col">
    <div class="mb-3">
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </div>
</template>