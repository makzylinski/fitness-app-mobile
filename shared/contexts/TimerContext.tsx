import { createContext, ReactNode, useState } from "react";

type TimerType = {
  time: number;
  increment: () => void;
};

export const TimerContext = createContext<TimerType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState(0);
  const increment = () => setTime((t) => t + 1);

  return (
    <TimerContext.Provider value={{ time, increment }}>
      {children}
    </TimerContext.Provider>
  );
};
