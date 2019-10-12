import React, { Component } from 'react';
import axios from 'axios';
import Admin from '../Portal/Admin';

export default class CreateStudent extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentUsername = this.onChangeStudentUsername.bind(this);
        this.onChangeWesternId = this.onChangeWesternId.bind(this);
        this.onChangeAdmissionQtr = this.onChangeAdmissionQtr.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_name: '',
            student_username: '',
            western_id: '',
            admission_qtr: ''
        }
    }

    onChangeStudentName(e) {
        this.setState({
            student_name: e.target.value
        });
    }

    onChangeStudentUsername(e) {
        this.setState({
            student_username: e.target.value
        });
    }

    onChangeWesternId(e) {
        this.setState({
            western_id: e.target.value
        });
    }

    onChangeAdmissionQtr(e) {
        this.setState({
            admission_qtr: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Student Name: ${this.state.student_name}`);
        console.log(`Student Username: ${this.state.student_username}`);
        console.log(`Western Id: ${this.state.western_id}`);
        console.log(`Admission Qtr: ${this.state.admission_qtr}`);

        const newStudent = {
            student_name: this.state.student_name,
            student_username: this.state.student_username,
            western_id: this.state.western_id,
            admission_qtr: this.state.admission_qtr
        };

        axios.post('https://www.gpmbackend.com/students/add', newStudent)
            .then(res => console.log(res.data));


        this.setState({
            student_name: '',
            student_username: '',
            western_id: '',
            admission_qtr: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Student</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_name}
                                onChange={this.onChangeStudentName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_username}
                                onChange={this.onChangeStudentUsername}
                                />
                    </div>
                    <div className="form-group">
                        <label>W#: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.western_id}
                                onChange={this.onChangeWesternId}
                                />
                    </div>
                    <div className="form-group">
                        <p>Admission Quarter:</p>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="admissionQtrOptions"
                                    id="w19"
                                    value="w19"
                                    checked={this.state.admission_qtr==='w19'}
                                    onChange={this.onChangeAdmissionQtr}
                                    />
                            <label className="form-check-label">Winter 2019</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="admissionQtrOptions"
                                    id="s19"
                                    value="s19"
                                    checked={this.state.admission_qtr==='s19'}
                                    onChange={this.onChangeAdmissionQtr}
                                    />
                            <label className="form-check-label">Spring 2019</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="admissionQtrOptions"
                                    id="f19"
                                    value="f19"
                                    checked={this.state.admission_qtr==='f19'}
                                    onChange={this.onChangeAdmissionQtr}
                                    />
                            <label className="form-check-label">Fall 2019</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Student" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
