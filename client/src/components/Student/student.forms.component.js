import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

const Form = props => (
    <tr>
        {/* Maybe if completed put green check box here somehow */}
        <td className="checkbox">
            <input type="checkbox" checked={props.form.form_completed}></input>
        </td>
        <td className={props.form.form_completed ? 'completed' : ''}>
            {props.form.name}
        </td>
        <td className={props.form.form_completed ? 'completed' : ''}>
            {props.form.notes}
        </td>
        <td className={props.form.form_completed ? 'completed' : ''}>
            <a href={props.form.url} target="_blank">{props.form.url}</a>
        </td>
        <td>
            <Link to={"/admin/forms/edit/"+props.form._id}>Edit</Link>
        </td>
        
    </tr>
)

export default class StudentForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            student: ''
        };
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/forms/student/'+this.props.studentId)
            .then(response => {
                this.setState({ forms: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    formList() {
        return this.state.forms.map(function(currentForm, i){
            return <Form form={currentForm} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h4>Form List</h4>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Form Completed</th>
                            <th>Form Name</th>
                            <th>Form Notes</th>
                            <th>Link</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.formList() }
                    </tbody>
                </table>
            </div>
        )
    }
}