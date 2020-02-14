import React from 'react';
import axios from 'axios';
import httpsProxyAgent from 'https-proxy-agent';
import { apiUrl } from '../../config.js';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone  } from 'react-bootstrap-table2-paginator';

import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '@trendmicro/react-modal';
import { Button } from '@trendmicro/react-buttons';
import '@trendmicro/react-buttons/dist/react-buttons.css';

const agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');

/*const mockoonUrlGet="http://localhost:7000/cid/sales/get";*/

const config = {
  httpsAgent: agent
};

const options = {
  headers: {"Content-Type": "application/json","Accept": "application/json"          }          
};

const {SearchBar} = Search;

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: [1]
};

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
);

const pageButtonRenderer = ({
  page,
  active,    
  onPageChange
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPageChange(page);
  };
  const activeStyle = {};
  if (active) {
    activeStyle.backgroundColor = 'green';
    activeStyle.color = 'white';
  } else {
    activeStyle.backgroundColor = '';
    activeStyle.color = 'green';
  }
  if (typeof page === 'string') {
    activeStyle.backgroundColor = '';
    activeStyle.color = 'green';
  }
  return (
    <li className="page-link">
      <a href="#" onClick={ handleClick } style={ activeStyle }>{ page }</a>
    </li>
  );
}; 

export default class SalesPage extends React.Component{  
    
    constructor(props) {
        super(props);       
        this.sendData = this.sendData.bind(this); 
        //this.getData = this.getData.bind(this); 
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);  
        this.state= {
          userId: '', 
          openModal: false ,
          data:[]               
        }     
    }

    componentDidMount() {
      this.sendData();
    }

    sendData(){
      console.log("axios Post call to send data to Server");
     
      let data ={
        'userId': 39 
      }

      axios.post(apiUrl+'/sales/search', data, options)
            .then((response) => {     
              console.log('response delivered');
              console.log(response.data);    
              this.setState({data:response.data.data});
            }).catch((exception) => {
              console.log(exception);
            });    
        
       // e.preventDefault();  
    }

    openModal () {
      this.setState({openModal:true});
    }

    closeModal () {
      this.setState({openModal:false});
    }

    render() {  

   /*    const salesDetails = (e)=> {  
        var { id} = e.target;
        console.log("See Details for Id: " + id);    
    }; */
    

    console.log("IN render ", this.state.data);

    const formatSalesDetailsButtonCell =(cell, row)=>{        
        var iTag = React.createElement('i',{id:row.id,onClick:this.openModal,className:'material-icons'},'comment');    		
        var aBtn = React.createElement('a',{id:row.id,className:"nav-link", onClick:this.openModal}, iTag);
        return aBtn;	
    }
    
    const columns = [{
        dataField: 'user.lastname',
        text: 'Sales Agent',
        sort: true,
        headerStyle: {
          color: 'green',
          fontWeight: 500  
        }
    }, {  
        dataField: 'date',
        text: 'Date',
        sort: true,
        headerStyle: {
          color: 'green',
          fontWeight: 500  
        }  
      }, {
        dataField: 'week',
        text: 'Week',
        sort: true,
        headerStyle: {
          color: 'green',
          fontWeight: 500  
        }  
      },{  
        dataField: 'eurPerHour',
        text: 'Eur/h',
        sort: true,
        headerStyle: {
          color: 'green',
          fontWeight: 500  
        }  
      }, {  
        dataField: 'paxPerHour',
        text: 'Pax/h',
        sort: true,
        headerStyle: {
          color: 'green',
          fontWeight: 500  
        }  
      }, {    
        dataField: 'eurPerPax',
        text: 'Eur/pax',
        sort: true,
        headerStyle: {
          color: 'green',
          fontWeight: 500  
        }  
      }, {    
        dataField: 'callsPerHour',
        text: 'Calls/h',
        sort: true,
        headerStyle: {
          color: 'green',
          fontWeight: 500  
        }  
      },  {  
        dataField: 'action',    
        text:'Action',
        formatter: formatSalesDetailsButtonCell,
        headerStyle: {
          color: 'green',
          fontWeight: 500  
        }  
      }];

      const paginationConfig = {
        custom: true,
        pageButtonRenderer,
        paginationSize: 4,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal, 
        sizePerPageList: [{
          text: '10', value: 10
        }, {
          text: '25', value: 25
        }, {
            text: '50', value: 50
        }, {
            text: '100', value: 100
        }, {
          text: 'All', value: this.state.data.length
        }] 
      };

          const contentTable = ({paginationProps, paginationTableProps}) => {

            return (
              <div>

              <ToolkitProvider
                keyField='id' 
                data={this.state.data}               
                columns={columns}
                search 
              >

                {
                  (toolkitprops) => {
                    
                    return (
                    <div>
                      {
                        this.state.openModal && <Modal size={400} onClose={ this.closeModal}>
                        <Modal.Header>
                            <Modal.Title>
                                Modal Title
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body padding>
                            Modal Body
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                btnStyle="primary"
                                onClick={ this.closeModal}
                            >
                                Save
                            </Button>
                            <Button
                                btnStyle="default"
                                onClick={ this.closeModal}
                            >
                                Close
                            </Button>
                        </Modal.Footer>
                      </Modal>}

                      <div className="row">
                        <div className="col-sm-8">                          
                        </div>
                        <div className="col-sm-4">                                        
                              <SearchBar { ...toolkitprops.searchProps } />
                        </div>
                      </div>
                      <br/>

                      <div className="col-md-12">
                        <div className="card">
                          <div className="card-header card-header-success">
                            <h4 className="card-title ">Daily Sales</h4>                            
                          </div>     
                          <div className="card-body">
                            <div className="table-responsive">
                              <BootstrapTable
                                striped
                                hover
                                condensed                                        
                                selectRow={ selectRow }                                
                                { ...toolkitprops.baseProps }
                                { ...paginationTableProps }
                              />
                            </div>
                          </div>           
                        </div>  
                      </div>                      
                    </div>);           
                  }
                }

              </ToolkitProvider>

              {<div className="row">
                <div className="col-sm-10">
                  <SizePerPageDropdownStandalone { ...paginationProps } />
                </div>
                <div className="col-sm-2 pagination">
                  <PaginationListStandalone { ...paginationProps } />
                </div>     
                
              </div>  }
               
            </div>
          );
        }

        return (        
          <div>
            <PaginationProvider pagination={paginationFactory(paginationConfig)} >
                { contentTable }
            </PaginationProvider>                  
          </div>        
      );
  }

}



