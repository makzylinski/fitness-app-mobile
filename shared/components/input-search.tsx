import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputSearch() {
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
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search exercise..."
        onChangeText={(text) => setSearchText(text)}
      />

      {searchText.length > 0 &&
        filteredExercises.map((exercise, index) => (
          <Text key={index} style={styles.listItem}>
            {exercise}
          </Text>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // TODO: move this to separate file
  input: {
    height: 40,
    width: 250,
    margin: 20,
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    color: "white",
  },
  listItem: {
    width: 250,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "center",
    padding: 10,
  },
});
