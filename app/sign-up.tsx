import ThemedButton from "@/components/ui/themed-button";
import { ThemedInput } from "@/components/ui/themed-input";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const color = useThemeColor({}, "inputLabel");
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <ThemedText style={styles.header}>Create Account</ThemedText>
      </ThemedView>
      <ThemedView style={styles.formContainer}>
        <ThemedInput
          style={styles.input}
          placeholder="Joe Doe"
          value={name}
          label="Name"
          onChangeText={(text) => setName(text)}
        />
        <ThemedInput
          style={styles.input}
          placeholder="example@test.com"
          value={email}
          label="Email Address"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <ThemedInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          label="Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          rightIcon={
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={{ paddingBottom: 14 }}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color={color}
              />
            </Pressable>
          }
        />
        <ThemedInput
          style={styles.input}
          placeholder="Repeat your Password"
          value={password}
          label="Confirm Password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          rightIcon={
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={{ paddingBottom: 14 }}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color={color}
              />
            </Pressable>
          }
        />
      </ThemedView>
      <ThemedButton style={styles.button} title="Log In" onPress={() => null} />
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
  formContainer: {
    flex: 1,
  },
  input: {
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    marginBottom: 30,
    borderRadius: 16,
    paddingVertical: 18,
  },
});
