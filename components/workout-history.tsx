import { useState } from "react";
import { StyleSheet } from "react-native";
import { Exercise } from "./exercises";
import { ThemedView } from "./themed-view";

export default function WorkoutHistory() {
  const [historyWorkouts, setHistoryWorkouts] = useState<
    [
      {
        date: Date;
        exercises: Exercise;
      }
    ]
  >();
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
        <ThemedView style={styles.headerDate}></ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 1,
    borderColor: "red",
  },
  card: {},
  headerDate: {},
});
