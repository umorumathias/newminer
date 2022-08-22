import React from "react";

const MinedSession = ({ value }) => {
  return (
    <div className="text-center p-5 text-blue-800 rounded drop-shadow-lg bg-white">
      <div>
        <h3>Mined This Session</h3>
      </div>
      <div>
        <h2 className="text-2xl py-2 mb-3 text-orange-500">{value}</h2>
      </div>
    </div>
  );
};

export default MinedSession;
