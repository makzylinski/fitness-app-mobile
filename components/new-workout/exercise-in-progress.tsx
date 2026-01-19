import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "../ui/themed-view";
import SingleExerciseInProgress from "./single-exercise-in-progress";

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

export default function ExerciseInProgress() {
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
  return (
    <ScrollView>
      {exercises.map((exercise, idx) => (
        <SingleExerciseInProgress
          key={idx}
          exercise={exercise}
          onAddSet={() => addSet(idx)}
          setExercises={setExercises}
          exerciseIndex={idx}
        ></SingleExerciseInProgress>
      ))}
      <ThemedView style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
});
