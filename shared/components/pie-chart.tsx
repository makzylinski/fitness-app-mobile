import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";

export default function PieChart() {
  const backgroundColor = useThemeColor({}, "inputBackground");

  const data = {
    data: [0.75],
  };

  const chartConfig = {
    backgroundGradientFrom: backgroundColor,
    backgroundGradientTo: backgroundColor,
    color: (opacity = 1) => {
      return `rgba(46, 196, 182, ${opacity})`;
    },
    strokeWidth: 10,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <ProgressChart
      data={data}
      width={180}
      height={180}
      strokeWidth={16}
      radius={60}
      chartConfig={chartConfig}
      hideLegend={true}
    />
  );
}
