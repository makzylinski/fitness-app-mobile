import CaloriesCounter from "@/components/food-log/calories-counter";
import FoodCalendar from "@/components/food-log/food-calendar";
import Meal from "@/components/food-log/meal";
import { ThemedView } from "@/components/ui/themed-view";
import { StyleSheet } from "react-native";

export default function FoodDiary() {
  const meals = [
    {
      id: 0,
      mealName: "Breakfast",
    },
    {
      id: 1,
      mealName: "Dinner",
    },
  ];
  return (
    <ThemedView style={styles.container}>
      <FoodCalendar></FoodCalendar>
      <Meal meal={meals}></Meal>
      <CaloriesCounter></CaloriesCounter>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
