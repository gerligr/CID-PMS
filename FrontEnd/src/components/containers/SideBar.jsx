import React from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                        CID 
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item  ">
                            <Link to="/dashboard" className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/userprofile" className="nav-link">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/tables" className="nav-link">
                                <i className="material-icons">table</i>
                                <p>Tables</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/library" className="nav-link">
                                <i className="material-icons">library</i>
                                <p>Library</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/icons" className="nav-link">
                                <i className="material-icons">icons</i>
                                <p>Icons</p>
                            </Link>
                        </li>                        
                        <li className="nav-item  ">
                            <Link to="/location" className="nav-link">
                                <i className="material-icons">location</i>
                                <p>Location</p>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/notification" className="nav-link">
                                <i className="material-icons">notification</i>
                                <p>Notification</p>
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