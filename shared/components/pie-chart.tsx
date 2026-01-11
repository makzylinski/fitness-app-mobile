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
      width={120}
      height={120}
      strokeWidth={12}
      radius={40}
      chartConfig={chartConfig}
      hideLegend={true}
    />
  );
}
