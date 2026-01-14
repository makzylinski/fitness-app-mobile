import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ThemedView } from "../ui/themed-view";
import ExerciseRow, { Exercise } from "./exercise-row";

export default function WorkoutSummary() {
  const exercises: Exercise[] = [
    {
      id: 1,
      name: "Bench Press (Barbell)",
      exercises: [
        {
          weight: 60,
          weightUnit: "kg",
          reps: 10,
        },
        {
          weight: 80,
          weightUnit: "kg",
          reps: 8,
        },
        {
          weight: 90,
          weightUnit: "kg",
          reps: 5,
          isPR: true,
        },
      ],
    },
    {
      id: 2,
      name: "Lat Pulldown (Cable)",
      exercises: [
        {
          weight: 45,
          weightUnit: "kg",
          reps: 12,
        },
        {
          weight: 52,
          weightUnit: "kg",
          reps: 10,
        },
      ],
    },
  ]; //TODO: to be changed when API is implemented

  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView style={[{ backgroundColor }, styles.container]}>
      <FlatList
        data={exercises}
        renderItem={({ item }) => <ExerciseRow item={item} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
