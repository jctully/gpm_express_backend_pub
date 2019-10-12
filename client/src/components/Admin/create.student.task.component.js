import React, { Component } from 'react';
import axios from 'axios';
import Admin from '../Portal/Admin';

export default class CreateTask extends Component {

    constructor(props) {
        super(props);

        this.onChangeTaskName = this.onChangeTaskName.bind(this);
        this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
        this.onChangeTaskLink = this.onChangeTaskLink.bind(this);
        this.onChangeTaskStudent = this.onChangeTaskStudent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task_name: '',
            task_description: '',
            task_link: '',
            task_student_id: '',
            students: []
        }
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/students/')
            .then(response => {
                this.setState({ students: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    studentList() {
        return this.state.students.map(function(currentStudent, i){
            return <option value={currentStudent._id}>{currentStudent.student_name}</option>;
        })
    }

    onChangeTaskName(e) {
        this.setState({
            task_name: e.target.value
        });
    }

    onChangeTaskDescription(e) {
        this.setState({
            task_description: e.target.value
        });
    }

    onChangeTaskLink(e) {
        this.setState({
            task_link: e.target.value
        });
    }

    onChangeTaskStudent(e) {
        this.setState({
            task_student_id: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Task Name: ${this.state.task_name}`);
        console.log(`Task Description: ${this.state.task_description}`);
        console.log(`Task Link: ${this.state.task_link}`);
        console.log(`Task Student: ${this.state.task_student_id}`);

        const newTask = {
            task_name: this.state.task_name,
            task_description: this.state.task_description,
            task_link: this.state.task_link,
            task_student_id: this.state.task_student_id,
            task_completed: false
        };

        axios.post('https://www.gpmbackend.com/tasks/add', newTask)
            .then(res => console.log(res.data));


        this.setState({
            task_name: '',
            task_description: '',
            task_link: '',
            task_student_id: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.task_name}
                                onChange={this.onChangeTaskName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Task Description: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.task_description}
                                onChange={this.onChangeTaskDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Task Link: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.task_link}
                                onChange={this.onChangeTaskLink}
                                />
                    </div>
                    <div className="form-group">
                        <label>Assigned Student: &nbsp;</label>
                        {/*<input
                                type="text"
                                className="form-control"
                                value={this.state.task_student}
                                onChange={this.onChangeTaskStudent}
                        />*/}
                        <select value={this.state.task_student_id} onChange={this.onChangeTaskStudent}>
                            { this.studentList() }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Task" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
