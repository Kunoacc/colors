import type { InjectionKey, Ref } from "vue";

type ColorProvider = {
  colors: Ref<[]>;
  setColors: (value: any) => void;
  activeColor: Ref<number>;
  getPreviousColor: () => number;
};

type ThemeProvider = {
  theme: Ref<string>;
  setTheme: (value: string) => void;
};

export const colorInjectionKey = Symbol() as InjectionKey<ColorProvider>;

export const themeInjectionKey = Symbol() as InjectionKey<ThemeProvider>;
