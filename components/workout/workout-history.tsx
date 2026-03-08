import { useThemeColor } from "@/hooks/use-theme-color";
import { useWorkoutHistory } from "@/hooks/use-workout-history";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ThemedCard from "../ui/themed-card";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";
import WorkoutSummary from "./workout-summary";

export default function WorkoutHistory() {
  const { openWorkoutIndexes, historyWorkouts, getTotalSets, toggleWorkouts } =
    useWorkoutHistory();

  const primaryColor = useThemeColor("primaryColor");
  const accentColor = useThemeColor("accent");
  const secondaryText = useThemeColor("inputLabel");

  const formatDate = (date: Date) => {
    return date
      .toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
      .toUpperCase();
  };

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {historyWorkouts.map((workout, workoutIndex) => (
          <ThemedView key={workoutIndex}>
            <ThemedText style={[styles.dateHeader, { color: secondaryText }]}>
              {formatDate(workout.date)}
            </ThemedText>
            <ThemedCard style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.headerLeft}>
                  <View
                    style={[styles.badge, { backgroundColor: primaryColor }]}
                  >
                    <Text style={styles.badgeText}>{workout.timeOfDay}</Text>
                  </View>
                  <ThemedText
                    style={[styles.timeText, { color: secondaryText }]}
                  >
                    {workout.time}
                  </ThemedText>
                </View>
                <Pressable onPress={() => toggleWorkouts(workoutIndex)}>
                  <Ionicons
                    name={
                      openWorkoutIndexes.includes(workoutIndex)
                        ? "chevron-down"
                        : "chevron-up"
                    }
                    size={24}
                    color={secondaryText}
                  />
                </Pressable>
              </View>
              <ThemedText style={styles.workoutName}>{workout.name}</ThemedText>
              <ThemedView style={styles.divider}></ThemedView>
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Ionicons
                    name="fitness-outline"
                    size={18}
                    color={accentColor}
                  />
                  <ThemedText
                    style={[styles.statText, { color: secondaryText }]}
                  >
                    {workout.exercises.length} Exercises
                  </ThemedText>
                </View>
                <View style={styles.statDot} />
                <View style={styles.statItem}>
                  <Ionicons
                    name="repeat-outline"
                    size={18}
                    color={accentColor}
                  />
                  <ThemedText
                    style={[styles.statText, { color: secondaryText }]}
                  >
                    {getTotalSets(workout.exercises)} Sets
                  </ThemedText>
                </View>
              </View>
              {openWorkoutIndexes.includes(workoutIndex) && (
                <WorkoutSummary></WorkoutSummary>
              )}
            </ThemedCard>
          </ThemedView>
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dateHeader: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: 12,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  timeText: {
    fontSize: 14,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 8,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statText: {
    fontSize: 14,
  },
  statDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#666",
    marginHorizontal: 12,
  },
});
