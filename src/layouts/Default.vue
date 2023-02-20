<template>
  <div class="min-h-screen items-center justify-center flex">
    <div class="container m-5 max-w-[50rem]">
      <AppHeader></AppHeader>
      <slot></slot>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DefaultLayout",
};
</script>

<script lang="ts" setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
