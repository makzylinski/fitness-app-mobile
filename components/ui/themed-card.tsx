import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type ThemedCardProps = {
  borderRadius?: number;
  textContent?: string;
  children?: React.ReactNode;
};

export default function ThemedCard({
  textContent,
  children,
  borderRadius,
}: ThemedCardProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ backgroundColor }, styles.card]}>
        {textContent && <ThemedText>{textContent}</ThemedText>}
        {children}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
});
