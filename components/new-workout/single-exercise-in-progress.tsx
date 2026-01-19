import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import ThemedCard from "../ui/themed-card";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

type Set = {
  id: number;
  previous: string;
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
        <ThemedView>
          <ThemedView
            style={[{ backgroundColor: cardBg }, styles.setsHeaderRow]}
          >
            <ThemedText
              style={[{ color: lighterColorFont }, styles.setsHeaderText]}
            >
              SET
            </ThemedText>
            <ThemedText
              style={[
                { color: lighterColorFont },
                styles.setsHeaderText,
                styles.setsHeaderPrevious,
              ]}
            >
              PREVIOUS
            </ThemedText>
            <ThemedText
              style={[{ color: lighterColorFont }, styles.setsHeaderText]}
            >
              KG
            </ThemedText>
            <ThemedText
              style={[{ color: lighterColorFont }, styles.setsHeaderText]}
            >
              REPS
            </ThemedText>
          </ThemedView>
          {exercise.sets.map((set, setIdx) => (
            <ThemedView
              key={set.id}
              style={[{ backgroundColor: cardBg }, styles.setRow]}
            >
              <ThemedText style={[styles.setId, { color: textColor }]}>
                {set.id}
              </ThemedText>
              <ThemedText style={[styles.setPrevious, { color: textColor }]}>
                {set.previous}
              </ThemedText>
              <TextInput
                style={[
                  styles.inputKg,
                  { color: textColor, backgroundColor: cardBg },
                ]}
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
              <TextInput
                style={[
                  styles.inputReps,
                  { color: textColor, backgroundColor: cardBg },
                ]}
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
          ))}
          <TouchableOpacity
            onPress={onAddSet}
            style={[styles.addSetButton, { backgroundColor: lightFontColor }]}
          >
            <ThemedText
              style={[{ backgroundColor: cardBg }, styles.addSetButtonText]}
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
    justifyContent: "space-between",
    marginBottom: 6,
  },
  setsHeaderText: {
    width: 40,
  },
  setsHeaderPrevious: {
    width: 90,
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  setId: {
    width: 40,
  },
  setPrevious: {
    width: 90,
  },
  inputKg: {
    width: 40,
    borderRadius: 6,
    padding: 4,
    marginRight: 8,
  },
  inputReps: {
    width: 40,
    borderRadius: 6,
    padding: 4,
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
  bottomSpacer: {
    height: 80,
  },
});
