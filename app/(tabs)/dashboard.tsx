import CalorieSummary from "@/components/dashboard/calorie-summary";
import { StyleSheet } from "react-native";
import { ThemedText } from "../../components/ui/themed-text";
import { ThemedView } from "../../components/ui/themed-view";

export default function Dashboard() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Dashboard works!</ThemedText>
      <CalorieSummary></CalorieSummary>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
