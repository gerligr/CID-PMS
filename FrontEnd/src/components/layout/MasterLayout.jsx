import React from 'react';
import { Route,Switch } from 'react-router-dom';
import SideBar from '../layout/SideBar.jsx';
import TopNavBar from '../layout/TopNavBar.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import CustomerFeedback from '../panels/CustomerFeedback';
import SalesPage from '../pages/SalesPage.jsx';
import Meetings from '../panels/Meetings';
import HintsForGrowthPage from '../pages/HintsForGrowth.jsx';
import UserProfilePage from '../pages/UserProfilePage.jsx';
import SignUpUserPage from '../pages/SignUpUserPage.jsx';
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
                                <Route exact path="/dashboard" component={DashboardPage} />
                                <Route path="/customerfeedback" component={CustomerFeedback} />
                                <Route path="/sales" component={SalesPage} />
                                <Route path="/meetings" component={Meetings} />
                                <Route path="/hints" component={HintsForGrowthPage} />
                                <Route path="/userprofile" component={UserProfilePage} />  
                                <Route path="/signupuser" component={SignUpUserPage} />
                                <Route path="/support" component={Support} />                                
                            </Switch>
                        </div>
                    </div>                    
                </div>                           
            </div>       
        );
    }
}