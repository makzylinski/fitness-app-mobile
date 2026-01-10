import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function CalorieSummary() {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView>
      <ThemedText style={styles.header}>Today&apos;s Clorie Summary</ThemedText>
      <ThemedView style={[{ backgroundColor }, styles.container]}>
        <ThemedText>Elo</ThemedText>
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
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
