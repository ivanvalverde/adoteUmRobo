import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import Header from './components/Header/index';
import Footer from './components/Footer/index';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <Header />

          <Route></Route>

          <Route></Route>

          <Footer />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
