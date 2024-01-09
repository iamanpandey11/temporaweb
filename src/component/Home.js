import React, { useState, useEffect } from "react";
import OptionList from "./OptionList";
const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [counter, setCounter] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleColorChange = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  const handleIncrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <OptionList />
    </div>
  );
};

export default Home;
