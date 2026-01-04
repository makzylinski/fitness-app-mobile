import LogWorkout from "@/components/log-workout";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView } from "react-native-tab-view";
import WorkoutHistory from "../../components/workout-history";

export default function Trening() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

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

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      lazy={false}
    />
  );
}
