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
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const insets = useSafeAreaInsets();

  const color = useThemeColor({}, "inputLabel");
  const primaryColor = useThemeColor({}, "primaryColor");
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <ScrollView>
      <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
        <ThemedView style={styles.headerContainer}>
          <ThemedText style={styles.header}>Create Account</ThemedText>
        </ThemedView>

        <ThemedView style={styles.formContainer}>
          <ThemedInput
            style={styles.roundedInput}
            placeholder="Enter your full name"
            value={name}
            label="Full Name"
            labelStyle={styles.inputLabel}
            onChangeText={(text) => setName(text)}
          />
          <ThemedInput
            style={styles.roundedInput}
            placeholder="example@email.com"
            value={email}
            label="Email Address"
            labelStyle={styles.inputLabel}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <ThemedInput
            style={styles.roundedInput}
            placeholder="Create a password"
            value={password}
            label="Password"
            labelStyle={styles.inputLabel}
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            rightIcon={
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={{ paddingBottom: 0 }}
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
            style={styles.roundedInput}
            placeholder="Repeat your password"
            value={confirmPassword}
            label="Confirm Password"
            labelStyle={styles.inputLabel}
            secureTextEntry={!showConfirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            rightIcon={
              <Pressable
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ paddingBottom: 0 }}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={20}
                  color={color}
                />
              </Pressable>
            }
          />
          <ThemedView style={styles.termsContainer}>
            <Pressable
              onPress={() => setAcceptedTerms(!acceptedTerms)}
              style={({ pressed }) => [
                styles.checkbox,
                acceptedTerms && styles.checkboxChecked,
                pressed && { opacity: 0.7 },
              ]}
            >
              {acceptedTerms && (
                <Ionicons name="checkmark" size={18} color={primaryColor} />
              )}
            </Pressable>
            <ThemedText style={styles.termsText}>
              I agree to{" "}
              <ThemedText
                style={{ color: primaryColor, textDecorationLine: "underline" }}
              >
                Terms & Conditions
              </ThemedText>
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.bottomContainer}>
          <ThemedButton
            style={
              !acceptedTerms
                ? [styles.button, { opacity: 0.5 }]
                : [styles.button]
            }
            title="Sign Up"
            onPress={
              acceptedTerms
                ? () => {
                    console.log();
                  }
                : () => {
                    console.log();
                  }
            }
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
  roundedInput: {
    borderRadius: 24,
    padding: 16,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  inputLabel: {
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 6,
    textTransform: "none",
    letterSpacing: 0.2,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#666",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "rgba(0,0,0,0.12)",
    borderColor: "#1abc9c",
  },
  termsText: {
    fontSize: 14,
    color: "#aaa",
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
