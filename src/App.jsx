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
      // player : 0,
      joueur: true,
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

  handleAddClick (x) {

    const newBasic = [...this.state.basic]

    const col = newBasic[x]

    const {joueur} = this.state

    if(joueur){
      this.setState({
        // player : this.state.player+=1
        joueur : false,
        basic : newBasic,
      })  
    }
    else if (!joueur){
      this.setState({
        // player : this.state.player+=1
        basic : newBasic,
        joueur : true
      })  
    }

    for (let y=col.length-1; y>=0; y--) {
      if (newBasic[x][y] === 0) {
        (this.state.joueur1)
        ? newBasic[x][y] = 1
        : newBasic[x][y] = 2
        break;
      }
    }
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
        <Grid basic={this.state.basic} handleAddClick={this.handleAddClick} player={this.state.joueur}/>
      </>
    )
  }
}
