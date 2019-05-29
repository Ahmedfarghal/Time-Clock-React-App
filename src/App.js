import React, { Component } from 'react';
import Clock from './Clock'
import './App.css'

document.body.setAttribute("style", "background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);");

export default class App extends Component {
  render(){
    return(
      <div>
              <Clock/>
      </div>
    )
  }
} 