import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export type ThemedInputProps = TextInputProps & {
  label?: string;
  rightIcon?: React.ReactNode;
};

export function ThemedInput({ label, rightIcon, ...props }: ThemedInputProps) {
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
      <View style={styles.inputWrapper}>
        <TextInput
          {...props}
          style={[
            { backgroundColor, color: textColor },
            styles.input,
            ...(rightIcon ? [styles.inputWithIcon] : []),
            props.style,
          ]}
          placeholderTextColor={placeholderColor}
        />
        {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginBottom: 0,
    fontSize: 10,
    marginLeft: 25,
    alignSelf: "flex-start",
  },
  inputWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  inputWithIcon: {
    paddingRight: 40,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
