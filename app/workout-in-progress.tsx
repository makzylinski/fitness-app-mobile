import Timer from "@/shared/components/timer";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ThemedCard from "../components/ui/themed-card";
import { ThemedText } from "../components/ui/themed-text";
import { ThemedView } from "../components/ui/themed-view";
import { useThemeColor } from "../hooks/use-theme-color";

const exercisesInitial = [
  {
    name: "Bench Press (Barbell)",
    icon: "🛠️",
    sets: [{ id: 1, previous: "80 kg x 8", kg: "0", reps: "0" }],
  },
  {
    name: "Pull-ups",
    icon: "🛠️",
    sets: [],
  },
];

export default function WorkoutInProgress() {
  const [exercises, setExercises] = useState(exercisesInitial);

  const addSet = (exerciseIdx: number) => {
    setExercises((prev) => {
      const updated = [...prev];
      updated[exerciseIdx].sets.push({
        id: updated[exerciseIdx].sets.length + 1,
        previous: "",
        kg: "0",
        reps: "0",
      });
      return updated;
    });
  };

  // theme colors
  const cardBg = useThemeColor({}, "inputBackground");
  const cardIconBg = useThemeColor({}, "primaryColor");
  const cardIconColor = useThemeColor({}, "background");
  const mainBg = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const lighterColorFont = useThemeColor({}, "inputLabel");
  const lightFontColor = useThemeColor({}, "inputBorder");

  return (
    <ThemedView style={[styles.container, { backgroundColor: mainBg }]}>
      {/* Header */}
      <ThemedView style={styles.header}>
        <ThemedView>
          <ThemedText style={styles.headerTitle}>
            Upper Body Hypertrophy
          </ThemedText>
          <ThemedView style={styles.headerTimerRow}>
            <Timer timerStart={false} timerStop={false}></Timer>
          </ThemedView>
        </ThemedView>
        <TouchableOpacity
          style={[{ backgroundColor: cardBg }, styles.finishButton]}
        >
          <ThemedText style={styles.finishButtonText}>FINISH</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Exercises List */}
      <ScrollView>
        {exercises.map((exercise, idx) => (
          <ThemedCard key={exercise.name}>
            <ThemedView style={styles.exerciseHeader}>
              <ThemedView
                style={[
                  styles.exerciseIconBox,
                  { backgroundColor: cardIconBg },
                ]}
              >
                <ThemedText
                  style={[styles.exerciseIcon, { color: cardIconColor }]}
                >
                  {exercise.icon}
                </ThemedText>
              </ThemedView>
              <ThemedText style={[styles.exerciseName, { color: textColor }]}>
                {exercise.name}
              </ThemedText>
            </ThemedView>
            {exercise.sets.length > 0 ? (
              <ThemedView>
                <ThemedView style={styles.setsHeaderRow}>
                  <ThemedText
                    style={[{ color: lighterColorFont }, styles.setsHeaderText]}
                  >
                    SET
                  </ThemedText>
                  <ThemedText
                    style={[
                      { color: lighterColorFont },
                      styles.setsHeaderText,
                      styles.setsHeaderPrevious,
                    ]}
                  >
                    PREVIOUS
                  </ThemedText>
                  <ThemedText
                    style={[{ color: lighterColorFont }, styles.setsHeaderText]}
                  >
                    KG
                  </ThemedText>
                  <ThemedText
                    style={[{ color: lighterColorFont }, styles.setsHeaderText]}
                  >
                    REPS
                  </ThemedText>
                </ThemedView>
                {exercise.sets.map((set, setIdx) => (
                  <ThemedView key={set.id} style={styles.setRow}>
                    <ThemedText style={[styles.setId, { color: textColor }]}>
                      {set.id}
                    </ThemedText>
                    <ThemedText
                      style={[styles.setPrevious, { color: textColor }]}
                    >
                      {set.previous}
                    </ThemedText>
                    <TextInput
                      style={[
                        styles.inputKg,
                        { color: textColor, backgroundColor: cardBg },
                      ]}
                      value={set.kg}
                      keyboardType="numeric"
                      onChangeText={(text) => {
                        setExercises((prev) => {
                          const updated = [...prev];
                          updated[idx].sets[setIdx].kg = text;
                          return updated;
                        });
                      }}
                    />
                    <TextInput
                      style={[
                        styles.inputReps,
                        { color: textColor, backgroundColor: cardBg },
                      ]}
                      value={set.reps}
                      keyboardType="numeric"
                      onChangeText={(text) => {
                        setExercises((prev) => {
                          const updated = [...prev];
                          updated[idx].sets[setIdx].reps = text;
                          return updated;
                        });
                      }}
                    />
                  </ThemedView>
                ))}
                <TouchableOpacity
                  onPress={() => addSet(idx)}
                  style={[styles.addSetButton, { backgroundColor: mainBg }]}
                >
                  <ThemedText style={[styles.addSetButtonText]}>
                    + ADD SET
                  </ThemedText>
                </TouchableOpacity>
              </ThemedView>
            ) : (
              <ThemedText
                style={[{ color: lightFontColor }, styles.noSetsText]}
              >
                No sets added yet
              </ThemedText>
            )}
          </ThemedCard>
        ))}
        <ThemedView style={styles.bottomSpacer} />
      </ScrollView>

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
  exerciseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  exerciseIconBox: {
    borderRadius: 8,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  exerciseIcon: {
    fontSize: 20,
  },
  exerciseName: {
    fontWeight: 700,
    fontSize: 18,
  },
  setsHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  setsHeaderText: {
    width: 40,
  },
  setsHeaderPrevious: {
    width: 90,
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  setId: {
    width: 40,
  },
  setPrevious: {
    width: 90,
  },
  inputKg: {
    width: 40,
    borderRadius: 6,
    padding: 4,
    marginRight: 8,
  },
  inputReps: {
    width: 40,
    borderRadius: 6,
    padding: 4,
  },
  addSetButton: {
    marginTop: 8,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  addSetButtonText: {
    fontWeight: 700,
  },
  noSetsText: {
    fontStyle: "italic",
    marginTop: 8,
  },
  bottomSpacer: {
    height: 80,
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
