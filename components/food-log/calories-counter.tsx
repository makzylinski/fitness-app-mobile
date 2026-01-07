import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function CaloriesCounter() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>CaloriesCounter works!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
