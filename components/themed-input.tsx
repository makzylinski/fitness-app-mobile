import { useThemeColor } from "@/hooks/use-theme-color";
import { TextInput, TextInputProps } from "react-native";

export function ThemedInput(props: TextInputProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const textColor = useThemeColor({}, "text");
  const placeholderColor = useThemeColor({}, "icon");

  return (
    <TextInput
      {...props}
      style={[{ backgroundColor, color: textColor }, props.style]}
      placeholderTextColor={placeholderColor}
    />
  );
}
