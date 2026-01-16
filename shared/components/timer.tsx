import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

type TimerProps = {
  timerStart: boolean;
  timerStop: boolean;
};

export default function Timer({ timerStart, timerStop }: TimerProps) {
  const primaryColor = useThemeColor({}, "primaryColor");
  const [time, setTime] = useState("");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (timerStart && !timerStop) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerStop) {
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerStart, timerStop]);

  useEffect(() => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(Math.floor(seconds % 60)).padStart(2, "0");

    setTime(`${h}:${m}:${s}`);
  }, [seconds]);

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
