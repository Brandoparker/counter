import React, { Component, } from 'react';
import './App.css';
import Counter from './Components/Counter'

const App = () => {
  return (
    <div>
    <Counter name="Red" />
    <Counter name="Green" />
    <Counter name="Blue" />
    <Counter name="Purple" />
    </div>
    
   
  )
}

export default App;