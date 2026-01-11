import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type ThemedCardProps = {
  textContent?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export default function ThemedCard({
  textContent,
  children,
  style,
}: ThemedCardProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ backgroundColor }, styles.card, style]}>
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
  },
});
