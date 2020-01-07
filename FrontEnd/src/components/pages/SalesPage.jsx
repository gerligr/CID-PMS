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
import {salesData} from '../data/salesData.js';

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: [1]
};

const salesDetails = (e)=> {   
    console.log(e.target);
    var { id} = e.target;
    console.log("See Details for Id: " + id);
    //hashHistory.push('/contacts/details/'+id);
};

const formatProductDetailsButtonCell =(cell, row)=>{  
    let clickHandler=salesDetails;
    var emptyContent = React.createElement('i',{id:row.id,onClick:clickHandler});			
    var aBtn = React.createElement('a',{id:row.id,className:"btnNtfcdDetails btn-action glyphicons eye_open btn-success", onClick:clickHandler}, emptyContent);
    return aBtn;	
}

const columns = [{
    dataField: 'id',
    text: 'Sales ID',
    sort: true
  }, {
    dataField: 'date',
    text: 'Date',
    sort: true
  }, {
    dataField: 'last_name',
    text: 'Last Name',
    sort: true
  }, {  
    dataField: 'team_code',
    text: 'Team Code',
    sort: true
  }, {  
    dataField: 'eur_per_h',
    text: 'Eur/h',
    sort: true
  }, {  
    dataField: 'pax_per_h',
    text: 'Pax/h',
    sort: true
  }, {    
    dataField: 'eur_per_pax',
    text: 'Eur/pax',
    sort: true
  }, {  
    dataField: 'action',    
    text:'Action',
    formatter: formatProductDetailsButtonCell
  }];


export default class SalesPage extends React.Component{  
    
    constructor(props) {
        super(props);     
    }

    render() {         
        return (
            <div className="row">
                <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-header-primary">
                    <h4 className="card-title ">Daily Sales</h4>
                    <p className="card-category"> Here is Your daily sales </p>
                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
                        {/* <table class="table"> */}
                        {/* <thead class=" text-primary"> */}
                        <BootstrapTable 
                            keyField='id' 
                            data={ salesData } 
                            columns={ columns } 
                            striped
                            hover
                            condensed                                        
                            selectRow={ selectRow } 
                            />
                            
                        {/* </table> */}
                    </div>
                    </div>
                </div>
                </div>
            </div>  
        );

    }
  
}

