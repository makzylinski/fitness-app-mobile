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
    isPR?: boolean;
  }[];
};

type ExerciseRowProps = {
  item: Exercise;
};

export default function ExerciseRow({ item }: ExerciseRowProps) {
  const labelColor = useThemeColor({}, "inputLabel");
  const primaryColor = useThemeColor({}, "primaryColor");
  const accent = useThemeColor({}, "accent");
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView style={[{ backgroundColor }, styles.exerciseContainer]}>
      <ThemedText style={[styles.exerciseName, { color: primaryColor }]}>
        {item.name}
      </ThemedText>

      {/* Header */}
      <ThemedView style={[{ backgroundColor }, styles.tableHeader]}>
        <ThemedText style={[styles.headerCell, { color: labelColor }]}>
          SET
        </ThemedText>
        <ThemedText style={[styles.headerCell, { color: labelColor }]}>
          WEIGHT
        </ThemedText>
        <ThemedText style={[styles.headerCell, { color: labelColor }]}>
          REPS
        </ThemedText>
      </ThemedView>

      {/* Rows */}
      {item.exercises.map((set, index) => (
        <ThemedView key={index} style={styles.dataRow}>
          <ThemedView style={styles.setCellWrapper}>
            <ThemedText style={styles.setNumber}>{index + 1}</ThemedText>
            {set.isPR && (
              <ThemedView style={[styles.prBadge, { backgroundColor: accent }]}>
                <ThemedText style={styles.prText}>PR</ThemedText>
              </ThemedView>
            )}
          </ThemedView>
          <ThemedText
            style={[
              styles.cellCenter,
              set.isPR && { color: accent, fontWeight: "600" },
            ]}
          >
            {set.weight} {set.weightUnit}
          </ThemedText>
          <ThemedText
            style={[
              styles.cellCenter,
              set.isPR && { color: accent, fontWeight: "600" },
            ]}
          >
            {set.reps}
          </ThemedText>
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
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 4,
  },
  headerCell: {
    flex: 1,
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  dataRow: {
    backgroundColor: "#373737",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 8,
  },
  setCellWrapper: {
    backgroundColor: "#373737",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  setNumber: {
    fontSize: 15,
    textAlign: "center",
  },
  prBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 50,
  },
  prText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  cellCenter: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
  },
});
