import { ThemedInput } from "@/components/themed-input";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useThemeColor } from "@/hooks/use-theme-color";
import Datepicker from "@/shared/components/datepicker";
import InputSearch from "@/shared/components/input-search";
import dayjs from "dayjs";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { DateType } from "react-native-ui-datepicker";

export default function LogWorkout() {
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateType>();

  const iconColor = useThemeColor({}, "icon");

  const handleSelectedDate = (date: DateType) => {
    setSelectedDate(date);
    setIsDatepickerOpen(false);
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
          <Pressable onPress={() => setIsDatepickerOpen(true)}>
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
      {selectedDate && (
        <ThemedText>
          Selected: {dayjs(selectedDate).format("DD/MM/YYYY")}
        </ThemedText>
      )}
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
