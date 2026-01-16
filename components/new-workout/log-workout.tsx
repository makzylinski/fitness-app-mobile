import { ThemedInput } from "@/components/ui/themed-input";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import Notes from "@/shared/components/notes";
import Timer from "@/shared/components/timer";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { IconSymbol } from "../ui/icon-symbol";
import ThemedCard from "../ui/themed-card";
import { ThemedText } from "../ui/themed-text";

export default function LogWorkout() {
  const [notes, setNotes] = useState("");

  const [workoutName, setWorkoutName] = useState("Upper Body Workout");
  const router = useRouter();
  const inputLabelColor = useThemeColor({}, "inputLabel");
  const backgroundColor = useThemeColor({}, "inputBackground");
  const primaryColor = useThemeColor({}, "primaryColor");
  const secondaryBackground = useThemeColor({}, "secondaryBackground");

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {/* <InputSearch /> 
        TODO: this is the search workout input that shall be used in Exercises section
      */}
        <ThemedCard style={styles.card}>
          <Timer timerStart={true} timerStop={false}></Timer>
          <ThemedView>
            <ThemedInput
              style={styles.input}
              placeholder="Lower Body Workout"
              value={workoutName}
              onChangeText={(name) => setWorkoutName(name)}
            />
            <Notes
              notes={notes}
              setNotes={setNotes}
              placeholder="Add session notes (e.g., focus on slow essentrics)..."
            />
          </ThemedView>
          <ThemedView style={{ backgroundColor, marginLeft: "auto" }}>
            <IconSymbol
              size={24}
              name="pencil"
              style={{ paddingTop: 8 }}
              color={inputLabelColor}
            />
          </ThemedView>
        </ThemedCard>

        <ThemedView style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>
            SUGGESTED EXERCISES
          </ThemedText>
        </ThemedView>

        <ThemedCard
          style={[
            styles.exerciseCard,
            { backgroundColor: secondaryBackground },
          ]}
        >
          <ThemedView
            style={[
              styles.exerciseIcon,
              { backgroundColor: inputLabelColor + "30" },
            ]}
          >
            <IconSymbol
              name="dumbbell.fill"
              size={32}
              color={inputLabelColor}
            />
          </ThemedView>
          <ThemedView
            style={[styles.exerciseInfo, { backgroundColor: "transparent" }]}
          >
            <ThemedText style={styles.exerciseName}>
              Bench Press (Barbell)
            </ThemedText>
            <ThemedText style={styles.exerciseDetails}>
              4 sets • 8-12 reps
            </ThemedText>
          </ThemedView>
          <Pressable style={styles.addExerciseButton}>
            <IconSymbol
              name="plus.circle.fill"
              size={32}
              color={primaryColor}
            />
          </Pressable>
        </ThemedCard>

        <ThemedCard
          style={[
            styles.exerciseCard,
            { backgroundColor: secondaryBackground },
          ]}
        >
          <ThemedView
            style={[
              styles.exerciseIcon,
              { backgroundColor: inputLabelColor + "30" },
            ]}
          >
            <IconSymbol name="list.bullet" size={32} color={inputLabelColor} />
          </ThemedView>
          <ThemedView
            style={[styles.exerciseInfo, { backgroundColor: "transparent" }]}
          >
            <ThemedText style={styles.exerciseName}>Pull-ups</ThemedText>
            <ThemedText style={styles.exerciseDetails}>
              3 sets • To failure
            </ThemedText>
          </ThemedView>
          <Pressable style={styles.addExerciseButton}>
            <IconSymbol
              name="plus.circle.fill"
              size={32}
              color={primaryColor}
            />
          </Pressable>
        </ThemedCard>

        {/* <Exercises></Exercises> */}

        <Pressable
          onPress={() =>
            router.push({ pathname: "/workout-in-progress", params: { notes } })
          }
          style={[{ backgroundColor: primaryColor }, styles.startButton]}
        >
          <IconSymbol name="play.fill" size={24} color="black" />
          <ThemedText style={styles.startButtonText}>Start Workout</ThemedText>
        </Pressable>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    padding: 12,
  },
  input: {
    height: 32,
    padding: 8,
    fontWeight: "600",
    fontSize: 18,
  },
  sectionHeader: {
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    opacity: 0.6,
  },
  exerciseCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    gap: 12,
  },
  exerciseIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  exerciseDetails: {
    fontSize: 14,
    opacity: 0.7,
  },
  addExerciseButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    letterSpacing: 0.5,
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    textTransform: "uppercase",
    padding: 18,
    borderRadius: 12,
  },
});
