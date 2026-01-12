import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import ThemedButton from "../components/ui/themed-button";
import { ThemedInput } from "../components/ui/themed-input";
import { ThemedText } from "../components/ui/themed-text";
import { ThemedView } from "../components/ui/themed-view";

export default function Login() {
  const color = useThemeColor({}, "inputLabel");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <ThemedText>icon</ThemedText>
        <ThemedText style={styles.header}>name</ThemedText>
        <ThemedText style={[{ color }, styles.subheader]}>
          Strength & Nutrition
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedInput></ThemedInput>
        <ThemedInput></ThemedInput>
      </ThemedView>
      <ThemedButton title="Log in" onPress={() => null}></ThemedButton>
      <ThemedView>
        <ThemedText>Don&apos;t have an acoount?</ThemedText>
        <ThemedText>Sing Up</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  header: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 24,
    paddingBottom: 12,
  },
  subheader: {},
});
