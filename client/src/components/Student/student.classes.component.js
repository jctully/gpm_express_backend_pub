import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

const Class = props => (
    <tr>
        {/* Maybe if completed put green check box here somehow */}
        <td className="checkbox">
            <input type="checkbox" checked={props.class.class_completed}></input>
        </td>
        <td className={props.class.class_completed ? 'completed' : ''}>
            {props.class.name}
        </td>
        <td className={props.class.class_completed ? 'completed' : ''}>
            {props.class.credits_needed}
        </td>
        <td className={props.class.class_completed ? 'completed' : ''}>
        {props.class.credits_completed}
        </td>
        <td className={props.class.class_completed ? 'completed' : ''}>
        {props.class.notes}
        </td>
        <td>
            <Link to={"/admin/classes/edit/"+props.class._id}>Edit</Link>
        </td>
        
    </tr>
)

export default class StudentClasses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: []
        };
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/classes/student/'+this.props.studentId)
            .then(response => {
                this.setState({ classes: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    classList() {
        return this.state.classes.map(function(currentClass, i){
            return <Class class={currentClass} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h4>Class List</h4>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Class Completed</th>
                            <th>Class Name</th>
                            <th>Credits Needed</th>
                            <th>Credits Completed</th>
                            <th>Notes</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.classList() }
                    </tbody>
                </table>
            </div>
        )
    }
}