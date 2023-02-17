const colorPatterns = {
  hex: /^#[0-9a-f]{3,8}$/i,
  rgb: /^rgba?\([^)]+\)$/i,
  hsl: /^hsla?\([^)]+\)$/i,
  hwb: /^hwb\([^)]+\)$/i,
  cmyk: /^device-cmyk\([^)]+\)$/i,
  lch: /^lch\([^)]+\)$/i,
  css: /^[a-z]+$/i,
};

export type ColorModels = keyof typeof colorPatterns;

const colorMatcher = (color: string, model: ColorModels) => {
  return !!color.match(colorPatterns[model]);
};

export default colorMatcher;
