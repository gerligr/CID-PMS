import React from 'react';

/* const axios = require("axios"); //external library  https://github.com/axios/axios

let httpsProxyAgent = require('https-proxy-agent');

var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

const mockDataUrl="https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
const echoPostUrl="https://postman-echo.com/post";

var config = {
       httpsAgent: agent

};

const options = {
    headers: {"Content-Type": "application/json","Accept": "application/json" }
};
var data = {firstName: "Stefano", lastName:"Fiorenza"};

axios.post(echoPostUrl, data, options)
.then((response) => {
    console.log(response.data);
}).catch((exception)=>{
    console.log(exception);
}); */


//when this SignIn content is shown, then sideBar is not visible

export default class SignIn extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Employee Sign-In</h4>
                            <p className="card-category">Add your Company's e-mail address and password</p>
                        </div>
                        <div className="card-body">
                            <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label className="bmd-label-floating">Username (e-mail address)</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>                     
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                            <label class="bmd-label-floating">Password</label>
                            <input type="email" class="form-control" />
                            </div>
                        </div>
                    </div>               
                    <button type="submit" class="btn btn-primary pull-right">Sign-in</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
        </div>
        );
    }
}