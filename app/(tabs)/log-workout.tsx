import { ThemedView } from "@/components/themed-view";
import InputSearch from "@/shared/components/input-search";
import { StyleSheet, Text } from "react-native";

export default function LogWorkout() {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.titleText}>Log your workout</Text>
      <InputSearch />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    textAlign: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
