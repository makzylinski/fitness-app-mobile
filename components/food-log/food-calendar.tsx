import { useThemeColor } from "@/hooks/use-theme-color";
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

  const primaryColor = useThemeColor({}, "primaryColor");

  console.log(displayAllDaysInMonth(month, year));

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.datesContainer}>
        {displayAllDaysInMonth(month, year).map((el, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedDate(el.getDate())}
          >
            <ThemedView style={styles.fullDate}>
              <ThemedText
                style={[
                  styles.dayOfWeek,
                  selectedDate === el.getDate() && styles.dayOfWeekActive,
                ]}
              >
                {el.toLocaleDateString("en-EN", { weekday: "short" })}
              </ThemedText>
              <ThemedText
                style={[
                  styles.date,
                  selectedDate === el.getDate() && styles.active,
                ]}
              >
                {el.getDate()}
              </ThemedText>
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
    backgroundColor: "#2EC4B6",
    borderRadius: 25,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    shadowColor: "#2EC4B6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
  },
  datesContainer: {
    flexDirection: "row",
    overflowX: "scroll",
  },
  fullDate: {
    margin: 20,
    alignItems: "center",
  },
  dayOfWeek: {
    textAlign: "center",
    fontSize: 12,
  },
  dayOfWeekActive: {
    color: "#2EC4B6",
  },
  date: {
    color: "white",
    textAlign: "center",
    lineHeight: 30,
  },
});
