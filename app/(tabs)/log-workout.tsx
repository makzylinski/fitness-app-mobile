import { ThemedInput } from "@/components/themed-input";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useThemeColor } from "@/hooks/use-theme-color";
import Datepicker from "@/shared/components/datepicker";
import InputSearch from "@/shared/components/input-search";
import Notes from "@/shared/components/notes";
import Timepicker from "@/shared/components/timepicker";
import dayjs from "dayjs";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { DateType } from "react-native-ui-datepicker";

export default function LogWorkout() {
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateType>();

  const [isTimepickerOpen, setIsTimepickerOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<DateType>();

  const [notes, setNotes] = useState("");

  const iconColor = useThemeColor({}, "icon");

  const handleSelectedDate = (date: DateType) => {
    setSelectedDate(date);
    setIsDatepickerOpen(false);
  };

  const handleSelectedTime = (time: DateType) => {
    setSelectedTime(time);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.titleText}>Log your workout</ThemedText>
      <InputSearch />
      <ThemedInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        value={selectedDate ? dayjs(selectedDate).format("DD/MM/YYYY") : ""}
        label="Date"
        editable={false}
        rightIcon={
          <Pressable onPress={() => setIsDatepickerOpen(!isDatepickerOpen)}>
            <IconSymbol
              size={24}
              name="calendar.badge.clock"
              color={iconColor}
            />
          </Pressable>
        }
      />
      {isDatepickerOpen && (
        <Datepicker
          selectedDate={selectedDate}
          onDateSelect={handleSelectedDate}
        />
      )}

      <ThemedInput
        style={styles.input}
        placeholder="HH:mm"
        value={selectedTime ? dayjs(selectedTime).format("HH:mm") : ""}
        label="Start time"
        editable={false}
        rightIcon={
          <Pressable onPress={() => setIsTimepickerOpen(!isTimepickerOpen)}>
            <IconSymbol
              size={24}
              name="calendar.badge.clock"
              color={iconColor}
            />
          </Pressable>
        }
      />
      {isTimepickerOpen && (
        <Timepicker
          selectedTime={selectedTime}
          onTimeSelect={handleSelectedTime}
          onClose={() => setIsTimepickerOpen(false)}
        />
      )}

      <Notes
        notes={notes}
        setNotes={setNotes}
        label="Notes"
        placeholder="How are you feeling today?"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 80,
    flex: 1,
    textAlign: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 150,
    marginLeft: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: 600,
    fontSize: 12,
  },
});
