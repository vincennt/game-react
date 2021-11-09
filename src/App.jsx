import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header'
import Player from './components/Player/Player'
import Grid from './components/Grid/Grid'

import './App.css'

export default class App extends Component {

  constructor(){
    super()

    this.state = {
      joueur1: true,
      basic : [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
      ],

    }

    this.handleAddClick = this.handleAddClick.bind(this)

  }

  handleAddClick (x,y) {

    const newBasic = [...this.state.basic]

    newBasic[x][y] = 1 

    this.setState({
      basic : newBasic,
      joueur1 : false
    })
  }

  render() {
    console.log(this.state.basic);
    return (
      <>
        <Header title='Puissance 4'/>
        <div id="players">
        <Player number='1'/>
        <Player number='2'/>
        </div>
        <Grid basic={this.state.basic} handleAddClick={this.handleAddClick}/>
      </>
    )
  }
}
