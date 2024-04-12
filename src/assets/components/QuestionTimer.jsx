import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timer, setTimer] = useState(timeout);

  useEffect(() => {
    const timeoutTimer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setTimer((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(intervalTimer);
    };
  }, []);

  return <progress value={timer} max={timeout} className={mode}></progress>;
}
