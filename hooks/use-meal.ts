import { useState } from "react";

export const useMeal = () => {
  const onOpenScanner = () => setScannerVisible(true);
  const onAddMeal = () => console.log("on Add Meal");
  const [scannerVisible, setScannerVisible] = useState(false);
  const [openMealIndexes, setOpenMealIndexes] = useState<number[]>([]);
  const [lastScan, setLastScan] = useState<{
    type: any;
    data: any;
  } | null>(null);

  const handleScan = (type: any, data: any) => {
    setLastScan({ type, data });
    setScannerVisible(false);
  };

  const toggleMeal = (index: number) => {
    if (openMealIndexes.includes(index)) {
      setOpenMealIndexes(openMealIndexes.filter((i) => i !== index));
    } else {
      setOpenMealIndexes([...openMealIndexes, index]);
    }
  };

  return {
    onOpenScanner,
    onAddMeal,
    scannerVisible,
    setScannerVisible,
    openMealIndexes,
    lastScan,
    handleScan,
    toggleMeal,
  };
};
