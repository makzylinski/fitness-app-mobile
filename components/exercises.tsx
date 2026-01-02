import { useState } from "react";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export default function Exercises() {
  const [exercisesCount, setExercisesCount] = useState(1);
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.header}>Exercises</ThemedText>
      {exercisesCount > 0 && (
        <ThemedText style={styles.counter}>{exercisesCount} added</ThemedText>
      )}
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
});
