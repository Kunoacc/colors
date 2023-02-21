<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import useLocalStorage from "@/composables/useLocalStorage";
import { ref, watchEffect, provide, watch, type Ref } from "vue";
import { themeInjectionKey } from "./injectionKeys";

const LIGHT_THEME = "light";
const DARK_THEME = "dark;";

const themeQuery = matchMedia("(prefers-color-scheme: dark)");
const systemTheme = ref(themeQuery.matches ? DARK_THEME : LIGHT_THEME);

// @ts-ignore
const [localTheme, setLocalTheme]: [Ref<any>, (value: any) => void] =
  useLocalStorage("theme");
const theme = ref(localTheme || systemTheme);

const setTheme = (newTheme: string) => {
  setLocalTheme(newTheme);
  theme.value = newTheme;
};

watchEffect((cleanUp) => {
  const handleMediaQueryUpdate = (event: MediaQueryListEvent) => {
    setLocalTheme(event.matches ? DARK_THEME : LIGHT_THEME);
  };

  themeQuery.addEventListener("change", handleMediaQueryUpdate);

  cleanUp(() =>
    themeQuery.removeEventListener("change", handleMediaQueryUpdate)
  );
});

watchEffect(() => {
  const root = document.documentElement;
  root.style.colorScheme = theme.value;
  if (theme.value !== DARK_THEME) {
    root.classList.remove(DARK_THEME);
  } else {
    root.classList.add(DARK_THEME);
  }
});

watch([localTheme, systemTheme], ([currentLocalTheme, currentSystemTheme]) => {
  theme.value = currentLocalTheme || currentSystemTheme;
});

provide(themeInjectionKey, {
  theme,
  setTheme,
});
</script>
