import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";
import { FaPlay, FaSadCry } from "react-icons/fa";
import { CiStop1 } from "react-icons/ci";
import Loader from "./Loader";
import Alert from "./Alert";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(5);
  const [inputTime, setInputTime] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      if (seconds === 0) {
        setShowMessage(true);
        setIsRunning(false);
        handleClick();
        setAlertVisibility(true);
      }
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);

        // Check if the target time is reached
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, targetTime]);

  const handleStart = () => {
    if (inputTime) {
      setIsRunning(true);
      handleClick();
    } else {
      alert("no val");
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    handleClick();
  };

  const handleReset = () => {
    setSeconds(0);
    setShowMessage(false);
    setInputTime("");
    handleClick();
  };

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  const handleSetTargetTime = () => {
    if (inputTime) {
      const newTargetTime = parseInt(inputTime, 10);
      if (!isNaN(newTargetTime) && newTargetTime >= 0) {
        setTargetTime(newTargetTime);
      }
      setSeconds(newTargetTime);
      setShowMessage(false);
    } else {
      alert("please enter a valid number");
    }
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
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating((prev) => !prev);
  };
  const [isAlertVisible, setAlertVisibility] = useState(false);

  const closeAlert = () => {
    setAlertVisibility(false);
  };
  return (
    <>
      <div
        className={`${styles.timerContainer}
          ${styles.loader} ${isAnimating ? styles.animating : ""}`}
      >
        <h1 className={styles.timerDisplay}>{formatTime(seconds)}</h1>
      </div>
      {isAlertVisible && <Alert message="Time is up!!" onClose={closeAlert} />}
      {/* {showMessage && <p>Time's up! Message or action here...</p>} */}
      <div className={styles.timerInputContainer}>
        <label htmlFor="targetTimeInput">Set Target Time (seconds): </label>
        <input
          type="text"
          id="targetTimeInput"
          value={inputTime}
          onChange={handleInputChange}
          className={styles.timerInput}
        />
        <button onClick={handleSetTargetTime} className={styles.timerButtons}>
          Set
        </button>

        <div className={styles.timerButtons}>
          <button onClick={handleStart} disabled={isRunning}>
            <FaPlay />
          </button>
          <button onClick={handleStop} disabled={!isRunning}>
            <CiStop1 />
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Timer;
