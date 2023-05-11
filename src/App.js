import React from "react";
import "./styles.css";
import Postdata from "./postdata.js";
import Getdata from "./getdata.js";

export default function App() {
  return (
    <div className="App">
      <h1>POSTDATA</h1>
      <Postdata />

      <h1>GETDATA</h1>
      <Getdata />
    </div>
  );
}
