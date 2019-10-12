import React, { Component } from "react";
import { Route } from "react-router-dom";

import TopBar from "./TopBar";
import Menu from "./Menu"
import StudentTasks from "../Student/student.tasks.component";
import StudentPortal from "../Student/student.portal.component";
import EditStudent from "../Admin/edit.student.component";

export default class Student extends Component {
  render(  ) {
    return (
      <div>
        <TopBar />
        <Menu />
        <Route path="/student/:id/portal" render={(props) => <StudentPortal {...props} studentDisplay="true" />} />
        <Route path="/student/:id/portal" component={EditStudent} />
      </div>
    );
  }
}
