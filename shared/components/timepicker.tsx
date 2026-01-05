import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";

type TimepickerProps = {
  selectedTime?: DateType;
  onTimeSelect: (date: DateType) => void;
  onClose: () => void;
};

export default function Timepicker({
  selectedTime,
  onTimeSelect,
  onClose,
}: TimepickerProps) {
  const defaultStyles = useDefaultStyles();
  const [tempTime, setTempTime] = useState<DateType>(selectedTime);
  const buttonBg = useThemeColor({}, "tint");

  const handleConfirm = () => {
    onTimeSelect(tempTime);
    onClose();
  };

  return (
    <ThemedView>
      <DateTimePicker
        mode="single"
        date={tempTime}
        onChange={({ date }) => setTempTime(date)}
        timePicker={true}
        initialView="time"
        use12Hours={false}
        styles={defaultStyles}
      />
      <Pressable
        style={[styles.button, { backgroundColor: buttonBg }]}
        onPress={handleConfirm}
      >
        <ThemedText style={styles.buttonText}>Confirm</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
  },
});
