import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import ThemedCard from "../ui/themed-card";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

type SingleRecentWorkoutProps = {
  workouts: {
    name: string;
    date: Date;
    duration: string;
    icon?: keyof typeof Ionicons.glyphMap;
  }[];
};

export default function SingleRecentWorkout({
  workouts,
}: SingleRecentWorkoutProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const textColor = useThemeColor({}, "text");
  const secondaryTextColor = useThemeColor({}, "icon");
  const primaryColor = useThemeColor({}, "primaryColor");
  const borderBottomColor = useThemeColor({}, "inputBorder");

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <ThemedCard>
      {workouts.map((workout, index) => (
        <ThemedView
          key={index}
          style={[
            { backgroundColor, borderBottomColor },
            styles.container,
            index === workouts.length - 1 && styles.lastContainer,
          ]}
        >
          <ThemedView
            style={[
              styles.iconContainer,
              { backgroundColor: primaryColor + "33" },
            ]}
          >
            <Ionicons
              name={workout.icon || "barbell-outline"}
              size={32}
              color={primaryColor}
            />
          </ThemedView>

          <ThemedView style={styles.workoutDetails}>
            <ThemedText style={[styles.workoutName, { color: textColor }]}>
              {workout.name}
            </ThemedText>
            <ThemedText
              style={[styles.workoutInfo, { color: secondaryTextColor }]}
            >
              {formatDate(workout.date)} • {workout.duration}
            </ThemedText>
          </ThemedView>

          <Ionicons
            name="chevron-forward"
            size={24}
            color={secondaryTextColor}
          />
        </ThemedView>
      ))}
    </ThemedCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    gap: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  lastContainer: {
    borderBottomWidth: 0,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  workoutDetails: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
    backgroundColor: "transparent",
  },
  workoutName: {
    fontSize: 18,
    fontWeight: "700",
  },
  workoutInfo: {
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
});
