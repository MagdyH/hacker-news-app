import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './routes/home';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.min.css'

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>

  );
}

export default App;
