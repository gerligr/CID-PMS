import React from 'react';
import { Link } from 'react-router-dom';


export default class DashboardPage extends React.Component{    

    constructor(props) {
        super(props);       
    }     

    
    render() {         
        return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">euro</i>
                            </div>
                            <p className="card-category">Eur/h</p>
                            <h3 className="card-title">450
                                <small>EUR</small>
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                              <Link to='/sales' className="text-success" >
                                <i className="material-icons text-success">date_range</i>Current Month                                
                              </Link>                          
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">emoji_people</i>
                            </div>
                            <p className="card-category">Pax/h</p>
                            <h3 className="card-title">20
                                <small>pax</small>
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <Link to='/sales' className="text-success" >
                                <i className="material-icons text-success">date_range</i>Current Month                                
                            </Link>                              
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">euro</i>
                            </div>
                            <p className="card-category">Eur/Pax</p>
                            <h3 className="card-title">40
                                <small>EUR</small>
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                              <Link to='/sales' className="text-success" >
                                <i className="material-icons text-success">date_range</i>Current Month                                
                              </Link>                                 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">call</i>
                            </div>
                            <p className="card-category">Calls/h</p>
                            <h3 className="card-title">8
                                <small>calls</small>
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                              <Link to='/sales' className="text-success" >
                                  <i className="material-icons text-success">date_range</i>Current Month                                
                              </Link>                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-success">
                  <div className="ct-chart" id="dailySalesChart"></div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Weekly Euro Sales</h4>
                  <p className="card-category">
                    <span className="text-success">
                      <i className="fa fa-long-arrow-up"></i> 20% 
                    </span> increase in weekly euro sales.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <Link to='/suggestion'className="text-secondary">
                      <i className="material-icons">trending_up</i> Hints
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-success">
                  <div className="ct-chart" id="websiteViewsChart"></div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Weekly Extra Sales</h4>
                  <p className="card-category">
                    <span className="text-success">
                      <i className="fa fa-long-arrow-up"></i> 20% 
                    </span> increase in weekly extra sales.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <Link to='/suggestion'className="text-secondary">
                      <i className="material-icons">trending_up</i> Hints
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-success">
                  <div className="ct-chart" id="completedTasksChart"></div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Weekly Calls</h4>
                  <p className="card-category">
                    <span className="text-danger">
                      <i className="fa fa-long-arrow-down"></i> 10% 
                    </span> decrease in weekly calls.
                    </p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <Link to='/suggestion'className="text-secondary">
                      <i className="material-icons">trending_up</i> Hints
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          
          
        
        
            
        );

    }
  
}

