import React from "react";
import RingLoader from "react-spinners/RingLoader";
import "./styles.scss";

const Loader = (props) => {
  return (
    <div className="loader-container">
      <div className="sweet-loading">
        <RingLoader size={200} color={"#FFE600"} />
      </div>
    </div>
  );
};

export default Loader;
