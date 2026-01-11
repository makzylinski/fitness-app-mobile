import CaloriesCounter from "@/components/food-log/calories-counter";
import FoodCalendar from "@/components/food-log/food-calendar";
import Meal from "@/components/food-log/meal";
import { ThemedView } from "@/components/ui/themed-view";
import { ScrollView, StyleSheet } from "react-native";

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
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.content}>
          <FoodCalendar></FoodCalendar>
          <Meal meal={meals}></Meal>
        </ThemedView>
      </ScrollView>
      <CaloriesCounter></CaloriesCounter>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {},
});
