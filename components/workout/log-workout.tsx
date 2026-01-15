import { ThemedInput } from "@/components/ui/themed-input";
import { ThemedView } from "@/components/ui/themed-view";
import Exercises from "@/components/workout/exercises";
import { useThemeColor } from "@/hooks/use-theme-color";
import Notes from "@/shared/components/notes";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { IconSymbol } from "../ui/icon-symbol";
import ThemedCard from "../ui/themed-card";

export default function LogWorkout() {
  const [notes, setNotes] = useState("");

  const [workoutName, setWorkoutName] = useState("Upper Body Workout");
  const inputLabelColor = useThemeColor({}, "inputLabel");
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {/* <InputSearch /> 
        TODO: this is the search workout input that shall be used in Exercises section
      */}
        <ThemedCard style={styles.card}>
          <ThemedView>
            <ThemedInput
              style={styles.input}
              placeholder="Lower Body Workout"
              value={workoutName}
              onChangeText={(name) => setWorkoutName(name)}
            />
            <Notes
              notes={notes}
              setNotes={setNotes}
              placeholder="Add session notes (e.g., focus on slow essentrics)..."
            />
          </ThemedView>
          <ThemedView style={{ backgroundColor }}>
            <IconSymbol
              size={24}
              name="pencil"
              style={{ paddingTop: 8 }}
              color={inputLabelColor}
            />
          </ThemedView>
        </ThemedCard>

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
  card: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    borderRadius: 10,
    padding: 10,
    fontWeight: 600,
    fontSize: 22,
  },
});
