import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";
import { IconSymbol } from "./ui/icon-symbol";

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

          <ThemedView style={[{ backgroundColor }]}>
            <IconSymbol
              size={18}
              name="pencil"
              color={inputLabelColor}
              style={styles.iconEdit}
            />

            <IconSymbol
              size={18}
              name="trash"
              color={inputLabelColor}
              style={styles.iconDelete}
            />
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
    position: "relative",
    flex: 1,
  },
  iconEdit: {
    position: "absolute",
    right: 45,
    top: -10,
  },
  iconDelete: {
    position: "absolute",
    right: 10,
    top: -10,
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
