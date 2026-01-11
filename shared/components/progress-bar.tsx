import { ThemedView } from "@/components/ui/themed-view";
import { StyleSheet } from "react-native";

type ProgressBarProps = {
  color: string;
  progressWidth: number;
};

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={[
          styles.kcalProgress,
          {
            backgroundColor: `${props.color}`,
            width: `${props.progressWidth}%`,
          },
        ]}
      />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  wrapper: {},
  container: {
    width: "100%",
    height: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#3A3A3C",
  },
  kcalProgress: {
    height: "100%",
    borderRadius: 10,
  },
});
