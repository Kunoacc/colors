import type { InjectionKey, Ref } from "vue";

type ColorProvider = {
  colors: Ref<[]>;
  setColors: (value: any) => void;
  activeColor: Ref<number>;
  getPreviousColor: () => number;
};

export const colorInjectionKey = Symbol() as InjectionKey<ColorProvider>;
