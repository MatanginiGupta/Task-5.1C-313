import React from 'react';
import './App.css';
import Header from './Header';
import SelectType from './SelectType';

const appStyle = {
  marginLeft: "20px", 
};

const bannerStyle = {
  backgroundColor: "grey",
  color: "#fff", // Change text color to white
  padding: "10px",
  marginBottom: "20px",
  border: "1px solid #000",
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <div style={bannerStyle}>
        <h1 style={{ margin: 0 }}>New Post</h1>
      </div>
      <SelectType />
    </div>
  );
}

export default App;
