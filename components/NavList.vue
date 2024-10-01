<script setup lang="ts">

const props = withDefaults(defineProps<{
  isOpen?: boolean;
}>(), {
  isOpen: false,
});

</script>

<template>
  <div
    class="flex flex-col xl:flex xl:flex-row grow items-center uppercase text-sm space-x-0 space-y-3 xl:space-x-3 xl:space-y-0 pb-3 xl:pb-0"
    :class="{ 'hidden': !isOpen }">
    <div class="flex flex-col xl:flex-row grow text-center text-white space-x-0 space-y-3 xl:space-x-3 xl:space-y-0 mt-3 xl:mt-0">
      <a href="#" class="hover:text-white">Exposure Management</a>
      <a href="#" class="hover:text-white">Exposure At Risk</a>
      <a href="#" class="hover:text-white">Realtime Catastrophe Estimation</a>
      <a href="#" class="!text-yellow-500">Report Generator</a>
    </div>
    <SidebarRightButtonGroup />
    <div class="items-center justify-end pe-3 text-neutral-400 hidden xl:flex xl:ms-3 text-sm uppercase">
      Welcome To Sena
    </div>
    <img src="~/assets/maipark.gif" alt="logo" class="h-8 xl:pe-3" />
  </div>
</template>