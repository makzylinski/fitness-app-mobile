import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export type ThemedInputProps = TextInputProps & {
  label?: string;
};

export function ThemedInput({ label, ...props }: ThemedInputProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const textColor = useThemeColor({}, "text");
  const placeholderColor = useThemeColor({}, "icon");
  const inputLabelColor = useThemeColor({}, "inputLabel");

  return (
    <ThemedView style={styles.container}>
      {label && (
        <ThemedText style={[{ color: inputLabelColor }, styles.label]}>
          {label.toUpperCase()}
        </ThemedText>
      )}
      <TextInput
        {...props}
        style={[{ backgroundColor, color: textColor }, props.style]}
        placeholderTextColor={placeholderColor}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 500,
  },
  label: {
    marginBottom: 0,
    fontSize: 10,
    marginLeft: 25,
    alignSelf: "flex-start",
  },
});
