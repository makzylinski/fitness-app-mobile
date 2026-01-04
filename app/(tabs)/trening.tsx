import LogWorkout from "@/components/log-workout";
import { Colors } from "@/constants/theme";
import { useState } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import WorkoutHistory from "../../components/workout-history";

export default function Trening() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const colorScheme = useColorScheme() ?? "dark";
  const colors = Colors[colorScheme];

  const [routes] = useState([
    { key: "log-wortkout", title: "Log Workout" },
    { key: "history", title: "History" },
  ]);

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "log-wortkout":
        return <LogWorkout />;
      case "history":
        return <WorkoutHistory />;
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.primaryColor }}
      style={{
        backgroundColor: colors.background,
        marginTop: 80,
      }}
      activeColor={colors.text}
      inactiveColor={colors.icon}
      labelStyle={{ fontWeight: "700" }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      lazy={false}
    />
  );
}
