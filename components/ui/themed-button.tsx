import { useThemeColor } from "@/hooks/use-theme-color";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { ThemedView } from "./themed-view";

export type ThemedButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  color?: string;
};

export default function ThemedButton({
  title,
  onPress,
  style,
  color,
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor({}, "primaryColor");

  return (
    <ThemedView style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[
          { backgroundColor: color || backgroundColor },
          styles.button,
          style,
        ]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
});
