import React, { Component } from 'react';
import axios from 'axios';
import Admin from '../Portal/Admin';

export default class EditForm extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);
        this.onChangeFormCompleted = this.onChangeFormCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            url: '',
            notes: '',
            student_id: '',
            form_completed: false,
            students: []
        }
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/forms/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    url: response.data.url,
                    notes: response.data.notes,
                    student_id: response.data.student_id,
                    form_completed: response.data.form_completed
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

    onChangeFormCompleted(e){
        this.setState({
            form_completed: !this.state.form_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Edited:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Url: ${this.state.url}`);
        console.log(`Notes: ${this.state.notes}`);
        console.log(`Student: ${this.state.student_id}`);
        console.log(`Completed: ${this.state.form_completed}`);

        const editedForm = {
            name: this.state.name,
            url: this.state.url,
            notes: this.state.notes,
            student_id: this.state.student_id,
            form_completed: this.state.form_completed
        };

        if(editedForm.student_id != ''){
            axios.post('https://www.gpmbackend.com/forms/update/'+this.props.match.params.id, editedForm)
            .then(res => console.log(res.data));
        } else {
            // display message letting user know they didn't select a student
            console.log("No student selected!");
        }

        this.props.history.push('/admin');
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
                    <br></br>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeFormCompleted}
                                checked={this.state.form_completed}
                                value={this.state.form_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>
                    <br></br>
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
                        <input type="submit" value="Edit Form" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
