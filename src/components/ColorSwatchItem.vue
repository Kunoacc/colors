<template>
  <div
    :class="[
      'relative w-12 h-12 cursor-pointer text-transparent rounded-lg bg-gray-300',
      'before:absolute before:content-[``] before:w-full before:h-full before:bg-current before:rounded-lg',
      'after:absolute after:content-[``] after:top-full after:left-1/2 after:w-5 after:rounded-lg',
      'after:h-1 after:mt-2.5 after:bg-gray-400 after:duration-150 after:-translate-x-1/2 after:scale-x-0',
      { 'bg-[length:1rem_1rem]': color },
      { 'after:-translate-x-1/2 after:scale-x-100': isActiveColor },
    ]"
    @click="handleItemClick"
    :style="swatchItemStyle"
  >
    <PlusCircleIcon v-if="!color"></PlusCircleIcon>
    <span v-if="canClear" class="" @click="handleClearClick">
      <XMarkIcon />
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { Color } from "@/providers/ColorProvider.vue";
import { colorInjectionKey } from "@/providers/injectionKeys";
import { colord } from "colord";
import { computed, inject, type Ref } from "vue";
import { XMarkIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  color?: any;
  index: number;
}>();
// @ts-ignore
const { activeColor, setColors, getPreviousColor } = inject(
  colorInjectionKey,
  {}
);
const isActiveColor = computed(() => props.index === activeColor.value);
const canClear = computed(
  () => props.color && !!props.index && isActiveColor.value
);
const swatchItemStyle = computed(() => ({
  backgroundColor: props.color && colord(props.color).toHex(),
}));

const handleItemClick = () => {
  if (!props.color) {
    setColors((colors: Ref<Color[]>) => {
      const hueStep = (props.index as number) * (360 / colors.value.length);
      colors.value[props.index as number] = colord(colors.value[0]!).rotate(
        hueStep
      ).rgba;
      return [...colors.value];
    });
  }

  activeColor.value = props.index as number;
};

const handleClearClick = () => {
  activeColor.value = getPreviousColor() as number;
  setColors((colors: Color[]) => {
    colors[props.index as number] = null;
    return [...colors];
  });
};
</script>
