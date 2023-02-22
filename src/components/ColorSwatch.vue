<template>
  <div class="flex p-6 justify-between border-t-4 border-t-gray-200">
    <ColorSwatchItem
      :color="color"
      :key="index"
      :index="index"
      v-for="(color, index) in colors"
    ></ColorSwatchItem>
  </div>
</template>

<script lang="ts" setup>
import {
  colorInjectionKey,
  type ColorProvider,
} from "@/providers/injectionKeys";
import { inject } from "vue";
import ColorSwatchItem from "./ColorSwatchItem.vue";

// @ts-ignore
const { colors } = inject(colorInjectionKey) as ColorProvider;
</script>
