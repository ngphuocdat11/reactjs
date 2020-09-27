import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateLessComponent from './components/StateLessComponent';
import StateFulComponent from './components/StateFulComponent';
import Home from './baitapchiacomponent/Home';

function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFulComponent /> */}
      <Home />
    </div>
  );
}

export default App;
