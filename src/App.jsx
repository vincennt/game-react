import React, { Component } from 'react'

import Player from './components/Player/Player';
import Grid from './components/Grid/Grid';
import Header from './components/header/Header';

import './App.css'
export default class App extends Component {

  constructor(){
    super()

    this.state = {
      joueur1: true,
      basic : [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ],

    }

  }

  render() {
    return (
      <>
          <Header title='Puissance 4'/>
        <div id="players">
        <Player number='1'/>
        <Player number='2'/>
        </div>
        <Grid basic={this.state.basic}/>
      </>
    )
  }
}
