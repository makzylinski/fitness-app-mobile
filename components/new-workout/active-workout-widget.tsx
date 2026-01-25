import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { IconSymbol } from "../ui/icon-symbol";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function ActiveWorkoutWidget() {
  const primaryColor = useThemeColor({}, "primaryColor");

  return (
    <ThemedView style={[{ backgroundColor: primaryColor }, styles.container]}>
      <ThemedView
        style={[{ backgroundColor: primaryColor }, styles.leftSection]}
      >
        <ThemedView
          style={[
            styles.exerciseIconBox,
            { backgroundColor: primaryColor + "30" },
          ]}
        >
          <IconSymbol name="dumbbell.fill" size={28} color="white" />
          <ThemedView style={styles.liveDot} />
        </ThemedView>
        <ThemedView
          style={[{ backgroundColor: primaryColor }, styles.textsColumn]}
        >
          <ThemedText style={styles.liveText}>
            <ThemedText style={styles.liveLabel}>Live: </ThemedText>Push Day
            Routine
          </ThemedText>
          <ThemedView
            style={[{ backgroundColor: primaryColor }, styles.rowTime]}
          >
            <ThemedView style={styles.timeDot} />
            <ThemedText style={styles.timeText}>42 : 15</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <ThemedView
        style={[{ backgroundColor: primaryColor }, styles.rightSection]}
      >
        <ThemedView style={styles.viewButton}>
          <ThemedText style={styles.viewButtonText}>View</ThemedText>
          <IconSymbol name="chevron.right" size={20} color={primaryColor} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    zIndex: 100,
    width: "90%",
    padding: 16,
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  exerciseIconBox: {
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    position: "relative",
  },
  liveDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#1de9b6",
  },
  textsColumn: {
    flexDirection: "column",
    justifyContent: "center",
  },
  liveText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
    marginBottom: 2,
  },
  liveLabel: {
    fontWeight: "bold",
    color: "#fff",
  },
  rowTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1de9b6",
    marginRight: 6,
  },
  timeText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
  },
  rightSection: {
    marginLeft: 12,
  },
  viewButton: {
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  viewButtonText: {
    color: "#1de9b6",
    fontWeight: "bold",
    fontSize: 17,
    marginRight: 6,
  },
});
