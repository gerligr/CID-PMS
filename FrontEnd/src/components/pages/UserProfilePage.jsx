import React from 'react';
import {userDetails} from '.././data/userDetails.js';
/* import axios from 'axios'; */

export default class UserProfilePage extends React.Component{

    constructor(props) {
      
        super(props);
        this.state={
            department: userDetails.department,
            team: userDetails.team_code,
            position: userDetails.position,
            firstname: userDetails.first_name,
            lastname: userDetails.last_name,
            username: userDetails.username,
            password: userDetails.password     
        };
        /* this.sendData = this.sendData.bind(this); */
    }
    
    render() {
        return ( 
            <div className="row">
                <div className="col-md-8">
                <div className="card">
                    <div className="card-header card-header-primary">
                    <h4 className="card-title">Employee Profile</h4>
                    <p className="card-category"></p>
                    </div>
                    <div className="card-body">
                    <form >
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                <label className="bmd-label-floating">Department</label>
                                <input type="text" className="form-control" value={this.state.department} onChange={(e) => this.setState({department: e.target.value})}/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <label className="bmd-label-floating">Team</label>
                                <input type="text" className="form-control" value={this.state.team} onChange={(e) => this.setState({team: e.target.value})}/>
                                </div>
                            </div> 
                            <div className="col-md-4">
                                <div className="form-group">
                                <label className="bmd-label-floating">Position</label>
                                <input type="text" className="form-control" value={this.state.position} onChange={(e) => this.setState({position: e.target.value})}/>
                                </div>
                            </div>                         
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <label className="bmd-label-floating">First name</label>
                                <input type="text" className="form-control" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Last name</label>
                                    <input type="text" className="form-control" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                                <div className="form-group">
                                <label className="bmd-label-floating">Username</label>
                                <input type="text" className="form-control" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Password</label>
                                    <input type="text" className="form-control" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                                </div>
                            </div>
                        </div>                        
                        <button type="submit" className="btn btn-primary pull-right" /* onClick={this.sendData} */>Save Changes</button>
                        <div className="clearfix"></div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }

}