/*
import React, {Component} from 'react';

export default class ListStudents extends Component {
    render() {
        return (
            <div>
                <h4>List of students managed by this admin here</h4>
                <p>Student 1 (hyperlink to student profile)</p>
                <p>Student 2</p>
                <p>Student 3</p>
                <p>Student 4</p>
            </div>
        );
    }
}
*/

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';

/*
import EditTodo from "./edit-todo.component";
*/

const Student = props => (
    <tr>
        <td className='student'>
            <Link to={"/admin/student/"+props.student._id+"/tasks"}>{props.student.student_name}</Link>
        </td>
        <td>{props.student.student_username}</td>
        <td>{props.student.western_id}</td>
        <td>{props.student.admission_qtr}</td>
        <td>{props.student.program_code}</td>
        <td>{props.student.status}</td>
        <Dropdown className='inline'>
            <DropdownButton  drop='down' title='Forms'>
                <Dropdown.Item href={props.student.plan_of_study_link}>
                    Plan of Study
                </Dropdown.Item>
                <Dropdown.Item href={props.student.research_form_692_link}>
                    Research Form
                </Dropdown.Item>
                <Dropdown.Item href={props.student.degree_app_form_link}>
                    Degree Application Form
                </Dropdown.Item>
                <Dropdown.Item href={props.student.degree_rec_form_link}>
                    Degree Recommendation Form
                </Dropdown.Item>
            </DropdownButton>
        </Dropdown>
        <td>{props.student.ta_assignment}</td>
        <td>{props.student.other_notes}</td>
        <td>
            <Link to={"/admin/students/edit/"+props.student._id}>Edit</Link>
        </td>
    </tr>
)

export default class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {students: []};
    }

    handleClick(qtr) {
        axios.get('https://www.gpmbackend.com/students?qtr=' + qtr, {
          })
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
        this.forceUpdate()
    }

    handleSearch(qry) {
        axios.get('https://www.gpmbackend.com/students?search=' + qry, {
          })
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
        this.forceUpdate()
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/students', {
          })
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    studentList() {
        return this.state.students.map(function(currentStudent, i){
            return <Student student={currentStudent} key={i} />;
        })
    }

    

    render() {
        return (
            <div>
                <h3>Student List</h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <input id='filter-search' className='inline' type="text" ref="username" placeholder="Name, ID, or W#" />
                <button id='submit-filter' type="submit" className='submit'  onClick={() => {
                    this.handleSearch(document.getElementById('filter-search').value); } }><i className="fa fa-search"></i></button>
                <Dropdown className='inline'>
                    <DropdownButton  drop='down' title='Quarter'>
                        <Dropdown.Item onClick={() => {
                            this.componentDidMount(); } }>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            this.handleClick("f19"); } }>Fall 19</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            this.handleClick("w19"); } }>Winter 19</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            this.handleClick("s19"); } }>Spring 19</Dropdown.Item>
                    </DropdownButton>
                </Dropdown>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Username</th>
                            <th>Western #</th>
                            <th>Admission Qtr</th>
                            <th>Program Code</th>
                            <th>Current Status</th>
                            <th>Forms</th>
                            <th>TA quarters Assigned</th>
                            <th>Notes</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.studentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
