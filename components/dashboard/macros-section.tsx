import { useThemeColor } from "@/hooks/use-theme-color";
import ProgressBar from "@/shared/components/progress-bar";
import { StyleSheet } from "react-native";
import { ThemedText } from "../ui/themed-text";
import { ThemedView } from "../ui/themed-view";

type MacrosProps = {
  name: string;
  color: string;
  actualValue: number;
  maxValue: number;
};

export default function MacrosSection(props: MacrosProps) {
  const backgroundColor = useThemeColor({}, "inputBackground");

  return (
    <ThemedView>
      <ThemedView style={[{ backgroundColor }, styles.macroWrapper]}>
        <ThemedText style={styles.macroName}>{props.name}</ThemedText>
        <ThemedText style={styles.macroValues}>
          {props.name.slice(0, 1).toUpperCase()}: {props.actualValue} /{" "}
          {props.maxValue}g
        </ThemedText>
      </ThemedView>
      <ThemedView style={{ backgroundColor }}>
        <ProgressBar></ProgressBar>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  macroWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  macroName: {
    textTransform: "capitalize",
  },
  macroValues: {
    fontWeight: 700,
  },
});
