import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "250px",
  marginTop: "20px",
};

const buttonStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  outline: "none",
  border: "2px solid #007bff",
  padding: "10px 20px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
  transition: "background-color 0.3s", // Add a smooth transition
};

const buttonHoverStyle = {
  backgroundColor: "#0056b3", // Change the color on hover
};

function PostButton() {
  return (
    <div style={containerStyle}>
      <button style={{ ...buttonStyle, ":hover": buttonHoverStyle }}>Post</button>
    </div>
  );
}

export default PostButton;
