import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function ActiveWorkoutWidget() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>ActiveWorkoutWidget works!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
