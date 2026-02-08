import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export default function VerificationCode() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const subtitleColor = useThemeColor({}, "inputLabel");
  const codeInputBg = useThemeColor({}, "inputBackground");
  const codeInputBorder = useThemeColor({}, "inputBorder");
  const accentColor = useThemeColor({}, "accent");
  const verifyBtnBg = useThemeColor({}, "primaryColor");
  const verifyBtnText = useThemeColor({}, "background");
  const secureTextColor = useThemeColor({}, "icon");
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (text: string, idx: number) => {
    if (/^\d?$/.test(text)) {
      const newCode = [...code];
      newCode[idx] = text;
      setCode(newCode);
      if (text && idx < 4) {
        // @ts-ignore
        inputs[idx + 1].current?.focus();
      }
      if (!text && idx > 0) {
        // @ts-ignore
        inputs[idx - 1].current?.focus();
      }
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => setIsResending(false), 1000); // TODO
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => setIsVerifying(false), 1000); // TODO
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <ThemedText style={[styles.title, { color: textColor }]}>
          Verify your email
        </ThemedText>
        <ThemedText style={[styles.subtitle, { color: subtitleColor }]}>
          We&apos;ve sent a 5-digit code to your email address
        </ThemedText>

        <View style={styles.codeRow}>
          {code.map((digit, idx) => (
            <TextInput
              key={idx}
              ref={inputs[idx]}
              style={[
                styles.codeInput,
                {
                  backgroundColor: codeInputBg,
                  borderColor: codeInputBorder,
                  color: textColor,
                },
              ]}
              value={digit}
              onChangeText={(text) => handleChange(text, idx)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              placeholder="-"
              placeholderTextColor={subtitleColor}
              returnKeyType="next"
              autoFocus={idx === 0}
            />
          ))}
        </View>

        <ThemedText style={[styles.infoText, { color: subtitleColor }]}>
          Didn&apos;t receive a code?
        </ThemedText>
        <Pressable
          onPress={handleResend}
          disabled={isResending}
          style={styles.resendBtn}
        >
          <ThemedText style={[styles.resendText, { color: accentColor }]}>
            {isResending ? "Resending..." : "Resend code"}
          </ThemedText>
        </Pressable>
      </View>

      <View style={styles.bottomArea}>
        <Pressable
          style={[styles.verifyBtn, { backgroundColor: verifyBtnBg }]}
          onPress={handleVerify}
          disabled={isVerifying || code.some((d) => d === "")}
        >
          <ThemedText style={[styles.verifyText, { color: verifyBtnText }]}>
            {isVerifying ? "Verifying..." : "Verify"}
          </ThemedText>
        </Pressable>
        <View style={styles.secureRow}>
          <Ionicons
            name="lock-closed-outline"
            size={16}
            color={secureTextColor}
            style={{ marginRight: 6 }}
          />
          <ThemedText style={[styles.secureText, { color: secureTextColor }]}>
            Secure 256-bit SSL encrypted verification
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  content: {
    width: "100%",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  bottomArea: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 32,
  },
  codeInput: {
    width: 56,
    height: 56,
    borderRadius: 12,
    fontSize: 32,
    fontWeight: "700",
    borderWidth: 2,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 0,
    textAlign: "center",
  },
  resendBtn: {
    marginBottom: 40,
    marginTop: 8,
  },
  resendText: {
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },
  verifyBtn: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  verifyText: {
    fontWeight: "700",
    fontSize: 20,
  },
  secureRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  secureText: {
    fontSize: 14,
    marginLeft: 2,
  },
});
