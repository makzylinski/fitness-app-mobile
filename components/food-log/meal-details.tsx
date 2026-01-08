import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet } from "react-native";
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
  const primaryColor = useThemeColor({}, "primaryColor");
  const backgroundColor = useThemeColor({}, "inputBackground");

  const onExchange = () => console.log("Exchange");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ backgroundColor }, styles.containerLine]} />
      <ThemedView style={[{ backgroundColor }, styles.card]}>
        <ThemedView style={[{ backgroundColor }, styles.leftSection]}>
          <ThemedText style={styles.productName}>{product.name}</ThemedText>
          <ThemedText style={[{ color: lighterColorFont }, styles.dosage]}>
            {product.dosage}
          </ThemedText>
          <ThemedView style={styles.kcal}>
            <ThemedText style={styles.kcalText}>
              {product.macros.kcal} kcal
            </ThemedText>
          </ThemedView>
          <ThemedView style={[{ backgroundColor }, styles.macrosRow]}>
            <ThemedView style={[{ backgroundColor }, styles.macroBox]}>
              <ThemedText style={styles.macroText}>
                P: {product.macros.protein}g
              </ThemedText>
            </ThemedView>
            <ThemedView style={[{ backgroundColor }, styles.macroBox]}>
              <ThemedText style={styles.macroText}>
                C: {product.macros.carbs}g
              </ThemedText>
            </ThemedView>
            <ThemedView style={[{ backgroundColor }, styles.macroBox]}>
              <ThemedText style={styles.macroText}>
                F: {product.macros.fat}g
              </ThemedText>
            </ThemedView>
          </ThemedView>
          <Pressable onPress={onExchange} style={styles.exchange}>
            <Ionicons name="swap-horizontal" size={18} color={primaryColor} />
            <ThemedText style={[{ color: primaryColor }, styles.exchangeText]}>
              Exchange
            </ThemedText>
          </Pressable>
        </ThemedView>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.everydaycheapskate.com/wp-content/uploads/20250407-how-to-cook-boneless-skinless-chicken-breast-on-a-cutting-board-with-thyme-garlic-and-red-peppercorns.png",
          }}
        />
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
    width: 3,
    marginLeft: 10,
  },
  card: {
    padding: 12,
    width: "94%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  leftSection: {
    flex: 1,
  },
  productName: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 2,
  },
  dosage: {
    fontSize: 13,
    marginBottom: 10,
  },
  kcal: {
    backgroundColor: "#3A3A3A",
    borderWidth: 1,
    borderColor: "#4A4A4A",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  macrosRow: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 12,
    flexWrap: "wrap",
  },
  macrosColumn: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  kcalText: {
    color: "#ECEDEE",
    fontSize: 13,
    fontWeight: "600",
  },
  macroBox: {
    borderWidth: 1,
    borderColor: "#2EC4B6",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
  },
  macroText: {
    color: "#2EC4B6",
    fontSize: 13,
    fontWeight: "600",
  },
  exchange: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  exchangeText: {
    fontSize: 13,
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
