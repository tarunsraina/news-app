
import './App.css';
import NavBar from './components/navBar';
import React , { Component } from 'react';
import News from './components/News';
export default class App extends Component {

  render(){
    return(
    <div>
        <NavBar />
        <News />
    </div>
    )
  }
}

