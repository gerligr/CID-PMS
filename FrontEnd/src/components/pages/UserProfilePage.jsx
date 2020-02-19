import React from 'react';
import axios from 'axios';
import httpsProxyAgent from 'https-proxy-agent';
import {API_URL} from '../../congif.js';

const agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

const mockoonUrlGet="http://localhost:7000/cid/users/get";
//const mockoonUrlPost="http://localhost:7000/cid/users/create";

const config = {
    httpsAgent: agent
};

const options = {
    headers: {"Content-Type": "application/json","Accept": "application/json" }          
};

export default class UserProfilePage extends React.Component{

    constructor(props) {
      
        super(props);
        this.state={
            departmentId: '',
            teamId: '',
            roleId: '',
            firstname: '',
            lastname: '',
            username: '',
            password: ''     
        };
        this.getData = this.getData.bind(this);
        this.sendData = this.sendData.bind(this); 
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(mockoonUrlGet, config)
          .then((response) => {            
            this.setState({ departmentId: response.data.departmentId });
            this.setState({ teamId: response.data.teamId });
            this.setState({ roleId: response.data.roleId });
            this.setState({ firstname: response.data.firstname });
            this.setState({ lastname: response.data.lastname });
            this.setState({ username: response.data.username });
            this.setState({ password: response.data.password });
            console.log(response.data);
          }).catch((exception) => {
            console.log(exception);
          });
    };
    
    sendData(e){
        console.log("axios Post call to send updated state data to Server ");
        let dataToSend = {
            id: this.state.id,
            departmentId: this.state.departmentId,
            teamId: this.state.teamId,
            roleId: this.state.positionId,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password
        };

        axios.post(`${API_URL}/user/save`, dataToSend, options)
            .then((response) => {
                console.log('response delivered');
                console.log(response.data);
            }).catch((exception)=>{
                console.log(exception);
            });

        e.preventDefault();   
    }

    render() {
        return ( 
            <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card card-profile">
                        <div className="card-avatar bg-success">
                            <a href="#pablo">
                                <img className="img" src="media/eddi.jpg" alt="Employee's picture" />
                            </a>
                        </div>
                        <div className="card-body-success">
                            <h6 className="card-category text-gray">{this.state.roleId}</h6>
                            <h4 className="card-title">{this.state.firstname} {this.state.lastname}</h4>
                            <p className="card-description">
                                People and sales is my life, the air I breath.
                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="card">
                    <div className="card-header card-header-success">
                    <h4 className="card-title">Employee Profile</h4>
                    <p className="card-category"></p>
                    </div>
                    <div className="card-body">
                    <form >
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Department</label>
                                    <input type="text" className="form-control" value={this.state.departmentId} onChange={(e) => this.setState({departmentId: e.target.value})}/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Team</label>
                                    <input type="text" className="form-control" value={this.state.teamId} onChange={(e) => this.setState({teamId: e.target.value})}/>
                                </div>
                            </div> 
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Position</label>
                                    <input type="text" className="form-control" value={this.state.roleId} onChange={(e) => this.setState({roleId: e.target.value})}/>
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
                        <button type="submit" className="btn btn-success pull-right" onClick={this.sendData}>Save Changes</button>
                        <div className="clearfix"></div>
                    </form>
                    </div>
                </div>
                </div>                
            </div>
            </div>
        );
    }

}
