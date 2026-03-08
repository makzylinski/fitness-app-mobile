export const useMacrosSection = (actualValue: number, maxValue: number) => {
  const calculatePercentage = (): number => (actualValue / maxValue) * 100;

  return { calculatePercentage };
};
