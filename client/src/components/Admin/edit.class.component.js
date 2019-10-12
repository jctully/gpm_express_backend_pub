import React, { Component } from 'react';
import axios from 'axios';
import Admin from '../Portal/Admin';

export default class EditClass extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCreditsNeeded = this.onChangeCreditsNeeded.bind(this);
        this.onChangeCreditsCompleted = this.onChangeCreditsCompleted.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);
        this.onChangeClassCompleted = this.onChangeClassCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            credits_needed: '',
            credits_completed: '',
            notes: '',
            student_id: '',
            class_completed: false,
            students: []
        }
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/classes/'+this.props.match.params.id)
            .then(response => {
                console.log("completed:"+response.data.class_completed);
                this.setState({
                    name: response.data.name,
                    credits_needed: response.data.credits_needed,
                    credits_completed: response.data.credits_completed,
                    notes: response.data.notes,
                    student_id: response.data.student_id,
                    class_completed: response.data.class_completed
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

    onChangeCreditsNeeded(e) {
        this.setState({
            credits_needed: e.target.value
        });
    }

    onChangeCreditsCompleted(e) {
        this.setState({
            credits_completed: e.target.value
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

    onChangeClassCompleted(e){
        this.setState({
            class_completed: !this.state.class_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Class submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Credits Needed: ${this.state.credits_needed}`);
        console.log(`Credits Completed: ${this.state.credits_completed}`);
        console.log(`Notes: ${this.state.notes}`);
        console.log(`Student: ${this.state.student_id}`);
        console.log(`Completed: ${this.state.class_completed}`);

        const editedClass = {
            name: this.state.name,
            credits_needed: this.state.credits_needed,
            credits_completed: this.state.credits_completed,
            notes: this.state.notes,
            student_id: this.state.student_id,
            class_completed: this.state.class_completed
        };

        if(editedClass.student_id != ''){
            axios.post('https://www.gpmbackend.com/classes/update/'+this.props.match.params.id, editedClass)
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
                <h3>Create New Class</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Class Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Credits Needed: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.credits_needed}
                                onChange={this.onChangeCreditsNeeded}
                                />
                    </div>
                    <div className="form-group">
                        <label>Credits Completed: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.credits_completed}
                                onChange={this.onChangeCreditsCompleted}
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
                                onChange={this.onChangeClassCompleted}
                                checked={this.state.class_completed}
                                value={this.state.class_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Assigned Student: &nbsp;</label>
                        <select value={this.state.student_id} onChange={this.onChangeStudent}>
                            { this.studentList() }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Class" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
