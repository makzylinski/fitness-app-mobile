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
      {!isDatepickerOpen && (
        <Pressable onPress={() => setIsDatepickerOpen(true)}>
          <IconSymbol size={28} name="house.fill" color={iconColor} />
        </Pressable>
      )}
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
});
