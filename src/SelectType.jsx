import React, { useState } from "react";
import Article from './Article';
import Question from './Question';
import Header from './Header';
import PostButton from "./PostButton";

const center = {
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  marginLeft: "250px",
};

const bannerStyle = {
  backgroundColor: "#003c78", 
  color: "#fff", 
  padding: "10px",
  marginBottom: "20px",
  border: "1px solid #000",
};

const labelStyle = {
  fontWeight: "bold", 
};

function SelectType() {
  const [question, setForm] = useState("Question");

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const condition = () => {
    if (question === "Question") {
      return <Question />;
    }
    if (question === "Article") {
      return <Article />;
    }
  };

  return (
    <div className="container">
      <form style={center}>
        <label style={labelStyle}>Select Post Type:</label>
        <input
          type="radio"
          value="Question"
          id="question"
          name="post"
          onChange={handleChange}
          checked={question === "Question"}
        />
        <label htmlFor="question">Question</label>
        <input
          type="radio"
          value="Article"
          id="article"
          name="post"
          onChange={handleChange}
          checked={question === "Article"}
        />
        <label htmlFor="article">Article</label>
      </form>
      <div style={bannerStyle}>
        <Header title="What do you want to ask or share" />
      </div>
      {condition()}
      <PostButton />
    </div>
  );
}

export default SelectType;
