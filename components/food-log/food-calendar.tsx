import { ThemedView } from "../ui/themed-view";

export default function FoodCalendar() {
  const dateToday = new Date();
  const day = dateToday.getDate();
  const month = dateToday.getMonth() + 1;
  const year = dateToday.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);

  const displayAllDaysInMonth = () => {
    const date = dateToday;
    const days = [];
    const currentMonth = dateToday.getMonth();

    while (dateToday.getMonth() === currentMonth) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  console.log(displayAllDaysInMonth());

  return (
    <ThemedView>
      <ThemedView>{day}</ThemedView>
    </ThemedView>
  );
}
