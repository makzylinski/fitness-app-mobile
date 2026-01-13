import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ui/themed-text";
import { ThemedView } from "./ui/themed-view";

export default function Toolbar() {
  const router = useRouter();

  const lighterColorFont = useThemeColor({}, "inputLabel");
  const insets = useSafeAreaInsets();

  const navigateToLogin = () => router.push("/login");

  const navigateToSignUp = () => router.push("/sign-up");

  return (
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      <ThemedView style={styles.main}>
        <Ionicons name="menu" size={24} color={lighterColorFont} />
        <ThemedText style={styles.header}>Nazwa tutaj</ThemedText>
      </ThemedView>

      <ThemedView style={styles.icons}>
        <Pressable onPress={() => navigateToSignUp()}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={lighterColorFont}
          />
        </Pressable>

        <Pressable onPress={() => navigateToLogin()}>
          <Ionicons name="person-outline" size={24} color={lighterColorFont} />
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    flexDirection: "row",
    padding: 20,
  },
  header: {
    fontWeight: 700,
    fontSize: 22,
    paddingHorizontal: 10,
  },
  icons: {
    flexDirection: "row",
    gap: 10,
    padding: 20,
  },
});
