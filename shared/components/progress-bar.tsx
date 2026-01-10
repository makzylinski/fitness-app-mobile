import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";

export default function ProgressBar() {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView style={[{ backgroundColor }, styles.container]}>
      <ThemedText>progress bar</ThemedText>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {},
});
