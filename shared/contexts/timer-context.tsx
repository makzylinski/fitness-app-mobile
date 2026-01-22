import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type TimerType = {
  isTimerActive: boolean;
  setIsTimerActive: Dispatch<SetStateAction<boolean>>;
  time: string;
  seconds: number;
  resetTimer: () => void;
};

export const TimerContext = createContext<TimerType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const intervalRef = (global as any).__timerIntervalRef || {
    current: undefined,
  };
  (global as any).__timerIntervalRef = intervalRef;

  useEffect(() => {
    if (isTimerActive) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000);
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    };
  }, [isTimerActive]);

  useEffect(() => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(Math.floor(seconds % 60)).padStart(2, "0");
    setTime(`${h}:${m}:${s}`);
  }, [seconds]);

  const resetTimer = () => {
    setSeconds(0);
    setTime("00:00:00");
  };

  return (
    <TimerContext.Provider
      value={{ isTimerActive, setIsTimerActive, time, seconds, resetTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
};
