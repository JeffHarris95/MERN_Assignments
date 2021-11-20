import './App.css';
import { Router } from '@reach/router'
import React from 'react';
import HomeComponent from './components/HomeComponent';
import NumberWordComponent from './components/NumberWordComponent';
import StyleComponent from './components/StyleComponent';
function App() {
  return (
    <div className="App">
      <Router>
        <HomeComponent path="/home" />
        <NumberWordComponent path="/:id" />
        <StyleComponent path=":word/:text/:background" />
      </Router>
    </div>
  );
}

export default App;
