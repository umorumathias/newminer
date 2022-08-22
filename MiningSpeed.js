import React from "react";

const MiningSpeed = ({ handleStopInterval, isPlay }) => {
  return (
    <div className="text-center p-5 drop-shadow-lg bg-white">
      <h3 className="text-lg text-blue-800">Mining Speed</h3>
      <input
        className="block mx-auto my-5 w-2/4"
        type="range"
        min="0"
        max="100"
      />
      <button onClick={handleStopInterval} className="btn-border-orange">
        {isPlay ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default MiningSpeed;
