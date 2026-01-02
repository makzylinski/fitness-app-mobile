import { useState } from "react";
import { StyleSheet } from "react-native";
import SingleExercise from "./single-exercise";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export default function Exercises() {
  const [exercisesList, setExercisesList] = useState<
    { id: number; name: string; description: string }[]
  >([
    {
      id: 1,
      name: "Bench Press",
      description: "Just lay down and press the bench",
    },
    {
      id: 2,
      name: "Dumbbell Curl",
      description: "lay down on the floor and cry a lil bit, idk",
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
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 14,
    fontWeight: 700,
  },
  counter: {
    fontSize: 10,
    color: "#B0B0B0",
  },
  list: {
    flexDirection: "column",
  },
});
