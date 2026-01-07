import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function Meal() {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const fontColor = useThemeColor({}, "inputBorder");
  const lighterColorFont = useThemeColor({}, "inputLabel");
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ backgroundColor }, styles.card]}>
        <ThemedView style={[styles.info]}>
          <ThemedView style={[{ backgroundColor }, styles.mealInfo]}>
            <ThemedText style={styles.mealName}>Breakfast</ThemedText>
            <ThemedText style={[{ color: fontColor }]}>8:30</ThemedText>
          </ThemedView>

          <ThemedView style={[{ backgroundColor }, styles.mealInfo]}>
            <ThemedText style={styles.kalories}>560 kcal</ThemedText>
            {/* <ThemedText style={[{ color: lighterColorFont }, styles.macros]}> */}
            <ThemedText style={[{ color: lighterColorFont }, styles.macros]}>
              P: 24g
            </ThemedText>
            <ThemedText style={[{ color: lighterColorFont }, styles.macros]}>
              F: 17g
            </ThemedText>
            <ThemedText style={[{ color: lighterColorFont }, styles.macros]}>
              C: 68g
            </ThemedText>
            {/* </ThemedText> */}
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.action}></ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
  },
  info: {},
  mealInfo: {
    flexDirection: "row",
    gap: 10,
  },
  mealName: {
    fontWeight: 700,
    fontSize: 18,
  },
  action: {},
  kalories: {
    color: "#2EC4B6",
    fontWeight: 700,
  },
  macros: {
    fontSize: 14,
  },
});
