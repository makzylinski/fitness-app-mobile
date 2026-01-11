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
  const color = useThemeColor({}, "inputLabel");

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[{ backgroundColor }, styles.macroWrapper]}>
        <ThemedText style={[{ color }, styles.macroName]}>
          {props.name}
        </ThemedText>
        <ThemedText style={styles.macroValues}>
          {props.name.slice(0, 1).toUpperCase()}: {props.actualValue} /{" "}
          {props.maxValue}g
        </ThemedText>
      </ThemedView>
      <ThemedView style={{ backgroundColor }}>
        <ProgressBar color={props.color} progressWidth={80}></ProgressBar>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  macroWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  macroName: {
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: 18,
  },
  macroValues: {
    fontWeight: 700,
  },
});
