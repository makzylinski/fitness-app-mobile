import { TimerContext } from "@/shared/contexts/TimerContext";
import { useContext } from "react";

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) throw new Error("useCounter must be used within TimerProvider");
  return context;
};
