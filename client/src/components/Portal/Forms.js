import React, { Component } from "react";

import TopBar from "./TopBar";
import Menu from "./Menu"

export default class Forms extends Component {
  render(  ) {
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Forms</h3>
      </div>
    );
  }
}
