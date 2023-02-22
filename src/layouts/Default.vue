<template>
  <div class="min-h-screen items-center justify-center flex">
    <div class="container m-5 max-w-[50rem]">
      <AppHeader></AppHeader>
      <main
        class="flex flex-col flex-wrap my-8 mx-0 shadow-gray-400/25 shadow-lg rounded-2xl"
      >
        <slot></slot>
      </main>
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
