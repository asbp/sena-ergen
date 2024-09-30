<script lang="ts" setup>
const slots = useSlots();
const activeTab = ref(0);

// Get the children of the TabView component
const tabPages = computed(() => {
  return slots.default?.().filter((vnode) => {
    return (vnode.type as any).__name === "TabPage";
  });
});

const setActiveTab = (index: number) => {
  activeTab.value = index;
};

onMounted(() => {
  setActiveTab(0);
});

</script>

<template>
  <div class="flex flex-col">
    <div class="flex w-100 mb-3">
      <template v-for="(tabPage, index) in tabPages">
        <button class="grow bg-neutral-800 text-white p-3" @click="() => setActiveTab(index)"
          :class="{ 'bg-neutral-600': activeTab === index }">
          {{ tabPage?.props?.title
          }}</button>
      </template>
    </div>
    <div class="bg-neutral-800rounded">
      <component :is="tabPages?.[activeTab]" />
    </div>
  </div>
</template>

<style></style>