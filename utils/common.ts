import type { Slot, Slots } from "vue";

export function test() {
  console.log('test');
}

export function filterSlots(slots: Slots, name: string) {
  return slots.default?.().filter((vnode) => {
    return (vnode.type as any).__name === name || vnode.type === name;
  });
}

export function generateHexString(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}