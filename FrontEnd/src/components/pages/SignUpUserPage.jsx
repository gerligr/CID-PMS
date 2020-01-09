import React from 'react';
import axios from 'axios';
import './SignUpUserPage.css';

const mockoonUrl="http://localhost:7000/cid/users/create";

const options = {
    headers: {"Content-Type": "application/json","Accept": "application/json" }          
};

export default class SignUpUserPage extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            department:'',
            team:'',
            position:'',
            firstname:'',
            lastname:'',
            username:'',
            password:''     
        }
        this.sendData = this.sendData.bind(this);
    }

    componentDidMount() {
       console.log("axios calls to mockaroo http get");
       console.log("axios give a reponse. From reponse I set initial values to state");
      }


    sendData(e){
        console.log("axios Post call to send updated state data to Server (Mockoon) ");
        let dataToSend = {
            id: this.state.id,
            department: this.state.department,
            team: this.state.team,
            position: this.state.position,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password
        };

        axios.post(mockoonUrl, dataToSend, options)
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
            <div className="row">
                <div className="col-md-8">
                <div className="card">
                    <div className="card-header card-header-success">
                    <h4 className="card-title">Add User Information</h4>
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
                        <button type="submit" className="btn btn-success pull-right" onClick={this.sendData}>Save</button>
                        <div className="clearfix"></div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}