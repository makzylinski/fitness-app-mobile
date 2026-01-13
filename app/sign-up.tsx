import ThemedButton from "@/components/ui/themed-button";
import { ThemedInput } from "@/components/ui/themed-input";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const color = useThemeColor({}, "inputLabel");
  const primaryColor = useThemeColor({}, "primaryColor");
  const textColor = useThemeColor({}, "text");

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.headerContainer}>
          <ThemedText style={styles.header}>Create Account</ThemedText>
        </ThemedView>

        <ThemedView style={styles.formContainer}>
          <ThemedInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            label="Full Name"
            onChangeText={(text) => setName(text)}
          />
          <ThemedInput
            style={styles.input}
            placeholder="example@email.com"
            value={email}
            label="Email Address"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <ThemedInput
            style={styles.input}
            placeholder="Create a password"
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
            placeholder="Repeat your password"
            value={confirmPassword}
            label="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            rightIcon={
              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ paddingBottom: 14 }}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={20}
                  color={color}
                />
              </Pressable>
            }
          />
        </ThemedView>

        <ThemedView style={styles.bottomContainer}>
          <ThemedButton
            style={styles.button}
            title="Sign Up"
            onPress={() => null}
          />

          <ThemedView style={styles.dividerContainer}>
            <ThemedView style={styles.divider} />
            <ThemedText style={styles.dividerText}>OR</ThemedText>
            <ThemedView style={styles.divider} />
          </ThemedView>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => null}
            activeOpacity={0.7}
          >
            <Ionicons name="logo-google" size={20} color={textColor} />
            <ThemedText style={styles.googleButtonText}>
              Sign up with Google
            </ThemedText>
          </TouchableOpacity>

          <ThemedView style={styles.loginContainer}>
            <ThemedText style={styles.loginText}>
              Already have an account?{" "}
              <TouchableOpacity onPress={() => router.push("/login")}>
                <ThemedText style={[styles.link, { color: primaryColor }]}>
                  Log In
                </ThemedText>
              </TouchableOpacity>
            </ThemedText>
          </ThemedView>
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
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
    position: "relative",
    width: "100%",
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "700",
    fontSize: 26,
    letterSpacing: 2,
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
  link: {
    fontWeight: "600",
  },
  bottomContainer: {
    marginTop: "auto",
  },
  button: {
    borderRadius: 16,
    paddingVertical: 18,
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#666",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#666",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: "#666",
    marginBottom: 20,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
  loginContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    fontSize: 14,
  },
});
