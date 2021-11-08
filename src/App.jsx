import React, { Component } from 'react'

import Player from './components/Player/Player';
import Grid from './components/Grid/Grid';
import Header from './components/header/Header';

import './App.css'
export default class App extends Component {
  render() {
    return (
      <>
          <Header title='Puissance 4'/>
        <div id="players">
        <Player number='1'/>
        <Player number='2'/>
        </div>
        <Grid/>
      </>
    )
  }
}
