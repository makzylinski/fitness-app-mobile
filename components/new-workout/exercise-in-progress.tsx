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
  bottomSpacer: {
    height: 80,
  },
});
