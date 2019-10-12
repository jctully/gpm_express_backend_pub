import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

const Task = props => (
    <tr>
        {/* Maybe if completed put green check box here somehow */}
        <td className="checkbox">
            <input type="checkbox" checked={props.task.task_completed}></input>
        </td>
        <td className={props.task.task_completed ? 'completed' : ''}>
            {props.task.task_name}
        </td>
        <td className={props.task.task_completed ? 'completed' : ''}>
            {props.task.task_description}
        </td>
        <td className={props.task.task_completed ? 'completed' : ''}>
            <a href={props.task.task_link}>{props.task.task_link}</a> {/* If link doesn't have http:// in link will redirect locally */}
        </td>
        <td>
            <Link to={"/admin/tasks/edit/"+props.task._id}>Edit</Link>
        </td>
        
    </tr>
)

export default class StudentTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            student: ''
        };
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/tasks/student/'+this.props.studentId)
            .then(response => {
                this.setState({ tasks: response.data });
            })
            .catch(function (error){
                console.log(error);
            })

        axios.get('https://www.gpmbackend.com/students/'+this.props.studentId)
            .then(response => {
                this.setState({ student: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    taskList() {
        return this.state.tasks.map(function(currentTask, i){
            return <Task task={currentTask} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h5>Student: {this.state.student.student_name}</h5>
                <br></br>
                <br></br>
                <h4>Task List</h4>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Task Completed</th>
                            <th>Task Name</th>
                            <th>Task Description</th>
                            <th>Link</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.taskList() }
                    </tbody>
                </table>
            </div>
        )
    }
}