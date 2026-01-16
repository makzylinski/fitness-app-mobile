import { useLocalSearchParams } from "expo-router";
import { ThemedText } from "../components/ui/themed-text";
import { ThemedView } from "../components/ui/themed-view";

export default function WorkInProgress() {
  const { notes } = useLocalSearchParams();

  return (
    <ThemedView>
      <ThemedText>Work in Progress works! - {notes}</ThemedText>
    </ThemedView>
  );
}
