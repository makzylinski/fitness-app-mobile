import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";

export default function ProgressBar() {
  const primaryColor = useThemeColor({}, "primaryColor");

  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={[
          styles.kcalProgress,
          { backgroundColor: primaryColor, width: "54%" },
        ]}
      />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  wrapper: {},
  container: {
    width: "100%",
    height: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#3A3A3C",
  },
  kcalProgress: {
    height: "100%",
    borderRadius: 10,
  },
});
