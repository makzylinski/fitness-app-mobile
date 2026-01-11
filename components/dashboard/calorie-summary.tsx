import { useThemeColor } from "@/hooks/use-theme-color";
import PieChart from "@/shared/components/pie-chart";
import { StyleSheet } from "react-native";
import ThemedButton from "../ui/themed-button";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";
import CalorieProgressBar from "./calorie-progress-bar";
import MacrosSection from "./macros-section";

export default function CalorieSummary() {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const accent = useThemeColor({}, "accent");
  const primaryColor = useThemeColor({}, "primaryColor");
  const secondaryColor = useThemeColor({}, "secondaryColor");
  const borderBottomColor = useThemeColor({}, "inputBorder");

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

  return (
    <ThemedView>
      <ThemedText style={styles.header}>Today&apos;s Clorie Summary</ThemedText>
      <ThemedView style={[{ backgroundColor }, styles.container]}>
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
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  macrosSection: {
    marginBottom: 20,
  },
});
