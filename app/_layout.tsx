import { Colors } from "@/constants/theme";
import { TimerProvider } from "@/shared/contexts/timer-context";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.dark.background,
    text: Colors.dark.text,
    primary: Colors.dark.tint,
    card: Colors.dark.background,
  },
};

export default function RootLayout() {
  return (
    <TimerProvider>
      <ThemeProvider value={CustomDarkTheme}>
        {/* <ActiveWorkoutWidget></ActiveWorkoutWidget> */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </TimerProvider>
  );
}
