import { ThemedInput } from "@/components/themed-input";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function InputSearch() {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const [searchText, setSearchText] = useState("");
  const exercises: string[] = [
    //TODO: this is only testing data, will fetch it from server later
    "Bench Press",
    "Romanian Dead Lift",
    "Squats",
    "Dead Lift",
    "Leg Curls",
  ];

  const filteredExercises = exercises.filter((exercise) =>
    exercise.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ThemedView>
      <ThemedInput
        style={styles.input}
        placeholder="Search exercise..."
        onChangeText={(text: string) => setSearchText(text)}
        label="Workout name"
      />

      {searchText.length > 0 &&
        filteredExercises.map((exercise, index) => (
          <ThemedText
            key={index}
            style={[styles.listItem, { backgroundColor }]}
          >
            {exercise}
          </ThemedText>
        ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  // TODO: move this to separate file
  input: {
    height: 40,
    width: 300,
    borderRadius: 10,
    padding: 10,
    fontWeight: 600,
    fontSize: 12,
  },
  listItem: {
    width: 300,
    color: "white",
    borderWidth: 1,
    alignSelf: "center",
    padding: 10,
  },
});
