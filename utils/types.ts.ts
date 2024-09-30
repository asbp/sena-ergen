import type { SelectHTMLAttributes } from "vue";

export type InputDisplayOrientation = "horizontal" | "vertical";

export interface SelectInputProps extends /* @vue-ignore */ SelectHTMLAttributes {
  label?: string;
  orientation?: InputDisplayOrientation;
  options?: string[];
}

export interface SelectOption {
  label: string;
  value: string;
}

export type Slots = typeof import("vue")['useSlots'];