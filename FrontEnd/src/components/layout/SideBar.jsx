import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

export default class SideBar extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="sidebar" data-color="green" data-background-color="white" 
            data-image="media/sidebar-2.jpg" style={{ /*backgroundImage: `url("media/sidebar-42.jpg")`,*/ backgroundSize: 'cover'}}>
                <div className="logo">                                         
                    <NavLink to="/dashboard" className="nav-link simple-text logo-normal">
                        <img src="media/logo2.png" alt="Company logo" height="100" />
                    </NavLink>                                          
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav" >
                        <li className="nav-item">
                            <NavLink to="/dashboard" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">home_work</i>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/customerfeedback" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">people_ouline</i>
                                <p>Customer Feedback</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/sales" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">content_paste</i>
                                <p>Sales</p>
                            </NavLink>                        
                        </li>
                        <li className="nav-item">
                            <NavLink to="/suggestion" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">trending_up</i>
                                <p>Hints for Growth</p>
                            </NavLink>
                        </li>    
                        <li className="nav-item">
                            <NavLink to="/meetings" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">schedule</i>
                                <p>Meetings</p>
                            </NavLink>
                        </li>                    
                        <li className="nav-item">
                            <NavLink to="/userprofile" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </NavLink>
                        </li>  
                        <li className="nav-item">
                            <NavLink to="/signupuser" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">person_add</i>
                                <p>Users Sign Up</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signinuser" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">perm_identity</i>
                                <p>User Sign In</p>
                            </NavLink>
                        </li>                        
                        <li className="nav-item">
                            <NavLink to="/support" className="nav-link" activeStyle={{ background: "#55b559", color: "white" }}>
                                <i className="material-icons">support</i>
                                <p>Support</p>
                            </NavLink>
                        </li>                                             
                    </ul>                    
                </div>
          </div>        
        );
    }
}