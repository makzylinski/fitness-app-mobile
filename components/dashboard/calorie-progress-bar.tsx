import { useThemeColor } from "@/hooks/use-theme-color";
import ProgressBar from "@/shared/components/progress-bar";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function CalorieProgressBar() {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView style={[{ backgroundColor }, styles.container]}>
      <ThemedView style={[{ backgroundColor }]}>
        <ThemedText>1450</ThemedText>
        <ThemedText>/2500 kcal</ThemedText>
      </ThemedView>
      <ProgressBar></ProgressBar>

      <ThemedView style={[{ backgroundColor }]}>
        <ThemedText>1050 kcal remaining</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
