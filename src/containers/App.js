import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {configureStore} from "../store";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {connect} from "react-redux";
import Navbar from "./navbar";
import Main from "./Main";
import LandingPage from "../components/LandingPage";
import {setAuthorizationToken, setCurrentUser} from "../store/actions/auth";

import HomePage from "../components/HomePage";

const store = configureStore();

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  try {
    //prevent someone from manually tampering with the key of jwtoken in localStorage
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(e) {
    store.dispatch(setCurrentUser({}))
  }
}

const App = () => {
  return(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/landing" component={LandingPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
          
      </Router>
    </Provider>
  )
}

export default App
