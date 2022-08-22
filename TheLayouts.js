import React from "react";
import BackgroundImage from "../../images/background.png";
import Main from "./common/Main";

const TheLayouts = () => {
  return (
    <div className="pb-5" style={{ background: `url(${BackgroundImage})` }}>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default TheLayouts;
