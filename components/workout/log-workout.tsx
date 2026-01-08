import { IconSymbol } from "@/components/ui/icon-symbol";
import { ThemedInput } from "@/components/ui/themed-input";
import { ThemedView } from "@/components/ui/themed-view";
import Exercises from "@/components/workout/exercises";
import { useThemeColor } from "@/hooks/use-theme-color";
import Datepicker from "@/shared/components/datepicker";
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

  const [workoutName, setWorkoutName] = useState("");

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
      {/* <InputSearch /> 
        TODO: this is the search workout input that shall be used in Exercises section
      */}
      <ThemedInput
        style={styles.input}
        placeholder="Upper Body Workout"
        value={workoutName}
        label="Workout name"
        onChangeText={(name) => setWorkoutName(name)}
      />

      <ThemedView style={styles.dateTimeContainer}>
        <ThemedView style={styles.dateTimeInputWrapper}>
          <ThemedInput
            style={styles.dateTimeInput}
            placeholder="DD/MM/YYYY"
            value={selectedDate ? dayjs(selectedDate).format("DD/MM/YYYY") : ""}
            label="Date"
            editable={false}
            rightIcon={
              <Pressable onPress={() => setIsDatepickerOpen(!isDatepickerOpen)}>
                <IconSymbol
                  size={12}
                  name="calendar.badge.clock"
                  color={iconColor}
                />
              </Pressable>
            }
          />
        </ThemedView>

        <ThemedView style={styles.dateTimeInputWrapper}>
          <ThemedInput
            style={styles.dateTimeInput}
            placeholder="HH:mm"
            value={selectedTime ? dayjs(selectedTime).format("HH:mm") : ""}
            label="Start time"
            editable={false}
            rightIcon={
              <Pressable onPress={() => setIsTimepickerOpen(!isTimepickerOpen)}>
                <IconSymbol
                  size={12}
                  name="calendar.badge.clock"
                  color={iconColor}
                />
              </Pressable>
            }
          />
        </ThemedView>
      </ThemedView>

      {isDatepickerOpen && (
        <Datepicker
          selectedDate={selectedDate}
          onDateSelect={handleSelectedDate}
        />
      )}

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

      <Exercises></Exercises>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    textAlign: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTimeInputWrapper: {
    width: "48%",
  },
  input: {
    height: 40,
    width: 150,
    borderRadius: 10,
    padding: 10,
    fontWeight: 600,
    fontSize: 12,
  },
  dateTimeInput: {
    height: 40,
    borderRadius: 10,
    padding: 10,
    fontWeight: 600,
    fontSize: 12,
  },
});
