import { useState } from "react";

export const useMeal = () => {
  const onOpenScanner = () => setScannerVisible(true);
  const onAddMeal = () => console.log("on Add Meal");
  const [scannerVisible, setScannerVisible] = useState(false);
  const [openMealIndexes, setOpenMealIndexes] = useState<number[]>([]);

  return {
    onOpenScanner,
    onAddMeal,
    scannerVisible,
    setScannerVisible,
    openMealIndexes,
    setOpenMealIndexes,
  };
};
