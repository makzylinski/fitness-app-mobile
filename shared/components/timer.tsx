import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useTimer } from "@/hooks/use-timer";
import { StyleSheet } from "react-native";

export default function Timer() {
  const primaryColor = useThemeColor({}, "primaryColor");
  const { time } = useTimer();
  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={[{ backgroundColor: primaryColor }, styles.circle]}
      ></ThemedView>
      <ThemedText style={[{ color: primaryColor }, styles.text]}>
        {time}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  text: {
    fontWeight: 700,
  },
});
