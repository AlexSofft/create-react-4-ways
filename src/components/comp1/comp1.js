import React, { Component } from "react";

class Comp1 extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Component, created using React.createElement"
    );
  }
}

export default Comp1;
