import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { StyleSheet } from "react-native";

export default function SignUp() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <ThemedText style={styles.header}>Create Account</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  header: {
    fontWeight: "700",
    fontSize: 26,
    letterSpacing: 2,
    marginBottom: 8,
  },
});
