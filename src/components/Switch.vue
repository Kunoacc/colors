<template>
  <label
    :for="props.name"
    class="inline-flex items-center select-none cursor-pointer"
  >
    <slot name="labelBefore"></slot>
    <span class="relative w-9 h-5 dark:bg-gray-500 bg-gray-400 rounded-xl mx-2">
      <input type="checkbox" class="hidden" :id="name" v-bind="$attrs" />
      <span
        class="absolute w-4 h-4 m-0.5 shadow-gray-600 shadow-lg bg-gray-700 transition-transform ease-in-out duration-200 rounded-lg"
      ></span>
    </span>
    <slot name="labelAfter"></slot>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
}>();
</script>

<script lang="ts">
export default {
  name: "AppSwitch",
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
input:checked {
  & + span {
    transform: translateX(100%);
  }
}
</style>
