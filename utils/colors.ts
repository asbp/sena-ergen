import type { ButtonColorScheme } from "./types.ts";

export function generateColorScheme(base: string): ButtonColorScheme {
  // If the base color not ends with '-<number>', then append '-500'
  if (!base.match(/-\d+$/)) {
    base += '-500';
  }

  const colorBaseStr = base.split('-');

  // Extract the color number
  const colorNumber = parseInt(arrayPop(colorBaseStr));

  const baseColor = colorNumber;
  const activeColor = colorNumber + 100;
  const hoverColor = colorNumber + 200;
  const disabledColor = colorNumber - 100;

  return {
    base: `${colorBaseStr}-${baseColor}`,
    active: `${colorBaseStr}-${activeColor}`,
    hover: `${colorBaseStr}-${hoverColor}`,
    disabled: `${colorBaseStr}-${disabledColor}`,
  }
}