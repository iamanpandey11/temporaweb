// Alert.js
import React, { useState } from "react";
import styles from "./Alert.module.css";

const Alert = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={`${styles.alert} ${isVisible ? styles.show : ""}`}>
      <div className={styles.alertContent}>
        <span className={styles.closeButton} onClick={handleClose}>
          &times;
        </span>
        {message}
      </div>
    </div>
  );
};

export default Alert;
