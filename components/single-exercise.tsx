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
          <ThemedView style={[{ backgroundColor }, styles.detailItem]}>
            <ThemedText style={styles.number}>
              {exercise.exercises.length}
            </ThemedText>
            <ThemedText style={[{ color: inputLabelColor }, styles.type]}>
              Sets
            </ThemedText>
          </ThemedView>

          <ThemedText style={[{ color: inputLabelColor }, styles.separator]}>
            •
          </ThemedText>

          <ThemedView style={[{ backgroundColor }, styles.detailItem]}>
            <ThemedText style={styles.number}>
              {exercise.exercises.length}
            </ThemedText>
            <ThemedText style={[{ color: inputLabelColor }, styles.type]}>
              Reps
            </ThemedText>
          </ThemedView>

          <ThemedText style={[{ color: inputLabelColor }, styles.separator]}>
            •
          </ThemedText>

          <ThemedView style={[{ backgroundColor }, styles.detailItem]}>
            <ThemedText style={styles.number}>
              {exercise.exercises.length}
            </ThemedText>
            <ThemedText style={[{ color: inputLabelColor }, styles.type]}>
              kg
            </ThemedText>
          </ThemedView>
        </ThemedView>
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
    gap: 10,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 8,
  },
  name: {
    fontWeight: 700,
    fontSize: 12,
  },
  number: {
    fontWeight: 700,
    fontSize: 12,
  },
  type: {
    fontSize: 12,
    fontWeight: 600,
  },
  separator: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
