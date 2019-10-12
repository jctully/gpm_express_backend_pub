import React, { Component } from "react";
import mainLogo from "../../Assets/westernlogo_white_sm.png";
import  Student from  "../../Assets/Student.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class TopBar extends Component {
  render() {
    return (
      <header className="TopBar">
        <a href="/"><img src={mainLogo} alt="Western Logo" /></a>
        <h4>Grad Program Manager!</h4>
        <span class="name">{ "Hello, " + Student[0].first_name + " " + Student[0].last_name }</span>
      </header>
    );
  }
}
