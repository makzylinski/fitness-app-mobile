import CalorieSummary from "@/components/dashboard/calorie-summary";
import RecentWorkouts from "@/components/dashboard/recent-workouts";
import { ThemedText } from "@/components/ui/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { TimerProvider } from "@/shared/contexts/timer-context";
import { getGreetings } from "@/utils/getGreetings";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "../../components/ui/themed-view";

export default function Dashboard() {
  const color = useThemeColor({}, "inputLabel");

  return (
    <ScrollView>
      <TimerProvider>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.greetingsWrapper}>
            <ThemedText style={styles.greeting}>
              {getGreetings()}, Max!
            </ThemedText>
            <ThemedText style={{ color }}>
              Comprehensive Summary of your activity
            </ThemedText>
          </ThemedView>
          <CalorieSummary></CalorieSummary>
          <RecentWorkouts></RecentWorkouts>
        </ThemedView>
      </TimerProvider>
    </ScrollView>
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
});
