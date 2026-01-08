import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { ThemedText } from "./ui/themed-text";
import { ThemedView } from "./ui/themed-view";

export default function Toolbar() {
  const lighterColorFont = useThemeColor({}, "inputLabel");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.main}>
        <Ionicons name="menu" size={24} color={lighterColorFont} />
        <ThemedText style={styles.header}>Nazwa tutaj</ThemedText>
      </ThemedView>

      <ThemedView style={styles.icons}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={lighterColorFont}
        />
        <Ionicons name="person-outline" size={24} color={lighterColorFont} />
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
