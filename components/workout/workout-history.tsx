import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";
import { Exercise } from "./exercises";

export default function WorkoutHistory() {
  const [historyWorkouts, setHistoryWorkouts] = useState<
    {
      date: Date;
      name: string;
      timeOfDay: string;
      time: string;
      exercises: Exercise[];
    }[]
  >([
    {
      date: new Date(),
      name: "Upper Body Power",
      timeOfDay: "Morning",
      time: "08:00",
      exercises: [
        {
          id: 1,
          name: "Bench Press",
          description: "Just lay down and press the bench",
          exercises: [
            {
              weight: 100,
              weightUnit: "kg",
              reps: 8,
            },
            {
              weight: 80,
              weightUnit: "kg",
              reps: 12,
            },
          ],
        },
        {
          id: 2,
          name: "Dumbbell Curl",
          description: "lay down on the floor and cry a lil bit, idk",
          exercises: [
            {
              weight: 20,
              weightUnit: "kg",
              reps: 12,
            },
          ],
        },
      ],
    },
    {
      date: new Date(2026, 0, 3), // 3 stycznia 2026
      name: "Lower Body Strength",
      timeOfDay: "Evening",
      time: "18:30",
      exercises: [
        {
          id: 3,
          name: "Squat",
          description: "Deep squats for leg power",
          exercises: [
            {
              weight: 120,
              weightUnit: "kg",
              reps: 10,
            },
            {
              weight: 100,
              weightUnit: "kg",
              reps: 15,
            },
          ],
        },
        {
          id: 4,
          name: "Leg Press",
          description: "Press those legs",
          exercises: [
            {
              weight: 200,
              weightUnit: "kg",
              reps: 12,
            },
            {
              weight: 180,
              weightUnit: "kg",
              reps: 15,
            },
          ],
        },
      ],
    },
  ]); //TODO: fetch data from API later

  const primaryColor = useThemeColor({}, "primaryColor");
  const accentColor = useThemeColor({}, "accent");
  const inputBackground = useThemeColor({}, "inputBackground");
  const secondaryText = useThemeColor({}, "inputLabel");

  const getTotalSets = (exercises: any[]) => {
    return exercises.reduce((total, ex) => total + ex.exercises.length, 0);
  };

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
          <View key={workoutIndex}>
            <ThemedText style={[styles.dateHeader, { color: secondaryText }]}>
              {formatDate(workout.date)}
            </ThemedText>
            <View style={[styles.card, { backgroundColor: inputBackground }]}>
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
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color={secondaryText}
                />
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
            </View>
          </View>
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
