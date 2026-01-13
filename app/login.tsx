import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import ThemedButton from "../components/ui/themed-button";
import { ThemedInput } from "../components/ui/themed-input";
import { ThemedText } from "../components/ui/themed-text";
import { ThemedView } from "../components/ui/themed-view";

export default function Login() {
  const accent = useThemeColor({}, "accent");
  const color = useThemeColor({}, "inputLabel");
  const primaryColor = useThemeColor({}, "primaryColor");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.headerContainer}>
          <View
            style={[styles.iconContainer, { backgroundColor: primaryColor }]}
          >
            <Ionicons name="barbell" size={48} color="#1A1A1A" />
          </View>
          <ThemedText style={styles.header}>Nazwa</ThemedText>
          <ThemedText style={[{ color }, styles.subheader]}>
            Strength & Nutrition
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.formContainer}>
          <ThemedInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            label="Email"
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
          <ThemedText style={[{ color }, styles.resetPassword]}>
            Forgot Password?
          </ThemedText>
        </ThemedView>
        <ThemedButton
          style={styles.button}
          title="Log In"
          onPress={() => null}
        />
        <ThemedView style={styles.signUpSection}>
          <ThemedText style={[{ color }, styles.slogan]}>
            Don&apos;t have an account?{" "}
          </ThemedText>
          <ThemedText style={[{ color: accent }, styles.cta]}>
            Sign Up
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
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
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  header: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 32,
    letterSpacing: 2,
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "400",
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
  resetPassword: {
    fontSize: 14,
    alignSelf: "flex-end",
    marginTop: 4,
    marginBottom: 20,
  },
  button: {
    marginBottom: 30,
    borderRadius: 16,
    paddingVertical: 18,
  },
  signUpSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cta: {
    fontWeight: "700",
    fontSize: 16,
  },
  slogan: {
    fontSize: 16,
    fontWeight: "400",
  },
});
