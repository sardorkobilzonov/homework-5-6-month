import React from "react";

function Container({ color }) {
  const containerStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: color,
    border: "1px solid black",
  };

  return <div style={containerStyle}></div>;
}

export default Container;
