import React from 'react';
import axios from 'axios';
import httpsProxyAgent from 'https-proxy-agent';

const agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

const mockoonUrlGet="http://localhost:7000/cid/suggestion/get";
const mockoonUrlPost="http://localhost:7000/cid/suggestion/create";

const config = {
    httpsAgent: agent
};

const options = {
    headers: {"Content-Type": "application/json","Accept": "application/json" }          
};

export default class SuggestionPage extends React.Component{    

    constructor(props) {
        super(props);
        this.state={
            euroSales: '',
            extraSales: '',
            calls: '',
            dateOfUpdate: '',
            status: ''               
        };
        this.getData = this.getData.bind(this);
        /* this.sendData = this.sendData.bind(this); */ 
    } 

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(mockoonUrlGet, config)
          .then((response) => {            
            this.setState({ euroSales: response.data.euroSales});
            this.setState({ extraSales: response.data.extraSales });
            this.setState({ calls: response.data.calls });
            this.setState({ dateOfUpdate: response.data.dateOfUpdate});
            this.setState({ status: response.data.status});            
            console.log(response.data);
          }).catch((exception) => {
            console.log(exception);
          });
    };

    handleClick(e){
        console.log("button clicked");

        let dataToSend = {
            status: 'read'            
        };

        axios.post(mockoonUrlPost, dataToSend, options)
                    .then((response) => {
                        console.log('response delivered');
                        console.log(response.data);
                    }).catch((exception)=>{
                        console.log(exception);
                    });

                e.preventDefault();   
        
        this.setState({
            btnColor: 'green'
        })

    };

    


    
    render() {         
        return (
            <div>
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header card-header-success card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">euro</i>
                                </div>
                                <p className="card-category text-success">Weekly Euro Sales</p>
                                <h3 className="card-title">{this.state.euroSales}</h3>
                            </div>
                            <div className="card-footer">
                            <div className="col-md-10 stats">
                                    <i className="material-icons">access_time</i>updated {this.state.dateOfUpdate} 
                                </div>                                    
                                <div className="col-md-2">
                                    <button type="submit" className="btn pull-right" onClick={this.sendData} style={{backgroundColor:this.state.btnColor}}>{this.state.status}</button>  
                                </div>                                        
                            </div>
                        </div>
                    </div>                    
                </div>                
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header card-header-success card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">euro</i>                                    
                                </div>
                                <p className="card-category text-success">Weekly Extra Sales</p>
                                <h3 className="card-title">{this.state.extraSales}</h3>
                            </div>
                            <div className="card-footer ">                                
                                <div className="col-md-10 stats">
                                    <i className="material-icons">access_time</i>updated {this.state.dateOfUpdate} 
                                </div>                                    
                                <div className="col-md-2">
                                    <button type="submit" className="btn pull-right" onClick={this.sendData}>{this.state.status}</button>  
                                </div>                                                  
                            </div>
                        </div>
                    </div>                    
                </div>             
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header card-header-success card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">call</i>
                                </div>
                                <p className="card-category text-success">Weekly Calls</p>
                                <h3 className="card-title">{this.state.calls}</h3>
                            </div>
                            <div className="card-footer">
                            <div className="col-md-10 stats">
                                    <i className="material-icons">access_time</i>updated {this.state.dateOfUpdate} 
                                </div>                                    
                                <div className="col-md-2">
                                    <button type="submit" className="btn pull-right" onClick={this.sendData}>{this.state.status}</button>  
                                </div>                                        
                            </div>
                        </div>
                    </div>                    
                </div> 
            </div>            
        );

    }
  
}


