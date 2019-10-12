import React, { Component } from 'react';
import '../../App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

export default class Home extends Component {

    renderLogoutButton(){
        if(this.state.loginSuccess===true){//change this conditional when login implemented
           return(
            <a href="/home" onClick="logOut()">
                        <button class="button">Log Out</button>
            </a>
           );
         }
    }

    logOut() {
        //log out function here
    }

    render() {
        return (                   
            <div class="MainContainer">           
                <div class="banner"></div>

                <div class="ContentContainer">

                    <div class="Content">
                    
                    <h1 className='page-title'>CS Graduate Program Manager</h1>
                    <a href="/login">
                        <button class="button">Log In</button>
                    </a>
                    {this.renderLogoutButton}
                    <a href="/todo">
                        <button className="button">Todos</button>
                    </a>
                    <a href="/admin">
                        <button id='bypass' className="button">BYPASS</button>
                    </a>
                    <p>Select the tab for your student status</p>

                        <Tabs>
                        <TabList>
                            <Tab>Prospective Students</Tab>
                            <Tab>Current Students</Tab>
                        </TabList>
                        <TabPanel>
                            <h2 class="tabBody">Info for Prospective Students</h2>
                                <p>Admissions and program details can be found here: 
                                    <a href='https://gradschool.wwu.edu/computer-science'> https://gradschool.wwu.edu/computer-science</a>
                                    <br></br>
                                    If you are a CS honors student, please follow the normal application procedure to apply to the Graduate Program.
                                </p>
                                <p>Computer Science Graduate Handbook:
                                    <a href='https://cse.wwu.edu/cs/graduate-programs'> https://cse.wwu.edu/cs/graduate-programs</a>
                                </p>
                                <p>Further questions? Contact us:</p>
                                <p>Yudong Liu, CS Graduate Program Advisor 
                                    <br></br>
                                    Office: CF 483, Phone: 360-650-4831, email: <a href="mailto:Yudong.Liu@wwu.edu">Yudong.Liu@wwu.edu</a>
                                </p>
                                <p>
                                    WWU Graduate School
                                    <br></br>
                                    Office: OM 530, Phone: 360-650-3170
                                </p>
                        </TabPanel>
                        <TabPanel>
                            <h2 class="tabBody">Info for Current Students</h2>
                                <p>Important to-dos for your first and last quarter: (not done)</p>
                                <p class='wrap'>For curriculum info and help course planning, visit the Computer Science Graduate Handbook here:
                                    <a href='https://cse.wwu.edu/cs/graduate-programs'> https://cse.wwu.edu/cs/graduate-programs</a>
                                </p>
                                <ul className='center'>
                                    Forms:
                                    <li><a href="https://esign.wwu.edu/forms/Grad_School/_plan_of_study_2.aspx">Graduate Plan of Study</a> </li>
                                    <li><a href="https://esign.wwu.edu/forms/Grad_School/_amend_to_grad_plan_of_study_1.aspx">Amendment to Graduate Plan of Study</a> </li>
                                    <li><a href="https://esign.wwu.edu/forms/CSCI/_csci_grad_research_proj_1.aspx">Graduate Research Project Form</a></li>
                                    <li><a href="https://esign.wwu.edu/forms/Grad_School/_degree_rec_non_thesis_1.aspx">Degree Recommendation Non-Thesis Option</a></li>
                                    <li><a href="https://gradschool.wwu.edu/degree-completion">Application for Degree</a></li>
                                    <li><a href="https://gradschool.wwu.edu/courses-credits">Independent Study</a></li>                                
                                    <br/>
                                    General Graduate School Info                                
                                    <li><a href='https://gradschool.wwu.edu/program-requirements-0'>Academic Policies</a></li>
                                    <li><a href='https://gradschool.wwu.edu/funding-support'>Funding and Support</a></li>
                                </ul>
                                <p>Further questions? Contact us:</p>
                                <p>Yudong Liu, CS Graduate Program Director 
                                    <br></br>
                                    Office: CF 483, Phone: 360-650-4831, email: <a href="mailto:Yudong.Liu@wwu.edu">Yudong.Liu@wwu.edu</a>
                                </p>
                                <p>
                                    WWU Graduate School
                                    <br></br>
                                    Office: OM 530, Phone: 360-650-3170
                                </p>
                            </TabPanel>
                        </Tabs>

                    </div>
                </div>
            </div>
        )
    }
     
}
