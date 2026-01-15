import { ThemedInput } from "@/components/ui/themed-input";
import { ThemedView } from "@/components/ui/themed-view";
import Exercises from "@/components/workout/exercises";
import Notes from "@/shared/components/notes";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function LogWorkout() {
  const [notes, setNotes] = useState("");

  const [workoutName, setWorkoutName] = useState("");

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {/* <InputSearch /> 
        TODO: this is the search workout input that shall be used in Exercises section
      */}
        <ThemedInput
          style={styles.input}
          placeholder="Upper Body Workout"
          value={workoutName}
          label="Workout name"
          onChangeText={(name) => setWorkoutName(name)}
        />

        <Notes
          notes={notes}
          setNotes={setNotes}
          label="Notes"
          placeholder="How are you feeling today?"
        />

        <Exercises></Exercises>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 150,
    borderRadius: 10,
    padding: 10,
    fontWeight: 600,
    fontSize: 12,
  },
});
