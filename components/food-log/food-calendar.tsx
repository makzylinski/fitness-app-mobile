import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function FoodCalendar() {
  const dateToday = new Date();
  const day = dateToday.getDate();
  const month = dateToday.getMonth();
  const year = dateToday.getFullYear();
  const [selectedDate, setSelectedDate] = useState<number | null>(day);

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
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedDate(el.getDate())}
          >
            <ThemedView
              style={[
                styles.fullDate,
                selectedDate === el.getDate() && styles.active,
              ]}
            >
              <ThemedText>
                {el.toLocaleDateString("en-EN", { weekday: "short" })}
              </ThemedText>
              <ThemedText style={styles.date}>{el.getDate()}</ThemedText>
            </ThemedView>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  active: {
    backgroundColor: "red",
    borderColor: "white",
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
