import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type ExerciseProps = {
  exercise: { id: number; name: string; description: string };
};

export default function SingleExercise({ exercise }: ExerciseProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const inputLabelColor = useThemeColor({}, "inputLabel");
  const textColor = useThemeColor({}, "text");
  const placeholderColor = useThemeColor({}, "icon");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ backgroundColor }, styles.item]}>
        <ThemedText style={[{ color: textColor }, styles.name]}>
          {exercise.name}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  item: {
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    padding: 10,
  },
  name: {
    fontWeight: 700,
    fontSize: 12,
  },
});
