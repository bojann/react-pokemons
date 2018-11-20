import React from "react";
import ReactLoading from "react-loading";

import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div>
      <ReactLoading
        type="spinningBubbles"
        className="custom-spinner"
        color="#fffc00"
        height="356"
        width="200"
      />
    </div>
  );
};

export default LoadingSpinner;
