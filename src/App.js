import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './components/MyRouter';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyRouter />
      </div>
    )
  }
}

export default App;
