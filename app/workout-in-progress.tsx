import ExerciseInProgress from "@/components/new-workout/exercise-in-progress";
import { useTimer } from "@/hooks/useTimer";
import Timer from "@/shared/components/timer";
import { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../components/ui/themed-text";
import { ThemedView } from "../components/ui/themed-view";
import { useThemeColor } from "../hooks/use-theme-color";

export default function WorkoutInProgress() {
  const { isTimerActive, setIsTimerActive } = useTimer();

  const cardBg = useThemeColor({}, "inputBackground");
  const cardIconBg = useThemeColor({}, "primaryColor");
  const cardIconColor = useThemeColor({}, "background");
  const mainBg = useThemeColor({}, "background");

  useEffect(() => {
    if (!isTimerActive) {
      setIsTimerActive(true);
    }
  }, []);

  return (
    <ThemedView style={[styles.container, { backgroundColor: mainBg }]}>
      {/* Header */}
      <ThemedView style={styles.header}>
        <ThemedView>
          <ThemedText style={styles.headerTitle}>
            Upper Body Hypertrophy
          </ThemedText>
          <ThemedView style={styles.headerTimerRow}>
            <Timer></Timer>
          </ThemedView>
        </ThemedView>
        <TouchableOpacity
          style={[{ backgroundColor: cardBg }, styles.finishButton]}
        >
          <ThemedText style={styles.finishButtonText}>FINISH</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Exercises List */}
      <ExerciseInProgress></ExerciseInProgress>
      {/* Add Exercise Button */}
      <ThemedView style={styles.addExerciseContainer}>
        <TouchableOpacity
          style={[{ backgroundColor: cardIconBg }, styles.addExerciseButton]}
        >
          <ThemedText
            style={[{ color: cardIconColor }, styles.addExerciseButtonText]}
          >
            + ADD EXERCISE
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  headerTimerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  finishButton: {
    borderRadius: 16,
    paddingHorizontal: 18,
    alignSelf: "flex-start",
  },
  finishButtonText: {
    fontWeight: 700,
    paddingVertical: 8,
    fontSize: 14,
  },
  addSetButton: {
    marginTop: 8,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  addExerciseContainer: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  addExerciseButton: {
    borderRadius: 20,
    paddingVertical: 18,
    width: "90%",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addExerciseButtonText: {
    fontWeight: 700,
    fontSize: 18,
  },
});
