import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function FoodCalendar() {
  const dateToday = new Date();
  const day = dateToday.getDate();
  const month = dateToday.getMonth();
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

  console.log(displayAllDaysInMonth(month, year));

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.datesContainer}>
        {displayAllDaysInMonth(month, year).map((el, index) => (
          <ThemedView style={styles.fullDate} key={index}>
            {" "}
            <ThemedText>
              {el.toLocaleDateString("en-EN", { weekday: "short" })}
            </ThemedText>
            <ThemedText style={styles.date}>{el.getDate()}</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  datesContainer: {
    flexDirection: "row",
    overflowX: "scroll",
  },
  fullDate: {
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
  },
  date: {
    color: "white",
    alignSelf: "center",
  },
});
