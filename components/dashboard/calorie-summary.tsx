import { useThemeColor } from "@/hooks/use-theme-color";
import PieChart from "@/shared/components/pie-chart";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";
import CalorieProgressBar from "./calorie-progress-bar";
import MacrosSection from "./macros-section";

export default function CalorieSummary() {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView>
      <ThemedText style={styles.header}>Today&apos;s Clorie Summary</ThemedText>
      <ThemedView style={[{ backgroundColor }, styles.container]}>
        <ThemedView style={[{ backgroundColor }, styles.caloriesSection]}>
          <PieChart></PieChart>
          <CalorieProgressBar></CalorieProgressBar>
        </ThemedView>
        <ThemedView style={[{ backgroundColor }]}>
          <MacrosSection
            name="carbs"
            color="red"
            actualValue={120}
            maxValue={160}
          ></MacrosSection>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 700,
    fontSize: 24,
  },
  container: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 16,
  },
  caloriesSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
