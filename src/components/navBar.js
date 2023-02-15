import React , { Component } from 'react';

export default class NavBar extends Component {
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">NewsMonkey</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.cumulations.com" target="_blank">Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.cumulations.com/about/">About us!</a>
            </li>
          </ul>
        </div>
      </nav>
      )
    }
  }
  