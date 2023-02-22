<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import useLocalStorage from "@/composables/useLocalStorage";
import type { HsvaColor, RgbaColor } from "colord";
import { computed, provide, ref, watch } from "vue";
import type { Ref } from "vue";
import { colorInjectionKey } from "./injectionKeys";

const activeColor = ref(0);

// @ts-ignore
const [colors, setColors]: [Ref<Array<Color>>, (value: any) => void] =
  useLocalStorage("colors", [
    { r: 50, g: 85, b: 255, a: 1 },
    ...Array(13).fill(null),
  ]);

const { value: getPreviousColor } = computed(() => () => {
  for (let i = activeColor.value - 1; i >= 0; i--) {
    if (colors?.value[i]) return i;
  }
});

watch([colors, activeColor], ([currentColors, currentActiveColor]) => {
  if (!currentColors[currentActiveColor]) {
    setColors(getPreviousColor());
  }
});

provide(colorInjectionKey, {
  colors,
  setColors,
  activeColor,
  getPreviousColor,
});
</script>

<script lang="ts">
export type Color = HsvaColor | RgbaColor | null;
</script>
