import React, { Component } from 'react';
import axios from 'axios';

export default class EditStudent extends Component {

    constructor(props) {
        super(props);
        super(props.studentDisplay);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentUsername = this.onChangeStudentUsername.bind(this);
        this.onChangeWesternId = this.onChangeWesternId.bind(this);
        this.onChangeAdmissionQtr = this.onChangeAdmissionQtr.bind(this);
        this.onChangeProgramCode = this.onChangeProgramCode.bind(this);

        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeTAAssignment = this.onChangeTAAssignment.bind(this);
        this.onChangePlanOfStudyLink = this.onChangePlanOfStudyLink.bind(this);
        this.onChangePlanOfStudyAmendmentLink = this.onChangePlanOfStudyAmendmentLink.bind(this);
        this.onChangeResearchForm692Link = this.onChangeResearchForm692Link.bind(this);
        this.onChangeExpectedGradQtr = this.onChangeExpectedGradQtr.bind(this);
        this.onChangeAppToGradFormLink = this.onChangeAppToGradFormLink.bind(this);
        this.onChangeDegreeAppFormLink = this.onChangeDegreeAppFormLink.bind(this);
        this.onChangeDegreeRecFormLink = this.onChangeDegreeRecFormLink.bind(this);
        this.onChangeOtherNotes = this.onChangeOtherNotes.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_name: '',
            student_username: '',
            western_id: '',
            admission_qtr: '',
            program_code: '',

            status: '',
            ta_assignment: '',
            plan_of_study_link: '',
            plan_of_study_amendments_link: '',
            research_form_692_link: '',
            expected_grad_qtr: '',
            app_to_graduate_form_link: '',
            degree_app_form_link: '',
            degree_rec_form_link: '',
            other_notes: ''
        }
    }

    componentDidMount() {
        axios.get('https://www.gpmbackend.com/students/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    student_name: response.data.student_name,
                    student_username: response.data.student_username,
                    western_id: response.data.western_id,
                    admission_qtr: response.data.admission_qtr,
                    program_code: response.data.program_code,

                    status: response.data.status,
                    ta_assignment: response.data.ta_assignment,
                    plan_of_study_link: response.data.plan_of_study_link,
                    plan_of_study_amendments_link: response.data.plan_of_study_amendments_link,
                    research_form_692_link: response.data.research_form_692_link,
                    expected_grad_qtr: response.data.expected_grad_qtr,
                    app_to_graduate_form_link: response.data.app_to_graduate_form_link,
                    degree_app_form_link: response.data.degree_app_form_link,
                    degree_rec_form_link: response.data.degree_rec_form_link,
                    other_notes: response.data.other_notes
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeProgramCode(e) {
        this.setState({
            program_code: e.target.value
        });
    }

    // New added fields
    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    onChangeTAAssignment(e) {
        this.setState({
            ta_assignment: e.target.value
        });
    }

    onChangePlanOfStudyLink(e) {
        this.setState({
            plan_of_study_link: e.target.value
        });
    }

    onChangePlanOfStudyAmendmentLink(e) {
        this.setState({
            plan_of_study_amendments_link: e.target.value
        });
    }

    onChangeResearchForm692Link(e) {
        this.setState({
            research_form_692_link: e.target.value
        });
    }

    onChangeExpectedGradQtr(e) {
        this.setState({
            expected_grad_qtr: e.target.value
        });
    }

    onChangeAppToGradFormLink(e) {
        this.setState({
            app_to_graduate_form_link: e.target.value
        });
    }

    onChangeDegreeAppFormLink(e) {
        this.setState({
            degree_app_form_link: e.target.value
        });
    }

    onChangeDegreeRecFormLink(e) {
        this.setState({
            degree_rec_form_link: e.target.value
        });
    }

    onChangeOtherNotes(e) {
        this.setState({
            other_notes: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            student_name: this.state.student_name,
            student_username: this.state.student_username,
            western_id: this.state.western_id,
            admission_qtr: this.state.admission_qtr,
            program_code: this.state.program_code,

            status: this.state.status,
            ta_assignment: this.state.ta_assignment,
            plan_of_study_link: this.state.plan_of_study_link,
            plan_of_study_amendments_link: this.state.plan_of_study_amendments_link,
            research_form_692_link: this.state.research_form_692_link,
            expected_grad_qtr: this.state.expected_grad_qtr,
            app_to_graduate_form_link: this.state.app_to_graduate_form_link,
            degree_app_form_link: this.state.degree_app_form_link,
            degree_rec_form_link: this.state.degree_rec_form_link,
            other_notes: this.state.other_notes
        };
        console.log(obj);
        axios.post('https://www.gpmbackend.com/students/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/admin/');
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <h3 align="center">Student Information</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Student Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_name}
                                onChange={this.onChangeStudentName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Student Username: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.student_username}
                                onChange={this.onChangeStudentUsername}
                                />
                    </div>
                    
                    <div className="form-group">
                        <label>Western Id: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.western_id}
                                onChange={this.onChangeWesternId}
                                />
                    </div>
                    
                    <div className="form-group">
                        <label>Admission Quarter: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.admission_qtr}
                                onChange={this.onChangeAdmissionQtr}
                                />
                    </div>

                    <div className="form-group">
                        <label>Program Code: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.program_code}
                                onChange={this.onChangeProgramCode}
                                />
                    </div>

                    <div className="form-group">
                        <label>Status: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.status}
                                onChange={this.onChangeStatus}
                                />
                    </div>

                    <div className="form-group">
                        <label>TA Assignment: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.ta_assignment}
                                onChange={this.onChangeTAAssignment}
                                />
                    </div>

                    <br></br>
                    <br></br>

                    <div className="form-group">
                        <label>Plan of Study Link: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.plan_of_study_link}
                                onChange={this.onChangePlanOfStudyLink}
                                />
                    </div>

                    <div className="form-group">
                        <label>Plan of Study Amendment Link: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.plan_of_study_amendments_link}
                                onChange={this.onChangePlanOfStudyAmendmentLink}
                                />
                    </div>

                    <div className="form-group">
                        <label>692 Research Form Link: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.research_form_692_link}
                                onChange={this.onChangeResearchForm692Link}
                                />
                    </div>

                    <br></br>
                    <br></br>

                    <div className="form-group">
                        <label>Expected Graduation Qtr: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.expected_grad_qtr}
                                onChange={this.onChangeExpectedGradQtr}
                                />
                    </div>

                    <div className="form-group">
                        <label>Application to Graduate Form Link: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.app_to_graduate_form_link}
                                onChange={this.onChangeAppToGradFormLink}
                                />
                    </div>

                    <div className="form-group">
                        <label>Degree Application Form Link: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.degree_app_form_link}
                                onChange={this.onChangeDegreeAppFormLink}
                                />
                    </div>

                    <div className="form-group">
                        <label>Degree Recommendation Form Link: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.degree_rec_form_link}
                                onChange={this.onChangeDegreeRecFormLink}
                                />
                    </div>

                    <br></br>
                    <br></br>

                    <div className="form-group">
                        <label>Other Notes: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.other_notes}
                                onChange={this.onChangeOtherNotes}
                                />
                    </div>

                    <br />

                    

                    <div className="form-group">
                        <input type="submit" value="Update Student" className="btn btn-primary" />
                    </div>
                </form>
                <p>{this.props.studentDisplay}</p>
            </div>
        )
    }
}
