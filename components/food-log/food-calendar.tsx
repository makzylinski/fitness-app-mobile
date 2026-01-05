import { ThemedView } from "../ui/themed-view";

export default function FoodCalendar() {
  const dateToday = new Date();
  const day = dateToday.getDate();
  const month = dateToday.getMonth() + 1;
  const year = dateToday.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);

  return (
    <ThemedView>
      <ThemedView>{day}</ThemedView>
    </ThemedView>
  );
}
