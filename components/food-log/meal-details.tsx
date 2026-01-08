import { useThemeColor } from "@/hooks/use-theme-color";
import { Image, StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

type MealDetailsProps = {
  product: {
    id: number;
    name: string;
    dosage: string;
    macros: {
      kcal: number;
      protein: number;
      carbs: number;
      fat: number;
    };
  };
};

export default function MealDetails({ product }: MealDetailsProps) {
  const lighterColorFont = useThemeColor({}, "inputLabel");
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.containerLine}> </ThemedView>
      <ThemedView style={styles.card}>
        <ThemedView style={styles.cardDetails}>
          <ThemedText style={styles.productName}>{product.name}</ThemedText>
          <ThemedText style={[{ color: lighterColorFont }, styles.dosage]}>
            {product.dosage}
          </ThemedText>
          <ThemedView style={styles.macros}>
            <ThemedView style={styles.macroItem}>
              <ThemedText>{product.macros.kcal} kcal</ThemedText>
            </ThemedView>
            <ThemedView style={styles.macroItem}>
              <ThemedText>P: {product.macros.protein}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.macroItem}>
              <ThemedText>C: {product.macros.carbs}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.macroItem}>
              <ThemedText>F: {product.macros.fat}</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.everydaycheapskate.com/wp-content/uploads/20250407-how-to-cook-boneless-skinless-chicken-breast-on-a-cutting-board-with-thyme-garlic-and-red-peppercorns.png",
            }}
          />
        </ThemedView>
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
  cardDetails: {
    backgroundColor: "#222222",
  },
  productName: {
    fontWeight: 700,
  },
  dosage: {
    fontWeight: 600,
  },
  macros: {},
  macroItem: {
    backgroundColor: "#222222",
  },
  imageContainer: {
    backgroundColor: "#222222",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
