import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function InputSearch() {
  const [searchText, setSearchText] = useState("");

  return (
    <TextInput
      style={styles.input}
      placeholder="Search exercise..."
      onChangeText={(text) => setSearchText(text)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    color: "white",
  },
});
