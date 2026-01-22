import { TimerContext } from "@/shared/contexts/timer-context";
import { useContext } from "react";

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) throw new Error("useTimer must be used within TimerProvider");
  return context;
};
