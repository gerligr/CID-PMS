import React from 'react';
import SignIn from '../panels/SignIn';
import SignUp from '../panels/SignUp';


export default class Content extends React.Component{    

    constructor(props) {
        super(props);       
    }     

    
    render() {         
        return (
            <div className="content">
                <div className="container-fluid">
                    {/* <SignIn /> */}
                    {/* <SignUp /> */}              
                                  
                </div>
            </div >
        );
    }
}

