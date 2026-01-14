import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ThemedView } from "../ui/themed-view";
import ExerciseRow, { Exercise } from "./exercise-row";

export default function WorkoutSummary() {
  const exercises: Exercise[] = [
    {
      id: 1,
      name: "Bench Press",
      exercises: [
        {
          weight: 120,
          weightUnit: "kg",
          reps: 8,
        },
        {
          weight: 100,
          weightUnit: "kg",
          reps: 10,
        },
        {
          weight: 80,
          weightUnit: "kg",
          reps: 12,
        },
      ],
    },
  ]; //TODO: to be changed when API is implemented

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item }) => <ExerciseRow item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
});
