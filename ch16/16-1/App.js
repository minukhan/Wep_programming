import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import Products from './Products';
import {Button}from 'react-bootstrap';

function App() {
  return (
    <div>
      <h1>
        2019250059 한민욱 <br/>
      </h1>
      <Products/>
      <Button>default</Button>
    </div>
  );
}

export default App;
