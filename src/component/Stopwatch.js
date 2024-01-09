import React, { useState, useEffect } from "react";
import styles from "./Stopwatch.module.css";
import { FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [recordedTimes, setRecordedTimes] = useState([]);
  const [recordTime, setRecordTime] = useState(null);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    if (isActive === true) {
      handleStop();
    } else {
      setIsActive(true);
    }
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
    setRecordTime(null);
  };

  const handleResume = () => {
    setIsActive(true);
  };

  const handleRecord = () => {
    setRecordTime(formatTime(seconds));
    console.log(recordTime + "handle is clicked");
    if (recordTime !== null) {
      setRecordedTimes((prevTimes) => [...prevTimes, recordTime]);
    }
  };

  const handleRecordDelete = () => {
    setRecordedTimes([]);
  };
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return formattedTime;
  };

  return (
    <div className={styles.stopwatchContainer}>
      <div className={styles.stopwatchCircle}>
        <div className={styles.stopwatchTime}>{formatTime(seconds)}</div>
      </div>
      <div className={styles.stopwatchButtons}>
        <button onClick={handleStart}>
          <FaPlay />
        </button>
        <button onClick={handleReset}>
          <GrPowerReset />
        </button>
        <button onClick={handleRecord}>Record Time</button>
      </div>

      {recordedTimes.length > 0 && (
        <div className={styles.recordedTimes}>
          <h2>Recorded Times:</h2>
          <button onClick={handleRecordDelete}>Delete</button>
          <ul>
            {recordedTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
