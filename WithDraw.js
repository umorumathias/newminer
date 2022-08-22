import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const WithDraw = ({ balance }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("0.000000");
  const [isEnable, setIsEnable] = useState(false);
  useEffect(() => {
    setWithdrawAmount(balance);
  }, [balance]);

  // console.log(typeof withdrawAmount);

  useEffect(() => {
    if (withdrawAmount >= "0.000500") {
      setIsEnable(true);
    } else {
      console.log("You can not withdraw your amount");
    }
  }, [withdrawAmount]);
  return (
    <div className="text-center p-5 drop-shadow-xl rounded text-blue-800 bg-white">
      <div>
        <h3>Minimal withdrawal amount 0.000500 BTC</h3>
        <p>Your current balance is: {withdrawAmount} BTC</p>
      </div>
      <div className="mt-3">
        <Link to="/withdraw">
          <button
            className={`${isEnable ? "btn-border-orange" : "disable-btn"}`}
            disabled={!isEnable}
          >
            Withdraw
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WithDraw;
