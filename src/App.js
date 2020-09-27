import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateLessComponent from './components/StateLessComponent';
import StateFulComponent from './components/StateFulComponent';

function App() {
  return (
    <div>
      <StateLessComponent />
      <StateFulComponent />
    </div>
  );
}

export default App;
