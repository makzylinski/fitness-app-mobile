import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet, TextInput } from "react-native";

type NotesProps = {
  notes: string;
  setNotes: (text: string) => void;
  label?: string;
  placeholder?: string;
};

export default function Notes({
  notes,
  setNotes,
  label,
  placeholder,
}: NotesProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");
  const inputLabelColor = useThemeColor({}, "inputLabel");
  const textColor = useThemeColor({}, "text");
  const placeholderColor = useThemeColor({}, "icon");

  return (
    <ThemedView style={{ backgroundColor }}>
      {label && (
        <ThemedText style={[{ color: inputLabelColor }, styles.label]}>
          {label.toUpperCase()}
        </ThemedText>
      )}
      <TextInput
        editable
        multiline
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        numberOfLines={3}
        maxLength={200}
        onChangeText={(text) => setNotes(text)}
        value={notes}
        style={[{ backgroundColor, color: textColor }, styles.textInput]}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    padding: 10,
    marginTop: 0,
  },
  label: {
    fontWeight: 700,
    marginBottom: 0,
    fontSize: 10,
    alignSelf: "flex-start",
  },
});
