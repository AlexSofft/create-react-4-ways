import React from "react";

import Comp1 from "components/comp1/comp1";
import Comp2 from "components/comp2/comp2";
import CompPure from "components/comp3/comp3";
import CompFunc from "components/comp4/comp4";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <p>Hello React</p>
      <Comp1 />
      <Comp2 />
      <CompPure />
      <CompFunc />
    </div>
  );
}

export default App;
