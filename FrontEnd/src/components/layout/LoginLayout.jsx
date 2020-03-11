import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignInUserPage from '../pages/SignInUserPage.jsx';

 
const LoginLayout = () => (
    <div className="wrapper">                
        <div className="main-panel">
            <div className="content">
                <div className="container-fluid">
                    <Route exact path="/" render={() => <Redirect to="/login" />} />
                    <Route path="/login" component={SignInUserPage} />                                                                 
                </div>
            </div>                    
        </div>                           
    </div>       
);

export default LoginLayout;
    