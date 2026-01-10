import CalorieSummary from "@/components/dashboard/calorie-summary";
import { ThemedText } from "../../components/ui/themed-text";
import { ThemedView } from "../../components/ui/themed-view";

export default function Dashboard() {
  return (
    <ThemedView>
      <ThemedText>Dashboard works!</ThemedText>
      <CalorieSummary></CalorieSummary>
    </ThemedView>
  );
}
