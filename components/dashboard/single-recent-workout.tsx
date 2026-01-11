import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

type SingleRecentWorkoutProps = {
  name: string;
  date: Date;
  duration: string;
};

export default function SingleRecentWorkout(props: SingleRecentWorkoutProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");
  return (
    <ThemedView style={[{ backgroundColor }, styles.container]}>
      <ThemedView style={styles.workoutDetails}>
        <ThemedText>{props.name}</ThemedText>
        <ThemedText>
          {props.date.getDate()} {props.duration}
        </ThemedText>
      </ThemedView>
      <ThemedView>icon</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
  workoutDetails: {
    flexDirection: "column",
  },
});
