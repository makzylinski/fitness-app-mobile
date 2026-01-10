import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function CalorieSummary() {
  return (
    <ThemedView>
      <ThemedText style={styles.header}>Today&apos;s Clorie Summary</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 700,
    fontSize: 24,
  },
});
