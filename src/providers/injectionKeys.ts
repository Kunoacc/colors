import type { InjectionKey, Ref } from "vue";
import type { Color } from "./ColorProvider.vue";

type ColorProvider = {
  colors: Ref<Array<Color>>;
  setColors: (value: any) => void;
  activeColor: Ref<number>;
  getPreviousColor: () => number | undefined;
};

type ThemeProvider = {
  theme: Ref<string>;
  setTheme: (value: string) => void;
};

export const colorInjectionKey = Symbol() as InjectionKey<ColorProvider>;

export const themeInjectionKey = Symbol() as InjectionKey<ThemeProvider>;
