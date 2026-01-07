import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

export default function CaloriesCounter() {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const primaryColor = useThemeColor({}, "primaryColor");
  const lighterColorFont = useThemeColor({}, "inputLabel");

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ThemedView style={[styles.calories, { backgroundColor }]}>
        <ThemedText style={styles.caloriesLabel}>Calories</ThemedText>
        <ThemedView style={[styles.caloriesValue, { backgroundColor }]}>
          <ThemedText style={[styles.currentCalories, { color: primaryColor }]}>
            1,160
          </ThemedText>
          <ThemedText
            style={[styles.totalCalories, { color: lighterColorFont }]}
          >
            / 2,000 kcal
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={[styles.progressBarContainer, { backgroundColor }]}>
        <ThemedView style={[styles.progressBarBg]}>
          <ThemedView
            style={[
              styles.progressBar,
              { backgroundColor: primaryColor, width: "58%" },
            ]}
          />
        </ThemedView>
      </ThemedView>

      <ThemedView style={[styles.macros, { backgroundColor }]}>
        <ThemedView style={[styles.macroItem, { backgroundColor }]}>
          <ThemedView style={[styles.macroHeader, { backgroundColor }]}>
            <ThemedText style={styles.macroLabel}>Protein</ThemedText>
            <ThemedText style={{ color: lighterColorFont }}>69/140g</ThemedText>
          </ThemedView>
          <ThemedView style={styles.macroProgressBg}>
            <ThemedView
              style={[
                styles.macroProgress,
                { backgroundColor: "#FF9500", width: "49%" },
              ]}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={[styles.macroItem, { backgroundColor }]}>
          <ThemedView style={[styles.macroHeader, { backgroundColor }]}>
            <ThemedText style={styles.macroLabel}>Fat</ThemedText>
            <ThemedText style={{ color: lighterColorFont }}>38/60g</ThemedText>
          </ThemedView>
          <ThemedView style={styles.macroProgressBg}>
            <ThemedView
              style={[
                styles.macroProgress,
                { backgroundColor: "#8E8E93", width: "63%" },
              ]}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={[styles.macroItem, { backgroundColor }]}>
          <ThemedView style={[styles.macroHeader, { backgroundColor }]}>
            <ThemedText style={styles.macroLabel}>Carbs</ThemedText>
            <ThemedText style={{ color: lighterColorFont }}>
              118/220g
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.macroProgressBg}>
            <ThemedView
              style={[
                styles.macroProgress,
                { backgroundColor: primaryColor, width: "54%" },
              ]}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  calories: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  caloriesLabel: {
    fontSize: 20,
    fontWeight: "700",
  },
  caloriesValue: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  currentCalories: {
    fontSize: 20,
    fontWeight: "700",
  },
  totalCalories: {
    fontSize: 16,
  },
  progressBarContainer: {
    marginBottom: 16,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: "#3A3A3C",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 4,
  },
  macros: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  macroItem: {
    flex: 1,
  },
  macroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  macroLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  macroProgressBg: {
    height: 6,
    backgroundColor: "#3A3A3C",
    borderRadius: 3,
    overflow: "hidden",
  },
  macroProgress: {
    height: "100%",
    borderRadius: 3,
  },
});
