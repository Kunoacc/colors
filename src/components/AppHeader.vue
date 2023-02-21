<template>
  <header class="items-center flex justify-between">
    <div class="flex items-center">
      <app-logo class="dark:text-white text-black"></app-logo>
      <div class="dark:text-gray-600 text-gray-700 mx-2 leading-none mt-2">
        built by
        <a
          href="https://github.com/kunoacc"
          class="underline dark:hover:text-white hover:text-black"
          >BLVCKCODER</a
        >
      </div>
    </div>

    <Switch
      name="theme-toggle"
      :checked="theme === 'dark'"
      @change="toggleTheme"
    >
      <template v-slot:labelBefore>
        <sun-icon class="w-5 h-5"></sun-icon>
      </template>
      <template v-slot:labelAfter>
        <moon-icon class="w-4 h-4"></moon-icon>
      </template>
    </Switch>
  </header>
</template>

<script lang="ts" setup>
import { themeInjectionKey } from "@/providers/injectionKeys";
import { inject } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/20/solid";
import AppLogo from "./AppLogo.vue";
import Switch from "./Switch.vue";

const { setTheme, theme } = inject(themeInjectionKey, {});

const toggleTheme = (event: any) => {
  setTheme(event?.currentTarget?.checked ? "dark" : "light");
};
</script>
