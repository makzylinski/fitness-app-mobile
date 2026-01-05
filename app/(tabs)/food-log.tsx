import FoodCalendar from "@/components/food-log/food-calendar";
import { ThemedView } from "@/components/ui/themed-view";

export default function FoodDiary() {
  return (
    <ThemedView>
      <FoodCalendar></FoodCalendar>
    </ThemedView>
  );
}
