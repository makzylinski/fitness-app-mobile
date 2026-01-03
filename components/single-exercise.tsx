import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
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
  const accent = useThemeColor({}, "accent");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ backgroundColor }, styles.item]}>
        <ThemedView style={styles.contentWrapper}>
          <ThemedView style={styles.leftContent}>
            <ThemedView style={[{ backgroundColor }, styles.nameContainer]}>
              <ThemedView
                style={[{ backgroundColor: accent }, styles.orangeBar]}
              />
              <ThemedText style={[{ color: textColor }, styles.name]}>
                {exercise.name}
              </ThemedText>
            </ThemedView>

            <ThemedView style={[{ backgroundColor }, styles.exerciseDetails]}>
              <ThemedView style={[{ backgroundColor }, styles.detailItem]}>
                <ThemedText style={styles.number}>
                  {exercise.exercises.length}
                </ThemedText>
                <ThemedText style={[{ color: inputLabelColor }, styles.type]}>
                  Sets
                </ThemedText>
              </ThemedView>

              <ThemedText
                style={[{ color: inputLabelColor }, styles.separator]}
              >
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

              <ThemedText
                style={[{ color: inputLabelColor }, styles.separator]}
              >
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

          <ThemedView style={styles.actions}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="pencil" size={20} color={inputLabelColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons
                name="trash-outline"
                size={20}
                color={inputLabelColor}
              />
            </TouchableOpacity>
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
    padding: 10,
  },
  contentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 10,
  },
  iconButton: {
    padding: 4,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  orangeBar: {
    width: 4,
    height: 20,
    borderRadius: 2,
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
    fontSize: 14,
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
