<script lang="ts" setup>
import { type CheckboxInputProps } from '~/utils/types.ts';

const props = defineProps<CheckboxInputProps>();
const model = defineModel();

const nameComputed = computed(() => {
  return props.name ?? ('select_' + generateHexString(32));
});

</script>

<template>
  <div class="flex mx-3 mb-3">
    <label
      class="relative h-5 w-9 cursor-pointer rounded-full bg-neutral-800 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-cyan-200">

      <input type="checkbox" :name="nameComputed" class="peer sr-only" v-model="model" />

      <span
        class="absolute inset-y-0 start-0 m-1 size-3 rounded-full bg-neutral-600 transition-all peer-checked:start-4"></span>
    </label>
    <label :for="nameComputed" class="grow text-white text-sm ms-3">{{ props.label }}</label>
  </div>
</template>