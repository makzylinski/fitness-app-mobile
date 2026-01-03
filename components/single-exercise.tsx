import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type ExerciseProps = {
  exercise: {
    id: number;
    name: string;
    description: string;
    exercises: { weight: number; weightUnit: string; reps: number }[];
  };
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

        <ThemedView style={[{ backgroundColor }, styles.exerciseDetails]}>
          <ThemedText style={styles.number}>
            {exercise.exercises.length}
          </ThemedText>
          <ThemedText style={styles.type}>Sets</ThemedText>
        </ThemedView>

        <ThemedText>{exercise.exercises.length} Reps</ThemedText>
        <ThemedText>{exercise.exercises.length} kg</ThemedText>
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
  exerciseDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  name: {
    fontWeight: 700,
    fontSize: 12,
  },
  number: {
    fontWeight: 700,
    fontSize: 10,
  },
  type: {
    fontSize: 10,
  },
});
