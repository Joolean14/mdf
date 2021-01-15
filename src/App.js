import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
// import Player from './Player';
// import QueHacemos from './QueHacemos'
// import ComoLoHacemos from './ComoLoHacemos'
// import Repertorio from './Repertorio'
// import Contacto from './Contacto'
// import Calculadora from './Calculadora';


function App() {
  return (
        <Router>
          <div className="App">
            <Switch>
            <Route path="/">
                {/* <Player/> */}
                <Sidebar/>   
                {/* <Calculadora/>       */}
              </Route>
              {/* <Route path="/comolohacemos">
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
              </Route> */}
            </Switch>
          </div>  
        </Router>
  );
}

export default App;


// components - contacto - (contacto js - contacto css)
// SASS
// Material UI - responsive - grid component, hacer las otras vistas
// fonts
// arrow function
// handlechange para - en musicos
// https://reactjs.org/docs/hooks-reference.html useState - useEffect - useRef

