import React, { Component } from 'react';
import axios from 'axios';

export default class EditTask extends Component {

    constructor(props) {
        super(props);

        this.onChangeTaskName = this.onChangeTaskName.bind(this);
        this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
        this.onChangeTaskLink = this.onChangeTaskLink.bind(this);
        this.onChangeTaskStudent = this.onChangeTaskStudent.bind(this);
        this.onChangeTaskCompleted = this.onChangeTaskCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task_name: '',
            task_description: '',
            task_link: '',
            task_student_id: '',
            task_completed: false,
            students: []
        }
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/tasks/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    task_name: response.data.task_name,
                    task_description: response.data.task_description,
                    task_link: response.data.task_link,
                    task_student_id: response.data.task_student_id,
                    task_completed: response.data.task_completed
                })
            })
            .catch(function (error) {
                console.log(error);
            })

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

    onChangeTaskCompleted(e){
        this.setState({
            task_completed: !this.state.task_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            task_name: this.state.task_name,
            task_description: this.state.task_description,
            task_link: this.state.task_link,
            task_student_id: this.state.task_student_id,
            task_completed: this.state.task_completed
        };
        console.log(obj);
        axios.post('https://www.gpmbackend.com/tasks/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/admin');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Task</h3>
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
                        <label>Description: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.task_description}
                                onChange={this.onChangeTaskDescription}
                                />
                    </div>
                    
                    <div className="form-group">
                        <label>Link: </label>
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

                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTaskCompleted}
                                checked={this.state.task_completed}
                                value={this.state.task_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
