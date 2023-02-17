const numberClamp = (number: number, minValue: number, maxValue: number) => {
  if (number < minValue) return minValue;
  if (number > maxValue) return maxValue;
  return number;
};

export default numberClamp;
