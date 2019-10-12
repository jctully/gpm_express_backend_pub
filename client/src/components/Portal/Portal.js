import React, { Component } from "react";
import TopBar from "./TopBar";
import Menu from "./Menu"

export default class Portal extends Component {
  render(  ) {
    return (
      <div>
        <TopBar />
        <Menu />
        <h3>Portal</h3>
      </div>
    );
  }
}
