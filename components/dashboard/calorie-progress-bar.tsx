import { useThemeColor } from "@/hooks/use-theme-color";
import ProgressBar from "@/shared/components/progress-bar";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function CalorieProgressBar() {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const color = useThemeColor({}, "inputLabel");
  const primaryColor = useThemeColor({}, "primaryColor");

  return (
    <ThemedView style={[{ backgroundColor }, styles.container]}>
      <ThemedView style={{ backgroundColor }}>
        <ThemedView style={[{ backgroundColor }, styles.counter]}>
          <ThemedText style={styles.consumed}>1450</ThemedText>
          <ThemedText style={{ color }}>/ 2500 kcal</ThemedText>
        </ThemedView>
        <ProgressBar color={primaryColor} progressWidth={54}></ProgressBar>
        <ThemedView style={[{ backgroundColor }]}>
          <ThemedText style={[{ color }]}>1050 kcal remaining</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
  },
  consumed: {
    fontWeight: 700,
    fontSize: 22,
  },
  counter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
