import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export type Exercise = {
  id: number;
  name: string;
  exercises: {
    weight: number;
    weightUnit: string;
    reps: number;
  }[];
};

type ExerciseRowProps = {
  item: Exercise;
};

export default function ExerciseRow({ item }: ExerciseRowProps) {
  const borderColor = useThemeColor({}, "inputBorder");
  const labelColor = useThemeColor({}, "inputLabel");

  return (
    <ThemedView style={styles.exerciseContainer}>
      <ThemedText style={styles.exerciseName}>{item.name}</ThemedText>

      {/* Header */}
      <ThemedView style={[styles.tableRow, styles.headerRow]}>
        <ThemedText style={[styles.headerCell, { color: labelColor }]}>
          Set
        </ThemedText>
        <ThemedText style={[styles.headerCell, { color: labelColor }]}>
          Weight
        </ThemedText>
        <ThemedText style={[styles.headerCell, { color: labelColor }]}>
          Reps
        </ThemedText>
      </ThemedView>

      {/* Rows */}
      {item.exercises.map((set, index) => (
        <ThemedView
          key={index}
          style={[
            styles.tableRow,
            styles.dataRow,
            { borderTopColor: borderColor },
          ]}
        >
          <ThemedText style={styles.cell}>{index + 1}</ThemedText>
          <ThemedText style={styles.cell}>
            {set.weight} {set.weightUnit}
          </ThemedText>
          <ThemedText style={styles.cell}>{set.reps}</ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    marginBottom: 24,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  headerRow: {
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
  dataRow: {
    borderTopWidth: 1,
  },
  headerCell: {
    flex: 1,
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
});
