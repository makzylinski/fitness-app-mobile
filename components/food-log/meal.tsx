import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function Meal() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Elo</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
