<script lang="ts" setup>
import type { SelectInputProps } from '~/utils/types.ts';

const model = defineModel();
const slots = useSlots();

const optionsFromSlot = computed(() => filterSlots(slots, 'option'));

// Props for this component is the same as the props for the native select element.
const props = defineProps<SelectInputProps>();

</script>

<template>
  <div class="flex flex justify-between items-center mb-3 text-sm">
    <label class="w-1/2 text-white">{{ props.label }}</label>
    <div class="w-1/2 relative inline-block">
      <select class="w-full appearance-none bg-neutral-600 text-white px-3 py-2 rounded-md"
      v-model="model">
        <option value="" disabled>Select an option</option>
        <template v-for="option in optionsFromSlot">
          <option :value="option?.props?.value">{{ option?.children }}</option>
        </template>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <i class="ti ti-chevron-down fill-current h-4 w-4"></i>
      </div>
    </div>
  </div>
</template>