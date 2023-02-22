<template>
  <div
    class="relative first:rounded-tr-3xl border-b-gray-100 border-b-2 last:border-b-0"
  >
    <span
      class="absolute top-1/2 left-6 text-gray-400 -translate-y-1/2 text-sm z-10"
    >
      {{ model.toUpperCase() }}
    </span>
    <input
      type="text"
      ref="props.inputRef"
      v-model="color"
      @focus="$emit('focused')"
      @blur="$emit('blurred')"
      @change="handleInputModification"
      spellcheck="false"
      class="relative w-full h-16 pl-24 pr-8 box-border"
    />
    <span
      class="absolute hidden top-1/2 cursor-pointer items-center justify-center right-6 text-gray-500 p-2 animate-scale"
      @click="handleCopy"
    >
      <ClipboardDocumentIcon class="w-6 h-6" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { Color } from "@/providers/ColorProvider.vue";
import { colorInjectionKey } from "@/providers/injectionKeys";
import type { ColorModels } from "@/utils/colorMatcher";
import colorMatcher from "@/utils/colorMatcher";
import { colord } from "colord";
import { inject, computed, type Ref } from "vue";
import { ClipboardDocumentIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  colorEntry: [ColorModels, string];
  isFocused: boolean;
  inputRef: any;
}>();

defineEmits<{
  focused: string;
  blurred: string;
}>();

// @ts-ignore
const { setColors, activeColor } = inject(colorInjectionKey, {});
const color = computed(() => props.colorEntry[1]);
const model = computed(() => props.colorEntry[0]);

const handleInputModification = (event: Event) => {
  // @ts-ignore
  const { value } = event.currentTarget;

  setColors((parsedColors: Ref<Color[]>) => {
    if (colorMatcher(value, model.value) && colord(value).isValid()) {
      parsedColors.value[activeColor.value] = colord(value).rgba;
    }

    return [...parsedColors.value];
  });
};

const handleCopy = async (event: MouseEvent) => {
  const copyColor = color.value.replace(/^~/, "");
  await navigator.clipboard.writeText(copyColor);
  event.stopPropagation();
};
</script>
