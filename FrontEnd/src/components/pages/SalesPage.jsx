/**
 * See for docs:
 * https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html
 * https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook
 * 
 * Toolkit additional component
 * https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/search-props.html
 */

import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

/* import './SalesPage.css';  */

import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone  } from 'react-bootstrap-table2-paginator';

import {salesData} from '../data/salesData.js';

const {SearchBar} = Search;

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: [1]
};

const salesDetails = (e)=> {   
    //console.log(e.target);
    var { id} = e.target;
    console.log("See Details for Id: " + id);
    //hashHistory.push('/contacts/details/'+id);
};

const formatProductDetailsButtonCell =(cell, row)=>{  
    let clickHandler=salesDetails;
    var iTag = React.createElement('i',{id:row.id,onClick:clickHandler,className:'material-icons'},'comment');    		
    var aBtn = React.createElement('a',{id:row.id,className:"nav-link", onClick:clickHandler}, iTag);
    return aBtn;	
}

const columns = [{
    dataField: 'id',
    text: 'Sales ID',    
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
    dataField: 'last_name',
    text: 'Last Name',
    sort: true,
    headerStyle: {
      color: 'green',
      fontWeight: 500  
    }  
  }, {  
    dataField: 'team_code',
    text: 'Team Code',
    sort: true,
    headerStyle: {
      color: 'green',
      fontWeight: 500  
    }  
  }, {  
    dataField: 'eur_per_h',
    text: 'Eur/h',
    sort: true,
    headerStyle: {
      color: 'green',
      fontWeight: 500  
    }  
  }, {  
    dataField: 'pax_per_h',
    text: 'Pax/h',
    sort: true,
    headerStyle: {
      color: 'green',
      fontWeight: 500  
    }  
  }, {    
    dataField: 'eur_per_pax',
    text: 'Eur/pax',
    sort: true,
    headerStyle: {
      color: 'green',
      fontWeight: 500  
    }  
  }, {  
    dataField: 'action',    
    text:'Action',
    formatter: formatProductDetailsButtonCell,
    headerStyle: {
      color: 'green',
      fontWeight: 500  
    }  
  }];

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
      text: 'All', value: salesData.length
    }] 
  };

  export default class SalesPage extends React.Component{  
    
    constructor(props) {
        super(props);     
    }

    render() {         
        
          const contentTable = ({paginationProps, paginationTableProps}) => {

            return (
              <div>

              <ToolkitProvider
                keyField='id' 
                data={salesData}               
                columns={columns}
                search 
              >

                {
                  (toolkitprops) => {
                    
                    return (
                    <div>
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
                            {/* <p className="card-category"> Here is Your daily sales </p> */}
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



