import type { ButtonHTMLAttributes, ComponentObjectPropsOptions, InputHTMLAttributes, SelectHTMLAttributes } from "vue";

export type InputDisplayOrientation = "horizontal" | "vertical";

export interface SelectInputProps extends /* @vue-ignore */ SelectHTMLAttributes {
  label?: string;
  orientation?: InputDisplayOrientation;
  options?: string[];
}

export interface CheckboxInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  label?: string;
  orientation?: InputDisplayOrientation;
}

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  baseBackgroundColor?: string;
}

export type ObjectStructurePropsDefinition<T> = ComponentObjectPropsOptions<T>;

export interface SelectOption {
  label: string;
  value: string;
}

export type Slots = typeof import("vue")['useSlots'];

export interface ButtonColorScheme {
  base: string;
  active: string;
  hover: string;
  disabled: string;
}