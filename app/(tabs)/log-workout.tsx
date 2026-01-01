import InputSearch from "@/shared/components/input-search";
import { StyleSheet, Text, View } from "react-native";

export default function LogWorkout() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Log your workout</Text>
      <InputSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
