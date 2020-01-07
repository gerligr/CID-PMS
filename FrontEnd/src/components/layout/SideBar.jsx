import React from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="white" data-image=".../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a href="#" className="simple-text logo-normal">                        
                        <span><img src=".../public/assets/img/logo.png" alt="Company logo"/></span>                         
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item  ">
                            <Link to="/dashboard" className="nav-link">
                                <i className="material-icons">home_work</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/customerfeedback" className="nav-link">
                                <i className="material-icons">people_ouline</i>
                                <p>Customer Feedback</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/sales" className="nav-link">
                                <i className="material-icons">content_paste</i>
                                <p>Sales</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/meetings" className="nav-link">
                                <i className="material-icons">schedule</i>
                                <p>Meetings</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/notes" className="nav-link">
                                <i className="material-icons">note</i>
                                <p>Notes</p>
                            </Link>
                        </li>                        
                        <li className="nav-item  ">
                            <Link to="/userprofile" className="nav-link">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </Link>
                        </li>                        
                        <li className="nav-item  ">
                            <Link to="/support" className="nav-link">
                                <i className="material-icons">support</i>
                                <p>Support</p>
                            </Link>
                        </li>                                             
                    </ul>
                </div>
          </div>        
            
        );
    }
}