<template>
  <div class="grid gap-2 grid-cols-2">
    <div
      class="flex basis-1/2 justify-between"
      v-for="([name, value], index) in Object.entries(analyzedColor)"
      :key="name || index"
    >
      <div class="text-red-300">
        {{ name[0]?.toUpperCase() + name.slice(1) }}
      </div>
      <div class="text-right">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { colorInjectionKey } from "@/providers/injectionKeys";
import colorAnalyzer from "@/utils/colorAnalyzer";
import { inject } from "vue";

// @ts-ignore
const { colors, activeColor } = inject(colorInjectionKey, {});
const analyzedColor = colorAnalyzer(colors.value[activeColor.value] as any);
</script>
