import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import ThemedCard from "../ui/themed-card";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function RecentWorkouts() {
  const primaryColor = useThemeColor({}, "primaryColor");

  return (
    <ThemedView>
      <ThemedView style={styles.headerContainer}>
        <ThemedText style={styles.header}>Recent Workouts</ThemedText>
        <ThemedText style={{ color: primaryColor }}>View All</ThemedText>
      </ThemedView>
      <ThemedCard style={styles.container}></ThemedCard>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontWeight: 700,
    fontSize: 20,
  },
  container: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 16,
  },
});
