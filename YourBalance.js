import React from "react";

const YourBalance = ({ title, logo, value }) => {
  return (
    <div className="border border-blue-500 text-blue-800 rounded p-4 bg-white">
      <div className="text-center">
        <h3 className="text-2xl font-bold underline">{title}</h3>
      </div>
      <div className="py-4 text-center">
        <img src={logo} alt="logo" className="w-16 mx-auto" />
        <h2 className="text-5xl py-3 text-orange-500">
          <span>{value}</span> BTC
        </h2>
        <p>Approx USD / s $4.02 </p>
      </div>
    </div>
  );
};

export default YourBalance;
