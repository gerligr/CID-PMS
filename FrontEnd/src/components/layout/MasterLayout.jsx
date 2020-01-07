import React from 'react';
import { Route,Switch } from 'react-router-dom';
import SideBar from '../layout/SideBar.jsx';
import TopNavBar from '../layout/TopNavBar.jsx';
import Dashboard from '../panels/Dashboard';
import CustomerFeedback from '../panels/CustomerFeedback';
import SalesPage from '../pages/SalesPage.jsx';
import Meetings from '../panels/Meetings';
import Notes from '../panels/Notes';
/* import UserProfile from '../panels/UserProfile'; */
import TestingPage from '../pages/TestingPage.jsx';
import Support from '../panels/Support';

 
export default class MasterLayout extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="wrapper">
                <SideBar />
                <div className="main-panel">
                    <TopNavBar />
                    <div className="content">
                        <div className="container-fluid">
                            <Switch>
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Route path="/customerfeedback" component={CustomerFeedback} />
                                <Route path="/sales" component={SalesPage} />
                                <Route path="/meetings" component={Meetings} />
                                <Route path="/notes" component={Notes} />
                                <Route path="/userprofile" component={TestingPage} />                               
                                <Route path="/support" component={Support} />                                
                            </Switch>
                        </div>
                    </div>                    
                </div>                           
            </div>       
        );
    }
}