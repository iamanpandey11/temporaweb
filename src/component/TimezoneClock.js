import React, { useState, useEffect } from "react";
import styles from "./TimezoneClock.module.css";

const TimezoneClock = ({ timeZone }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour12: true,
    timeZone,
  });

  return (
    <div className={styles.clockContainer}>
      <h2 className={styles.clockTitle}>Time in {timeZone}</h2>
      <p className={styles.clockTime}>{formattedTime}</p>
    </div>
  );
};

export default TimezoneClock;
