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
  time: string;
  seconds: number;
  setIsTimerActive: Dispatch<SetStateAction<boolean>>;
};

export const TimerContext = createContext<TimerType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isTimerActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
        console.log(seconds);
      }, 1000);
    } else if (!isTimerActive) {
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive]); //seconds

  useEffect(() => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(Math.floor(seconds % 60)).padStart(2, "0");

    setTime(`${h}:${m}:${s}`);
  }, [seconds]);

  return (
    <TimerContext.Provider
      value={{ isTimerActive, setIsTimerActive, time, seconds }}
    >
      {children}
    </TimerContext.Provider>
  );
};
