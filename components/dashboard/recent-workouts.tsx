import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";
import SingleRecentWorkout from "./single-recent-workout";

export default function RecentWorkouts() {
  const primaryColor = useThemeColor({}, "primaryColor");

  const recentWorkouts = [
    {
      name: "Upper Body Power",
      date: new Date(),
      duration: "45min",
      icon: "barbell-outline" as const,
    },
    {
      name: "Morning Run",
      date: new Date(2026, 9, 24),
      duration: "5.2 km",
      icon: "walk-outline" as const,
    },
    {
      name: "Yoga Flow",
      date: new Date(2026, 9, 22),
      duration: "30min",
      icon: "fitness-outline" as const,
    },
  ];

  return (
    <ThemedView>
      <ThemedView style={styles.headerContainer}>
        <ThemedText style={styles.header}>Recent Workouts</ThemedText>
        <ThemedText style={{ color: primaryColor }}>View All</ThemedText>
      </ThemedView>
      <SingleRecentWorkout workouts={recentWorkouts} />
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
