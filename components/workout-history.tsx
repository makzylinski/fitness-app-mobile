import { StyleSheet } from "react-native";
import { ThemedView } from "./themed-view";

export default function WorkoutHistory() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {},
});
