import React from "react";

const Loading = () => {
    return (
        <div className="loading_container">
          <div className="loading_spinner"></div>
          <p className="loading_text">Loading...</p>
          <p className="loading_subtext">Connecting lives, one drop at a time</p>
        </div>
      );
};

export default Loading;
