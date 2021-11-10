import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header'
import Player from './components/Player/Player'
import Grid from './components/Grid/Grid'
import Reset from './components/Reset/Reset'

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
    this.handleResetGrid = this.handleResetGrid.bind(this)
  }

  handleResetGrid (e) {
    const newBasic =  [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ]

    this.setState({basic: newBasic})
  }
  
  handleAddClick(x) {
    
    const newBasic = [...this.state.basic]
    
    const col = newBasic[x]
    
    const {joueur} = this.state

    for (let y=col.length-1; y>=0; y--) {
      if (newBasic[x][y] === 0) {
        if(joueur){
          newBasic[x][y] = 1
          this.setState({
            joueur : false,
            basic : newBasic,
          })  
          break;
        }
        else if (!joueur){
          newBasic[x][y] = 2
          this.setState({
            joueur : true,
            basic : newBasic,
          })  
          break;
        }
      }
    }
  }
  
  render() {
    console.log(this.state.basic)
    console.log(this.state.joueur);
    return (
      <>
        <Header title='Puissance 4'/>
        <div id="players">
          <Player number='1' img='https://i.pravatar.cc/300'/>
          <Reset handleClick={this.handleResetGrid}/>
          <Player number='2' img='https://i.pravatar.cc/301'/>
        </div>
        <div>
          <Grid basic={this.state.basic} handleAddClick={this.handleAddClick} player={this.state.joueur}/>
        </div>
      </>
    )
  }
}
