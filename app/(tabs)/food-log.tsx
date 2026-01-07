import FoodCalendar from "@/components/food-log/food-calendar";
import Meal from "@/components/food-log/meal";
import { ThemedView } from "@/components/ui/themed-view";
import { StyleSheet } from "react-native";

export default function FoodDiary() {
  return (
    <ThemedView style={styles.container}>
      <FoodCalendar></FoodCalendar>
      <Meal></Meal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
