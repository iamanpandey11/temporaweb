import React, { useState } from "react";
import TimezoneClock from "./TimezoneClock";

const OptionList = () => {
  const options = [
    "America/New_York",
    "America/Los_Angeles",
    "Europe/London",
    "Asia/Tokyo",
    "Asia/Kolkata",
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Select a Timezone:</h2>
      <select
        value={selectedOption}
        onChange={handleOptionSelect}
        style={{
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "5px",
        }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <div>
          <h3>
            <TimezoneClock timeZone={selectedOption} />
          </h3>
          {/* Additional content to render based on the selected option */}
        </div>
      )}
    </div>
  );
};

export default OptionList;
