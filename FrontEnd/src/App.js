import React from 'react';
import './App.css';
import MasterLayout from './components/layout/MasterLayout';
import LoginLayout from './components/layout/LoginLayout';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/(login)" component={LoginLayout} />
          <Route component={MasterLayout} />            
        </Switch>              
    </BrowserRouter>
  );
}

export default App;
