import { useThemeColor } from "@/hooks/use-theme-color";
import { useState } from "react";
import { StyleSheet } from "react-native";
import ThemedButton from "../components/ui/themed-button";
import { ThemedInput } from "../components/ui/themed-input";
import { ThemedText } from "../components/ui/themed-text";
import { ThemedView } from "../components/ui/themed-view";

export default function Login() {
  const color = useThemeColor({}, "inputLabel");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <ThemedInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          label="Email"
          onChangeText={(name) => setEmail(name)}
        />
        <ThemedInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          label="Password"
          onChangeText={(name) => setPassword(name)}
        />
        <ThemedText style={styles.resetPassword}>
          Forgot your password?
        </ThemedText>
      </ThemedView>
      <ThemedButton
        style={styles.button}
        title="Log in"
        onPress={() => null}
      ></ThemedButton>
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
  input: {
    width: 150,
    borderRadius: 10,
    padding: 15,
    fontWeight: 600,
    fontSize: 14,
  },
  resetPassword: {
    fontSize: 12,
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  button: {
    marginVertical: 20,
  },
});
