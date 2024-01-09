// Loader.js
import React, { useState } from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating((prev) => !prev);
  };

  return (
    <div
      className={`${styles.loader} ${isAnimating ? styles.animating : ""}`}
      onClick={handleClick}
    >
      Click me to toggle animation
    </div>
  );
};

export default Loader;
