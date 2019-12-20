import React from 'react';
import SideBox from '../containers/SideBar.jsx';
import TopNavBar from '../containers/TopNavBar.jsx';
import Content from '../containers/Content.jsx';

export default class MasterLayout extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <SideBox />
                <div className="main-panel">
                    <TopNavBar />
                    <Content />
                </div>                           
            </div>       
        );
    }
}