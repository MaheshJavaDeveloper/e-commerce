import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Card from './components/Card/Card';

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />       
      </div>

      <Routes>
        <Route  path='/' element={< Dashboard />}></Route>
        <Route  path='/products' element={< Dashboard />}></Route>
        <Route  path='/newproduct' element={< CreateProduct />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
