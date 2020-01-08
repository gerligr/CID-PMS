import React from 'react';
import axios from 'axios';
import httpsProxyAgent from 'https-proxy-agent';

export default class SignUp extends React.Component{

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
        this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {
       console.log("axios calls to mockaroo http get");
       console.log("axios give a reponse. From reponse I set initial values to state");
      }


    onSave(e){
        console.log("axios Post call to send updated state data to Server (Mockoon) ");
     
       // let agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');
       //httpsAgent: agent

       e.preventDefault();

        const options = {
            headers: {"Content-Type": "application/json","Accept": "application/json" }          
        };
        const mockoonUrl="http://localhost:7000/cid/users/create";


        let dataToSend= {"id":1,"department":"FIN","team":"S01","position":"sales agent","firstname":"Mari","lastname":"Meri","username":"mari.meri@company.com","password":"mari123"};
    
        axios.post(mockoonUrl, dataToSend, options)
            .then((response) => {
                console.log('response delivered');
                console.log(response.data);
            }).catch((exception)=>{
                console.log(exception);
            });     
    }  

    render() {
        return ( 
            <div className="row">
                <div className="col-md-8">
                <div className="card">
                    <div className="card-header card-header-primary">
                    <h4 className="card-title">Add User Information</h4>
                    <p className="card-category"></p>
                    </div>
                    <div className="card-body">
                    <form >
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                <label className="bmd-label-floating">Department</label>
                                <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <label className="bmd-label-floating">Team</label>
                                <input type="text" className="form-control" />
                                </div>
                            </div> 
                            <div className="col-md-4">
                                <div className="form-group">
                                <label className="bmd-label-floating">Position</label>
                                <input type="text" className="form-control" />
                                </div>
                            </div>                         
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <label className="bmd-label-floating">First name</label>
                                <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Last name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                                <div className="form-group">
                                <label className="bmd-label-floating">Username</label>
                                <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Password</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>                        
                        <button type="submit" className="btn btn-primary pull-right" onClick={this.onSave}>Save</button>
                        <div className="clearfix"></div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}