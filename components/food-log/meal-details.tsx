import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

type MealDetailsProps = {
  product: {
    id: number;
    name: string;
    macros: {
      kcal: number;
      protein: number;
      carbs: number;
      fat: number;
    };
  };
};

export default function MealDetails({ product }: MealDetailsProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.containerLine}> </ThemedView>
      <ThemedView style={[{ backgroundColor }, styles.card]}>
        <ThemedText>{product.name}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  containerLine: {
    backgroundColor: "#222222",
    width: 3,
    marginLeft: 10,
  },
  card: {
    backgroundColor: "#222222",
    padding: 10,
    width: "94%",
    borderRadius: 10,
  },
});
