import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function ActiveWorkoutWidget() {
  const primaryColor = useThemeColor({}, "primaryColor");
  return (
    <ThemedView style={[{ backgroundColor: primaryColor }, styles.container]}>
      <ThemedText>Push Day Routine</ThemedText>
      <ThemedText>Elapsed: 42:15</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    color: "white",
    zIndex: 100,
    width: "90%",
    padding: 10,
    borderRadius: 12,
    alignSelf: "center",
  },
});
