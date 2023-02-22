<template>
  <div class="select-none border-l-2 border-l-gray-200">
    <ColorBreakdownInput
      v-for="(value, key) in convertedColor"
      :color-entry="[key, value]"
      :input-ref="inputRefs[key]"
      :is-focused="focusedInput === inputRefs[key]"
      @focused="focusedInput = inputRefs[key]"
      @blurred="focusedInput = null"
      :key="key"
    ></ColorBreakdownInput>
  </div>
</template>

<script lang="ts" setup>
import {
  colorInjectionKey,
  type ColorProvider,
} from "@/providers/injectionKeys";
import colorConverter from "@/utils/colorConverter";
import { inject, ref, computed } from "vue";
import ColorBreakdownInput from "./ColorBreakdownInput.vue";

// @ts-ignore
const { activeColor, colors } = inject(colorInjectionKey) as ColorProvider;

const convertedColor = computed(() =>
  colorConverter(colors.value[activeColor.value] as any)
);
const focusedInput = ref();
const inputRefs = ref<Record<string, any>>({});
</script>
