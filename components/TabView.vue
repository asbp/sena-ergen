<script lang="ts" setup>
const slots = useSlots();
const activeTab = ref(0);
const emit = defineEmits<{
  (e: 'tabClick', index: number): void,
  (e: 'tabChange', index: number): void,
}>();

// Get the children of the TabView component
const tabPages = computed(() => filterSlots(slots, 'TabPage') ?? []);

const isFirstTab = computed(() => activeTab.value === 0);
const isLastTab = computed(() => activeTab.value === (tabPages.value?.length ?? 0) - 1);

const setActiveTab = (index: number) => {
  activeTab.value = index;
};

const onTabClick = (index: number) => {
  setActiveTab(index);

  emit('tabClick', index);
};

watch(activeTab, (newIndex) => {
  emit('tabChange', newIndex);
});

onMounted(() => {
  setActiveTab(0);
});

</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex w-100 text-sm mb-3 bg-neutral-700 rounded">
      <template v-for="(tabPage, index) in tabPages">
        <button class="flex-1 text-white p-3 transition-all " @click="() => onTabClick(index)"
          :class="{ 'bg-neutral-500': activeTab === index, 'rounded-s': isFirstTab, 'rounded-e': isLastTab }">
          {{ tabPage?.props?.title
          }}</button>
      </template>
    </div>
    <div class="bg-neutral-700 rounded p-6 h-full">
      <component :is="tabPages?.[activeTab]" />
    </div>
  </div>
</template>

<style></style>