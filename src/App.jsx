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
      player : 0,
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
    // condition win vertical
    for (let col = 0; col < newBasic.length ; col++) {
     for (let ligne = 0; ligne < newBasic.length; ligne++) {
       if (newBasic[col][ligne] === 1 && newBasic[col][ligne+1] ===1 && newBasic[col][ligne+2]===1 && newBasic[col][ligne+3]===1 ){
         alert('vertical yellow')
       }
       else if (newBasic[col][ligne] === 2 && newBasic[col][ligne+1] ===2 && newBasic[col][ligne+2]===2 && newBasic[col][ligne+3]===2 ){
         alert('vertical red')
       }
     }
      
    }
    //condition win horizontal
  for (let col = 0; col < newBasic.length; col++) {
     for (let ligne = 0; ligne < newBasic.length; ligne++) {
       if (newBasic[col][ligne] === 1 && newBasic[col+1][ligne]===1&&newBasic[col+2][ligne]===1&&newBasic[col+3][ligne]===1 ){
         alert('h yellow')
       }
        if (newBasic[col][ligne] === 2 && newBasic[col+1][ligne]===2&&newBasic[col+2][ligne]===2&&newBasic[col+3][ligne]===2 ){
          alert('h red')
        
       }
     }
    }
    // diagonale 
     for (let col = 0; col < newBasic.length; col++) {
     for (let ligne = 0; ligne < newBasic.length; ligne++) {
       if (newBasic[col][ligne] === 1 && newBasic[col+1][ligne-1]===1&&newBasic[col+2][ligne-2]===1&&newBasic[col+3][ligne-3]===1 ){
         alert('diag  yellow')
       }
        if (newBasic[col][ligne] === 2 && newBasic[col+1][ligne-1]===2&&newBasic[col+2][ligne-2]===2&&newBasic[col+3][ligne-3]===2 ){
          alert('diag red')
        
       }
     }
    }
    
  }
 


  render() {
    console.log(this.state.joueur);
    return (
      <>
        <Header title='Puissance 4'/>
        <div id="players">
        <Player number='1' img='https://i.pravatar.cc/300'/>
        <Player number='2' img='https://i.pravatar.cc/301'/>
        </div>
        <Grid basic={this.state.basic} handleAddClick={this.handleAddClick} player={this.state.joueur}/>
      </>
    )
  }
}
