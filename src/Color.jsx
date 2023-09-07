import React from "react";

function Color(props) {
  const style = {
    backgroundColor: "white", // White background color
   // padding: "5px", // Optional: Add padding for spacing
  };

  return (
    <span style={style}>{props.text}</span>
  );
}

export default Color;