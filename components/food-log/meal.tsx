import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function Meal() {
  const backgroundColor = useThemeColor({}, "inputBackground");
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ backgroundColor }, styles.card]}>
        <ThemedView style={[styles.info]}>
          <ThemedView style={[{ backgroundColor }]}>
            <ThemedText>Breakfast</ThemedText>
            <ThemedText>8:30</ThemedText>
          </ThemedView>

          <ThemedView style={[{ backgroundColor }]}>
            <ThemedText style={styles.kalories}>560</ThemedText>
            <ThemedText style={styles.macros}>P: 24g F: 17g C: 68g</ThemedText>
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
  action: {},
  kalories: {},
  macros: {},
});
