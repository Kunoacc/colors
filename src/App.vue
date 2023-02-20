<script setup lang="ts">
import { RouterView } from "vue-router";
import ColorProvider from "./providers/ColorProvider.vue";
</script>

<template>
  <color-provider>
    <RouterView />
  </color-provider>
</template>
