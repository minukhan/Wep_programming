import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import react from 'react';
import Products from './Products';
import {Button}from 'react-bootstrap';
import Rating from './Rating';

function App() {
  
  return(
    <div>
      <h1>2019250059 한민욱</h1>
      <Rating rating='1'/>
      <Rating rating='2'/>
      <Rating rating='3'/>
      <Rating rating='4'/>
      <Rating rating='5'/>
      
    </div>
  );
}

export default App;
