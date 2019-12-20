import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Content extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    {/* <SignIn /> */}
                    <SignUp />
                    
                </div>
            </div >
        );
    }
}

