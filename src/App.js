import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';
import QueHacemos from './QueHacemos'
import ComoLoHacemos from './ComoLoHacemos'
import Repertorio from './Repertorio'
import Contacto from './Contacto'


function App() {
  return (
        <Router>
          <div className="App">
            <Switch>
              <Route path="/comolohacemos">
                <Player/>
                <Sidebar/>   
                <ComoLoHacemos/>      
              </Route>
              <Route path="/repertorio">
                <Player/>
                <Sidebar/>   
                <Repertorio/>      
              </Route>
              <Route path="/contacto">
                <Player/>
                <Sidebar/>   
                <Contacto/>      
              </Route>
              <Route path="/">
                <Player/>
                <Sidebar/>   
                <QueHacemos/>      
              </Route>
            </Switch>
          </div>  
        </Router>
  );
}

export default App;

