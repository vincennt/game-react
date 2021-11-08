import React, { Component } from 'react'
import Player from './components/Player/Player';
import Grid from './components/Grid/Grid';

import './App.css'
export default class App extends Component {
  render() {
    return (
      <>
        {/* <h1>hello</h1> */}
        <div id="players">
        <Player number='1'/>
        <Player number='2'/>
        </div>
        <Grid/>
      </>
    )
  }
}
