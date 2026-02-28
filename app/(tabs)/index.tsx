import CalorieSummary from "@/components/dashboard/calorie-summary";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ThemedView } from "../../components/ui/themed-view";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    const bootstrap = async () => {
      const token = await SecureStore.getItemAsync("access_token");

      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      console.log(token);
    };

    bootstrap();
  }, []);

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <CalorieSummary></CalorieSummary>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
