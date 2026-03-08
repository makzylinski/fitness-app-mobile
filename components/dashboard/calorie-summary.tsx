import { UseCalorieSummary } from "@/hooks/use-calorie-summary";
import { useThemeColor } from "@/hooks/use-theme-color";
import PieChart from "@/shared/components/pie-chart";
import { StyleSheet } from "react-native";
import ThemedButton from "../ui/themed-button";
import ThemedCard from "../ui/themed-card";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";
import CalorieProgressBar from "./calorie-progress-bar";
import MacrosSection from "./macros-section";

export default function CalorieSummary() {
  const backgroundColor = useThemeColor("inputBackground");
  const borderBottomColor = useThemeColor("inputBorder");

  const { onLogMeal, macrosData } = UseCalorieSummary();

  return (
    <ThemedView>
      <ThemedText style={styles.header}>Today&apos;s Clorie Summary</ThemedText>
      <ThemedCard style={styles.container}>
        <ThemedView
          style={[
            { backgroundColor, borderBottomColor },
            styles.caloriesSection,
          ]}
        >
          <PieChart></PieChart>
          <CalorieProgressBar></CalorieProgressBar>
        </ThemedView>
        <ThemedView style={[{ backgroundColor }, styles.macrosSection]}>
          {macrosData.map((macro, index) => (
            <MacrosSection
              key={index}
              name={macro.name}
              color={macro.color}
              actualValue={macro.actualValue}
              maxValue={macro.maxValue}
            ></MacrosSection>
          ))}
        </ThemedView>
        <ThemedButton
          title="Log Meal"
          onPress={() => onLogMeal()}
        ></ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 700,
    fontSize: 20,
  },
  container: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 16,
  },
  caloriesSection: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  macrosSection: {
    marginBottom: 20,
  },
});
