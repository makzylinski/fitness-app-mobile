import FoodCalendar from "@/components/food-log/food-calendar";
import Meal from "@/components/food-log/meal";
import { ThemedView } from "@/components/ui/themed-view";

export default function FoodDiary() {
  return (
    <ThemedView>
      <FoodCalendar></FoodCalendar>
      <Meal></Meal>
    </ThemedView>
  );
}
