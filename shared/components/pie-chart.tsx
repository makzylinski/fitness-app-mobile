import { ThemedView } from "@/components/ui/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { StyleSheet } from "react-native";

export default function PieChart() {
  const backgroundColor = useThemeColor({}, "inputLabel");
  return (
    <ThemedView>
      <ThemedView style={[{}, styles.pieChart]}></ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  pieChart: {
    borderRadius: 60,
    width: 120,
    height: 120,
    backgroundColor: "#3A3A3C",
  },
});
