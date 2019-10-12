import React, { Component } from 'react';
import axios from 'axios';
import Admin from '../Portal/Admin';

export default class CreateForm extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            url: '',
            notes: '',
            student_id: '',
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

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        });
    }

    onChangeNotes(e) {
        this.setState({
            notes: e.target.value
        });
    }

    onChangeStudent(e) {
        this.setState({
            student_id: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Url: ${this.state.url}`);
        console.log(`Notes: ${this.state.notes}`);
        console.log(`Student: ${this.state.student_id}`);

        const newForm = {
            name: this.state.name,
            url: this.state.url,
            notes: this.state.notes,
            student_id: this.state.student_id,
            form_completed: false
        };

        if(newForm.student_id != ''){
            axios.post('https://www.gpmbackend.com/forms/add', newForm)
            .then(res => console.log(res.data));
        } else {
            // display message letting user know they didn't select a student
            console.log("No student selected!");
        }

        

        this.setState({
            name: '',
            url: '',
            notes: '',
            student_id: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Form Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Form Link: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.url}
                                onChange={this.onChangeUrl}
                                />
                    </div>
                    <div className="form-group">
                        <label>Notes: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.notes}
                                onChange={this.onChangeNotes}
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
                        <select value={this.state.student_id} onChange={this.onChangeStudent}>
                            { this.studentList() }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Form" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
