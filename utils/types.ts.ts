import type { SelectHTMLAttributes } from "vue";

export type InputDisplayOrientation = "horizontal" | "vertical";

export interface SelectInputProps extends /* @vue-ignore */ SelectHTMLAttributes {
  label?: string;
  orientation?: InputDisplayOrientation;
  options?: string[];
}

export type Slots = typeof import("vue")['useSlots'];