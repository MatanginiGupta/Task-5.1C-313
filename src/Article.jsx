import React from "react";
import Title from "./Title";
import Problem from "./Problem";

const grayBackgroundStyle = {
  backgroundColor: "#f0f8ff", // Light blue background color
  padding: "10px",
};

const headingStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  textDecoration: "underline",
};

function Color(props) {
  const style = {
    backgroundColor: "#f0f8ff", // Light blue background color
    padding: "10px",
    marginLeft: "5px",
  };

  return <span style={{ ...style, ...headingStyle }}>{props.text}</span>;
}

function Article() {
  const inputStyle = {
    backgroundColor: "white",
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <div>
      <div style={grayBackgroundStyle}>
        <Color text="Title" />
        <Title
          placeholder="Enter a descriptive title"
          rows="10"
          style={inputStyle}
        />
        <br />
      </div>
      <div style={grayBackgroundStyle}>
        <Color text="Abstract:" />
        <Problem
          placeholder="Enter a 1-paragraph abstract"
          rows="10"
          style={inputStyle}
        />
      </div>
      <br />
      <div style={grayBackgroundStyle}>
        <Color text="Article Text:" />
        <Problem
          placeholder="Enter a 1-paragraph article text"
          rows="15"
          style={inputStyle}
        />
      </div>
      <br />
      <br />
      <div style={grayBackgroundStyle}>
        <Color text="Tags" />
        <Title
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          rows="20"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

export default Article;
