import React from "react";
import Title from "./Title";
import Problem from "./Problem";

function Question() {
  const containerStyle = {
    display: "block",
    flexDirection: "rows",
    alignItems: "left",
    fontSize: "25px",
    backgroundColor: "#f0f8ff", // Light blue background color
    padding: "10px",
  };

  const headingStyle = {
    textAlign: "left",
    fontWeight: "bold",
    textDecoration: "underline",
    marginBottom: "5px",
  };

  const inputStyle = {
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Title:</div>
      <Title
        placeholder="Start your question with how, what, why, etc"
        style={inputStyle}
      />
      <div style={headingStyle}>Describe your problem:</div>
      <Problem
        rows="15"
        style={inputStyle}
      />
      <div style={headingStyle}>Tags:</div>
      <Title
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
        style={inputStyle}
      />
    </div>
  );
}

export default Question;
