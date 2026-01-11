import { useThemeColor } from "@/hooks/use-theme-color";
import ProgressBar from "@/shared/components/progress-bar";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function CalorieProgressBar() {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView style={[{ backgroundColor }, styles.container]}>
      <ThemedView style={styles.caloriesConsumed}>
        <ThemedView style={[{ backgroundColor }, styles.counter]}>
          <ThemedText style={styles.consumed}>1450</ThemedText>
          <ThemedText style={styles.calorieLimit}>/ 2500 kcal</ThemedText>
        </ThemedView>
        <ProgressBar></ProgressBar>
        <ThemedView style={[{ backgroundColor }]}>
          <ThemedText>1050 kcal remaining</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  caloriesConsumed: {},
  consumed: {
    fontWeight: 700,
    fontSize: 22,
  },
  calorieLimit: {},
  counter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
