import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export type ThemedInputProps = TextInputProps & {
  label?: string;
  rightIcon?: React.ReactNode;
  labelStyle?: any;
};

export function ThemedInput({
  label,
  rightIcon,
  labelStyle,
  ...props
}: ThemedInputProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const textColor = useThemeColor({}, "text");
  const placeholderColor = useThemeColor({}, "icon");
  const inputLabelColor = useThemeColor({}, "inputLabel");

  return (
    <ThemedView style={[{ backgroundColor }, styles.container]}>
      {label && (
        <ThemedText
          style={[{ color: inputLabelColor }, styles.label, labelStyle]}
        >
          {label}
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
    fontWeight: 700,
    marginBottom: 0,
    fontSize: 12,
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
    paddingRight: 20,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
