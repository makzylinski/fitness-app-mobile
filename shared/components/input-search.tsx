import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputSearch() {
  const [searchText, setSearchText] = useState("");
  const exerciseItems = ["te", "we"];

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search exercise..."
        onChangeText={(text) => setSearchText(text)}
      />

      {exerciseItems.map((exercise, index) => (
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
