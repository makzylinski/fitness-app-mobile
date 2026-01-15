import { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";
import SingleExercise from "./single-exercise";

export type Exercise = {
  id: number;
  name: string;
  description: string;
  exercises: { weight: number; weightUnit: string; reps: number }[];
};

export default function Exercises() {
  const [exercisesList] = useState<Exercise[]>([
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
  ]); // TODO: refactor this to separate type

  return (
    <ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.header}>Exercises</ThemedText>
        {exercisesList.length > 0 && (
          <ThemedText style={styles.counter}>
            {exercisesList.length} added
          </ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.list}>
        {exercisesList.map((exercise, index) => (
          <SingleExercise
            key={exercise.id}
            exercise={exercise}
          ></SingleExercise>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 14,
    fontWeight: 700,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "dashed",
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  counter: {
    fontSize: 10,
    color: "#B0B0B0",
  },
  list: {
    flexDirection: "column",
  },
});
