import React from 'react';
import axios from 'axios';
import './SignUpUserPage.css';
import { apiUrl } from '../../config.js';

//const mockoonUrl="http://localhost:7000/cid/users/create";

const options = {
    headers: {"Content-Type": "application/json","Accept": "application/json" }          
};

export default class SignUpUserPage extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            team: {
                id:''
            },
            role: {
                id:''
            }     
        }
        this.sendData = this.sendData.bind(this);        
    }

    componentDidMount() {       
       console.log("axios give a reponse. From reponse I set initial values to state");
      }


    sendData(e){
        console.log("axios Post call to send updated state data to localhost:8080");
        let dataToSend = { 
            id: this.state.id,                
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
            team: {id: this.state.team.id},
            role: {id: this.state.role.id}
        };

        axios.post(apiUrl+'/user/save', dataToSend, options)
            .then((response) => {
                console.log('response delivered');
                console.log(response.data);
            }).catch((exception)=>{
                console.log(exception);
            }).then(this.resetForm);            

        e.preventDefault();     
                
    }  

    resetForm = () => {
        this.setState({ 
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            team: {
                id:''
            },
            role: {
                id:''
            }       
        })
    }    

    render() {
        return ( 
            <div className="row">
                <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-header-success">
                    <h4 className="card-title">Add User Information</h4>
                    <p className="card-category"></p>
                    </div>
                    <div className="card-body">
                    <form >
                        <div className="row">                            
                            <div className="col-md-6">
                                <div className="form-group">
                                <label className="bmd-label-floating">Team</label>
                                <input type="text" className="form-control" value={this.state.team.id} onChange={(e) => this.setState({team: {id: e.target.value}})}/>
                                </div>
                            </div> 
                            <div className="col-md-6">
                                <div className="form-group">
                                <label className="bmd-label-floating">Role</label>
                                <input type="text" className="form-control" value={this.state.role.id} onChange={(e) => this.setState({role: {id:e.target.value}})}/>
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
                        <button type="submit" className="btn btn-success pull-right" onClick={this.sendData}>Submit</button>
                        <div className="clearfix"></div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}