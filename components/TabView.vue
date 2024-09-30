<script lang="ts" setup>
const slots = useSlots();
const activeTab = ref(0);

// Get the children of the TabView component
const tabPages = computed(() => filterSlots(slots, 'TabPage'));

const setActiveTab = (index: number) => {
  activeTab.value = index;
};

onMounted(() => {
  setActiveTab(0);
});

</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex w-100 text-sm mb-3 bg-neutral-800">
      <template v-for="(tabPage, index) in tabPages">
        <button class="flex-1 text-white p-3" @click="() => setActiveTab(index)"
          :class="{ 'bg-neutral-500': activeTab === index }">
          {{ tabPage?.props?.title
          }}</button>
      </template>
    </div>
    <div class="bg-neutral-800 rounded h-full">
      <component :is="tabPages?.[activeTab]" />
    </div>
  </div>
</template>

<style></style>