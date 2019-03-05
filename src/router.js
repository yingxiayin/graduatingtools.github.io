import React from 'react'
import { HashRouter, Route, } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Feedback from './pages/Feedback';

export default class Router extends React.Component{

  render(){

    return (
      <HashRouter>
        <App>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/feedback" component={Feedback}/>
        </App>
      </HashRouter>
    );
  }
}