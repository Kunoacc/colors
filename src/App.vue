<script setup lang="ts">
import { RouterView } from "vue-router";
import ColorProvider from "./providers/ColorProvider.vue";
import ThemeProvider from "./providers/ThemeProvider.vue";
</script>

<template>
  <theme-provider>
    <color-provider>
      <RouterView />
    </color-provider>
  </theme-provider>
</template>
