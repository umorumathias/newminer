import React, { useEffect, useState } from "react";
import MinedTime from "../../components/MinedTime";
import WithDraw from "../../components/WithDraw";
import YourBalance from "../../components/YourBalance";
import MoneroLogo from "../../../svg/bitcoin.img";
import MinedSession from "../../components/MinedSession";
import MiningSpeed from "../../components/MiningSpeed";
import Hashed from "../../components/Hashed";
import Languages from "../../components/Languages";
import Header from "../common/Header";
import SocialLinks from "../common/SocialLinks";

const Home = () => {
  const [initValue, setInitValue] = useState("");
  const [userId, setUserId] = useState("");

  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    const getAmountLocalStorage = JSON.parse(localStorage.getItem("amount"));

    const getUserId = JSON.parse(localStorage.getItem("user-id"));

    if (getUserId !== null) {
      setUserId(getUserId);
    } else {
      // Create user id
      const createId = Math.random().toString(8).slice(2, 8);
      localStorage.setItem("user-id", JSON.stringify(createId));
    }

    let value = 0;

    if (getAmountLocalStorage !== null) {
      value = getAmountLocalStorage;
    }

    const intervalId = setInterval(() => {
      if (isPlay) {
        value += 0.00000002;
        setInitValue(value);
        localStorage.setItem("amount", JSON.stringify(value));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlay]);

  const handleStopInterval = () => {
    setIsPlay((prev) => !prev);
  };

  // withdraw amount
  // const balance = parseFloat(initValue).toFixed();

  return (
    <div className="container mx-auto px-3">
      <div className="py-3">
        <Header />
      </div>
      <div className="my-3 text-center">
        <h1 className="text-4xl text-blue-800 font-semibold">
          INCREASE MINING SPEED UP TO 2000%
        </h1>
        <a className="btn-orange" href="#">
          DOWNLOAD THE DESKTOP VERSION <br />
          <span className="text-sm">
            and increase your mining speed by 2000%
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <MiningSpeed handleStopInterval={handleStopInterval} isPlay={isPlay} />
        <Hashed />
      </div>
      <div className="py-5">
        <YourBalance
          value={initValue ? initValue.toFixed(8) : ""}
          title="Your Balance"
          logo={MoneroLogo}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pb-5">
        <MinedSession value={initValue ? initValue.toFixed(8) : ""} />
        <MinedTime />
        <WithDraw balance={initValue ? initValue.toFixed(6) : ""} />
      </div>
      <div className="text-center p-10 text-blue-800 bg-orange-50 rounded">
        <h2 className="text-3xl mb-3 font-semibold">Invite Friend</h2>
        <p className="text-lg">
          	Invite your friends using the referral link and earn 30% of 
			their earnings and a discount for the exchange fee on btc_earner
			You will also recieve 10% commission of your down tree.
        </p>
        <button className="btn-border-orange mt-5">
          {`https://merry-basbousa-e6b09f.netlify.app/${userId}`}
        </button>
      </div>
      <div className="mt-5 rounded border">
        <SocialLinks />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-5 text-center">
        <div className="p-20 bg-white rounded border">
          <h3 className="alert inline-block">Alert</h3>
          <p className="text-blue-800">
            You need to keep this page opened to continue mining.
          </p>
        </div>
        <div className="p-20 bg-white rounded border">
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Home;
