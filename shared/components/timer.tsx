import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useState } from "react";
import { StyleSheet } from "react-native";

type TimerProps = {
  timerStart: boolean;
  timerStop: boolean;
};

export default function Timer({ timerStart, timerStop }: TimerProps) {
  const primaryColor = useThemeColor({}, "primaryColor");
  const [time, setTime] = useState("00:00:00");
  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={[{ backgroundColor: primaryColor }, styles.circle]}
      ></ThemedView>
      <ThemedText style={[{ color: primaryColor }, styles.text]}>
        {time}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  text: {
    fontWeight: 700,
  },
});
