<script lang="ts" setup>
import type { SelectInputProps, SelectOption } from '~/utils/types.ts';

const model = defineModel();
const slots = useSlots();
const props = defineProps<SelectInputProps>();

const optionsComputed = computed(() => {
  const options = props.options ?? [];
  let optionsResult: SelectOption[] = [];

  for (const option of options) {
    // If the option is a primitive value, create an object with the value as the key and the value as the value.
    if (typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean' || typeof option === 'symbol' || typeof option === 'bigint') {
      optionsResult.push({ value: option, label: option });
    } else {
      optionsResult.push(option);
    }
  }

  return optionsResult;
});

const nameComputed = computed(() => {
  return props.name ?? ('select_' + generateHexString(32));
});

</script>

<template>
  <div class="flex flex justify-between items-center text-sm">
    <label class="w-1/2 text-white" :for="nameComputed">{{ props.label }}</label>
    <div class="w-1/2 relative inline-block">
      <select class="w-full appearance-none bg-neutral-600 text-white px-3 py-2 rounded-md" v-model="model"
        :name="nameComputed">
        <option value="" disabled selected>Select an option</option>
        <slot></slot>
        <template v-for="option in optionsComputed">
          <option :value="option.value">{{ option.label }}</option>
        </template>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <i class="ti ti-chevron-down fill-current h-4 w-4"></i>
      </div>
    </div>
  </div>
</template>