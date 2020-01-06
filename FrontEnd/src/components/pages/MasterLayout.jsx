import React from 'react';
import { Route,Switch } from 'react-router-dom';
import SideBar from '../containers/SideBar.jsx';
import TopNavBar from '../containers/TopNavBar.jsx';
import Dashboard from '../containers/Dashboard';
import UserProfile from '../containers/UserProfile';
import Tables from '../containers/Tables';
import Library from '../containers/Library';
import Icons from '../containers/Icons';
import Location from '../containers/Location';
import Notification from '../containers/Notification';
import Support from '../containers/Support';

 
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
                                <Route path="/userprofile" component={UserProfile} />
                                <Route path="/tables" component={Tables} />
                                <Route path="/library" component={Library} />
                                <Route path="/icons" component={Icons} />
                                <Route path="/location" component={Location} />
                                <Route path="/notification" component={Notification} />
                                <Route path="/support" component={Support} />                                
                            </Switch>
                        </div>
                    </div>                    
                </div>                           
            </div>       
        );
    }
}