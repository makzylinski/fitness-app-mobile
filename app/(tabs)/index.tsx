import CalorieSummary from "@/components/dashboard/calorie-summary";
import { ThemedText } from "@/components/ui/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { getGreetings } from "@/utils/getGreetings";
import { StyleSheet } from "react-native";
import { ThemedView } from "../../components/ui/themed-view";

export default function Dashboard() {
  const color = useThemeColor({}, "inputLabel");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.greetingsWrapper}>
        <ThemedText style={styles.greeting}>{getGreetings()}, Max!</ThemedText>
        <ThemedText style={{ color }}>
          Comprehensive Summary of your activity
        </ThemedText>
      </ThemedView>
      <CalorieSummary></CalorieSummary>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  greetingsWrapper: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 10,
  },
  subheader: {},
});
