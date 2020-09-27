import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateLessComponent from './components/StateLessComponent';
import StateFullComponent from './components/StateFullComponent';

function App() {
  return (
    <div>
      <StateLessComponent />
      <StateFullComponent />
    </div>
  );
}

export default App;
