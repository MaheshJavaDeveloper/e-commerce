import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Dashboard/>
    </div>
  );
}

export default App;
