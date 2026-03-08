import { useThemeColor } from "./use-theme-color";

export const UseCalorieSummary = () => {
  const accent = useThemeColor("accent");
  const primaryColor = useThemeColor("primaryColor");
  const secondaryColor = useThemeColor("secondaryColor");

  const macrosData = [
    {
      name: "protein",
      color: `${primaryColor}`,
      actualValue: 100,
      maxValue: 180,
    },
    {
      name: "carbs",
      color: `${accent}`,
      actualValue: 80,
      maxValue: 260,
    },
    {
      name: "fats",
      color: `${secondaryColor}`,
      actualValue: 220,
      maxValue: 320,
    },
  ];

  const onLogMeal = () => console.log("log meal");

  return {
    onLogMeal,
    macrosData,
  };
};
