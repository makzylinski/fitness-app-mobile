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
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.card}>
        <ThemedText>{product.name}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {},
});
