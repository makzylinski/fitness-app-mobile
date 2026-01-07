import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

type MealProps = {
  meal: {
    id: number;
    mealName: string;
  }[];
};

export default function Meal({ meal }: MealProps) {
  const [isMealDetailsOpen, setIsMealDetailsOpen] = useState<{
    index: number;
    isOpen: boolean;
  }>();

  const backgroundColor = useThemeColor({}, "inputBackground");
  const lighterColorFont = useThemeColor({}, "inputLabel");
  const primaryColor = useThemeColor({}, "primaryColor");

  const onOpenScanner = () => console.log("open phone camera");
  const onAddMeal = () => console.log("on Add Meal");

  return (
    <ThemedView style={styles.container}>
      {meal.map((mealDetail, index) => (
        <>
          <ThemedView
            style={[{ backgroundColor }, styles.card]}
            key={mealDetail.id}
          >
            <Pressable
              onPress={() =>
                setIsMealDetailsOpen({
                  index,
                  isOpen: !isMealDetailsOpen?.isOpen,
                })
              }
            >
              <ThemedView style={styles.info}>
                <ThemedView style={[{ backgroundColor }, styles.header]}>
                  <ThemedText style={styles.mealName}>
                    {mealDetail.mealName}
                  </ThemedText>
                  <ThemedText style={[{ color: lighterColorFont }, styles.dot]}>
                    •
                  </ThemedText>
                  <ThemedText
                    style={[{ color: lighterColorFont }, styles.time]}
                  >
                    08:30 AM
                  </ThemedText>
                </ThemedView>

                <ThemedView
                  style={[{ backgroundColor }, styles.macrosContainer]}
                >
                  <ThemedText style={styles.kalories}>560 kcal</ThemedText>
                  <ThemedText
                    style={[{ color: lighterColorFont }, styles.macros]}
                  >
                    P: 24g
                  </ThemedText>
                  <ThemedText
                    style={[{ color: lighterColorFont }, styles.macros]}
                  >
                    F: 18g
                  </ThemedText>
                  <ThemedText
                    style={[{ color: lighterColorFont }, styles.macros]}
                  >
                    C: 68g
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            </Pressable>

            <ThemedView style={[{ backgroundColor }, styles.action]}>
              <Pressable onPress={onOpenScanner}>
                <Ionicons
                  name="barcode-outline"
                  size={28}
                  color={lighterColorFont}
                />
              </Pressable>

              <Pressable onPress={onAddMeal}>
                <Ionicons name="add-circle" size={32} color={primaryColor} />
              </Pressable>

              <Pressable
                onPress={() =>
                  setIsMealDetailsOpen({
                    index,
                    isOpen: !isMealDetailsOpen?.isOpen,
                  })
                }
              >
                <Ionicons
                  name="chevron-up"
                  size={28}
                  color={lighterColorFont}
                />
              </Pressable>
            </ThemedView>
          </ThemedView>
          {isMealDetailsOpen?.index === index && isMealDetailsOpen.isOpen && (
            <ThemedView>
              <ThemedText>elo</ThemedText>
            </ThemedView>
          )}
        </>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mealName: {
    fontWeight: "700",
    fontSize: 18,
  },
  dot: {
    fontSize: 16,
  },
  time: {
    fontSize: 14,
  },
  macrosContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  kalories: {
    color: "#2EC4B6",
    fontWeight: "700",
    fontSize: 16,
  },
  macros: {
    fontSize: 14,
  },
});
