import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import ThemedCard from "../ui/themed-card";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

type Set = {
  id: number;
  kg: string;
  reps: string;
};

type Exercise = {
  name: string;
  icon: string;
  sets: Set[];
};

type SingleExerciseInProgressProps = {
  exercise: Exercise;
  onAddSet: () => void;
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
  exerciseIndex: number;
};

export default function SingleExerciseInProgress({
  exercise,
  onAddSet,
  setExercises,
  exerciseIndex,
}: SingleExerciseInProgressProps) {
  const textColor = useThemeColor({}, "text");
  const lighterColorFont = useThemeColor({}, "inputLabel");
  const lightFontColor = useThemeColor({}, "inputBorder");
  const cardBg = useThemeColor({}, "inputBackground");
  const cardIconColor = useThemeColor({}, "background");

  return (
    <ThemedCard key={exercise.name}>
      <ThemedView style={[{ backgroundColor: cardBg }, styles.exerciseHeader]}>
        <ThemedView style={[styles.exerciseIconBox]}>
          <ThemedText style={[styles.exerciseIcon, { color: cardIconColor }]}>
            {exercise.icon}
          </ThemedText>
        </ThemedView>
        <ThemedText style={[styles.exerciseName, { color: textColor }]}>
          {exercise.name}
        </ThemedText>
      </ThemedView>
      {exercise.sets.length > 0 ? (
        <ThemedView style={{ backgroundColor: cardBg }}>
          <ThemedView
            style={[{ backgroundColor: cardBg }, styles.setsHeaderRow]}
          >
            <ThemedView style={[styles.colSet, { backgroundColor: cardBg }]}>
              <ThemedText
                style={[{ color: lighterColorFont }, styles.colHeaderText]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                SET
              </ThemedText>
            </ThemedView>
            <ThemedView style={[styles.colKg, { backgroundColor: cardBg }]}>
              <ThemedText
                style={[{ color: lighterColorFont }, styles.colHeaderText]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                KG
              </ThemedText>
            </ThemedView>
            <ThemedView style={[styles.colReps, { backgroundColor: cardBg }]}>
              <ThemedText
                style={[{ color: lighterColorFont }, styles.colHeaderText]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                REPS
              </ThemedText>
            </ThemedView>
          </ThemedView>
          {exercise.sets.map((set, setIdx) => (
            <ThemedView
              key={set.id}
              style={[{ backgroundColor: cardBg }, styles.setRow]}
            >
              <ThemedView style={[styles.colSet, { backgroundColor: cardBg }]}>
                <ThemedText
                  style={{ color: textColor }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {set.id}
                </ThemedText>
              </ThemedView>
              <ThemedView style={[styles.colKg, { backgroundColor: cardBg }]}>
                <TextInput
                  style={{
                    color: textColor,
                    backgroundColor: cardBg,
                    flex: 1,
                    textAlign: "center",
                    padding: 0,
                  }}
                  value={set.kg}
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    setExercises((prev) => {
                      const updated = [...prev];
                      updated[exerciseIndex].sets[setIdx].kg = text;
                      return updated;
                    });
                  }}
                />
              </ThemedView>
              <ThemedView style={[styles.colReps, { backgroundColor: cardBg }]}>
                <TextInput
                  style={{
                    color: textColor,
                    backgroundColor: cardBg,
                    flex: 1,
                    textAlign: "center",
                    padding: 0,
                  }}
                  value={set.reps}
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    setExercises((prev) => {
                      const updated = [...prev];
                      updated[exerciseIndex].sets[setIdx].reps = text;
                      return updated;
                    });
                  }}
                />
              </ThemedView>
            </ThemedView>
          ))}
          <TouchableOpacity
            onPress={onAddSet}
            style={[styles.addSetButton, { backgroundColor: lightFontColor }]}
          >
            <ThemedText
              style={[
                { backgroundColor: lightFontColor },
                styles.addSetButtonText,
              ]}
            >
              + ADD SET
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      ) : (
        <ThemedText style={[{ color: lightFontColor }, styles.noSetsText]}>
          No sets added yet
        </ThemedText>
      )}
    </ThemedCard>
  );
}

const styles = StyleSheet.create({
  exerciseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  exerciseIconBox: {
    borderRadius: 8,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  exerciseIcon: {
    fontSize: 20,
  },
  exerciseName: {
    fontWeight: 700,
    fontSize: 18,
  },
  setsHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    width: "100%",
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    width: "100%",
  },
  colSet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  colHeaderText: {
    fontSize: 12,
    fontWeight: 700,
  },
  colKg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    padding: 0,
  },
  colReps: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    padding: 0,
  },
  addSetButton: {
    marginTop: 8,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  addSetButtonText: {
    fontWeight: 700,
  },
  noSetsText: {
    fontStyle: "italic",
    marginTop: 8,
  },
});
