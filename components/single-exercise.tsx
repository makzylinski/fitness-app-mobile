import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type ExerciseProps = {
  exercise: { id: number; name: string; description: string };
};

export default function SingleExercise({ exercise }: ExerciseProps) {
  return (
    <ThemedView>
      <ThemedText>{exercise.name}</ThemedText>
    </ThemedView>
  );
}
