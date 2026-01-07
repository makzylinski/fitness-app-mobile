import { ThemedView } from "../ui/themed-view";

export default function FoodCalendar() {
  const dateToday = new Date();
  const day = dateToday.getDate();
  const month = dateToday.getMonth() + 1;
  const year = dateToday.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);

  const displayAllDaysInMonth = (
    selectedMonth: number,
    selectedYear: number
  ) => {
    const date = new Date(selectedYear, selectedMonth, 1);
    const days = [];
    while (date.getMonth() === selectedMonth) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  console.log(displayAllDaysInMonth(1, 2026));

  return (
    <ThemedView>
      <ThemedView>{day}</ThemedView>
    </ThemedView>
  );
}
