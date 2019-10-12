import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StudentTasks from './student.tasks.component';
import StudentForms from './student.forms.component';
import StudentClasses from './student.classes.component';


export default class StudentPortal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br></br>
                <h2>Student Portal</h2>
                <br></br>
                <StudentTasks studentId={this.props.match.params.id}/>
                <br></br>
                <StudentForms studentId={this.props.match.params.id}/>
                <br></br>
                <StudentClasses studentId={this.props.match.params.id}/>
            </div>
        )
    }
}