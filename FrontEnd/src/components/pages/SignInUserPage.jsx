import React from 'react';
import axios from 'axios';
import './SignInUserPage.css';

const mockoonUrl="http://localhost:7000/cid/users/signin"; 

const options = {
    headers: {"Content-Type": "application/json","Accept": "application/json" }          
};

export default class SignInUserPage extends React.Component{

    constructor(props) {
        super(props);
        this.state={
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
                            <h4 className="card-title">Employee Sign-In</h4>
                            
                        </div>
                        <div className="card-body">
                            <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="bmd-label-floating">Username (e-mail address)</label>
                            <input type="email" className="form-control" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}  className="form-control" required autoFocus/>
                            </div>
                        </div>                     
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="bmd-label-floating">Password</label>
                            <input type="password" className="form-control" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} className="form-control" required/>
                            </div>
                        </div>
                    </div>               
                    <button type="submit" className="btn btn-success pull-right" onClick={this.sendData}>Sign-in</button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
        </div>

        );
    }



}





