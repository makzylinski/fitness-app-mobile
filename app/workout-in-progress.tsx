import { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { ThemedText } from "../components/ui/themed-text";
import { ThemedView } from "../components/ui/themed-view";

const exercisesInitial = [
  {
    name: "Bench Press (Barbell)",
    icon: "🛠️",
    sets: [{ id: 1, previous: "80 kg x 8", kg: "0", reps: "0" }],
  },
  {
    name: "Pull-ups",
    icon: "🛠️",
    sets: [],
  },
];

export default function WorkoutInProgress() {
  const [exercises, setExercises] = useState(exercisesInitial);

  const addSet = (exerciseIdx: number) => {
    setExercises((prev) => {
      const updated = [...prev];
      updated[exerciseIdx].sets.push({
        id: updated[exerciseIdx].sets.length + 1,
        previous: "",
        kg: "0",
        reps: "0",
      });
      return updated;
    });
  };

  return (
    <ThemedView style={{ flex: 1, backgroundColor: "#181A1B", paddingTop: 32 }}>
      {/* Header */}
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginBottom: 8,
        }}
      >
        <ThemedView>
          <ThemedText
            style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}
          >
            Upper Body Hypertrophy
          </ThemedText>
          <ThemedView
            style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
          >
            <ThemedText style={{ color: "#1DE9B6", fontWeight: "bold" }}>
              ●
            </ThemedText>
            <ThemedText
              style={{ color: "#1DE9B6", marginLeft: 4, fontWeight: "bold" }}
            >
              00:14:42
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <TouchableOpacity
          style={{
            backgroundColor: "#232527",
            borderRadius: 16,
            paddingHorizontal: 18,
            paddingVertical: 8,
          }}
        >
          <ThemedText
            style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}
          >
            FINISH
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Exercises List */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 12 }}>
        {exercises.map((exercise, idx) => (
          <ThemedView
            key={exercise.name}
            style={{
              backgroundColor: "#232527",
              borderRadius: 16,
              marginBottom: 16,
              padding: 16,
            }}
          >
            <ThemedView
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <ThemedView
                style={{
                  backgroundColor: "#1DE9B6",
                  borderRadius: 8,
                  width: 32,
                  height: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <ThemedText style={{ color: "#232527", fontSize: 20 }}>
                  {exercise.icon}
                </ThemedText>
              </ThemedView>
              <ThemedText
                style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
              >
                {exercise.name}
              </ThemedText>
            </ThemedView>
            {exercise.sets.length > 0 ? (
              <ThemedView>
                <ThemedView
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <ThemedText style={{ color: "#888", width: 40 }}>
                    SET
                  </ThemedText>
                  <ThemedText style={{ color: "#888", width: 90 }}>
                    PREVIOUS
                  </ThemedText>
                  <ThemedText style={{ color: "#888", width: 40 }}>
                    KG
                  </ThemedText>
                  <ThemedText style={{ color: "#888", width: 40 }}>
                    REPS
                  </ThemedText>
                </ThemedView>
                {exercise.sets.map((set, setIdx) => (
                  <ThemedView
                    key={set.id}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 6,
                    }}
                  >
                    <ThemedText style={{ color: "#fff", width: 40 }}>
                      {set.id}
                    </ThemedText>
                    <ThemedText style={{ color: "#fff", width: 90 }}>
                      {set.previous}
                    </ThemedText>
                    <TextInput
                      style={{
                        backgroundColor: "#181A1B",
                        color: "#fff",
                        width: 40,
                        borderRadius: 6,
                        padding: 4,
                        marginRight: 8,
                      }}
                      value={set.kg}
                      keyboardType="numeric"
                      onChangeText={(text) => {
                        setExercises((prev) => {
                          const updated = [...prev];
                          updated[idx].sets[setIdx].kg = text;
                          return updated;
                        });
                      }}
                    />
                    <TextInput
                      style={{
                        backgroundColor: "#181A1B",
                        color: "#fff",
                        width: 40,
                        borderRadius: 6,
                        padding: 4,
                      }}
                      value={set.reps}
                      keyboardType="numeric"
                      onChangeText={(text) => {
                        setExercises((prev) => {
                          const updated = [...prev];
                          updated[idx].sets[setIdx].reps = text;
                          return updated;
                        });
                      }}
                    />
                  </ThemedView>
                ))}
                <TouchableOpacity
                  onPress={() => addSet(idx)}
                  style={{
                    marginTop: 8,
                    backgroundColor: "#181A1B",
                    borderRadius: 8,
                    padding: 10,
                    alignItems: "center",
                  }}
                >
                  <ThemedText style={{ color: "#1DE9B6", fontWeight: "bold" }}>
                    + ADD SET
                  </ThemedText>
                </TouchableOpacity>
              </ThemedView>
            ) : (
              <ThemedText
                style={{ color: "#888", fontStyle: "italic", marginTop: 8 }}
              >
                No sets added yet
              </ThemedText>
            )}
          </ThemedView>
        ))}
        <ThemedView style={{ height: 80 }} />
      </ScrollView>

      {/* Add Exercise Button */}
      <ThemedView
        style={{
          position: "absolute",
          bottom: 24,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#1DE9B6",
            borderRadius: 20,
            paddingVertical: 18,
            width: "90%",
            alignItems: "center",
            shadowColor: "#1DE9B6",
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 4,
          }}
        >
          <ThemedText
            style={{ color: "#181A1B", fontWeight: "bold", fontSize: 18 }}
          >
            + ADD EXERCISE
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}
