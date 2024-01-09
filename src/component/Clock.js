import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.clockContainer}`}>
      <h1 className={styles.clockDisplay}>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
