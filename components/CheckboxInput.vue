<script lang="ts" setup>
import { type CheckboxInputProps } from '~/utils/types';

const props = defineProps<CheckboxInputProps>();
const model = defineModel();

const nameComputed = computed(() => {
  return props.name ?? ('select_' + generateHexString(32));
});

</script>

<template>
  <label class="relative h-6 w-full cursor-pointer flex items-center">
    <input type="checkbox" :name="nameComputed" class="peer sr-only" v-model="model" />
    <span class="absolute h-full w-10 bg-neutral-800 rounded-full transition-all peer-checked:bg-cyan-200 peer-focus-visible:ring peer-focus-visible:ring-white"></span>
    <span class="absolute start-0 m-1 size-4 rounded-full bg-neutral-600 transition-all peer-checked:start-4"></span>
    <span class="absolute start-12 text-sm flex items-center">{{ props.label }}</span>
  </label>
</template>