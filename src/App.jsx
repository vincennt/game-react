import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header/Header'
import Player from './components/Player/Player'
import Grid from './components/Grid/Grid'
import Reset from './components/Reset/Reset'
import Accueil from './components/Accueil/Accueil'

import './App.css'

export default class App extends Component {

  constructor(){
    super()

    this.state = {
      player1 : 0,
      player2: 0,
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
      namePlayer1: "",
      namePlayer2:"",
      start: false,
      error: false
    }

    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleResetGrid = this.handleResetGrid.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNameChangeBis = this.handleNameChangeBis.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.homeClick = this.homeClick.bind(this)
  }

  //fonction Restart
  handleResetGrid (e) {
    const resetBasic =  [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ]

    this.setState({
      basic: resetBasic,
      player1 : 0,
      player2 : 0,
      joueur : true
    })
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
            player1 : this.state.player1 += 1,
          })  
          break;
        }
        else if (!joueur){
          newBasic[x][y] = 2
          this.setState({
            joueur : true,
            basic : newBasic,
            player2 : this.state.player2 += 1,
          })  
          break;
        }
      }  
    }
    // condition win vertical
    for (let col = 0; col < newBasic.length ; col++) {
     for (let ligne = 0; ligne < newBasic.length; ligne++) {
       if (newBasic[col][ligne] === 1 && newBasic[col][ligne+1] ===1 && newBasic[col][ligne+2]===1 && newBasic[col][ligne+3]===1 ){
         alert(`${this.state.namePlayer1} Won !`)
         break;
       }
       else if (newBasic[col][ligne] === 2 && newBasic[col][ligne+1] ===2 && newBasic[col][ligne+2]===2 && newBasic[col][ligne+3]===2 ){
         alert(`${this.state.namePlayer2} Won !`)
         break;
       }
       else if(this.state.player1 && this.state.player2 === 21){
        setTimeout( () => {
          this.handleResetGrid()
        },3000)
      }
     }
      
    }
    //condition win horizontal
  for (let col = 0; col < newBasic.length; col++) {
     for (let ligne = 0; ligne < newBasic.length; ligne++) {
       if (newBasic[col][ligne] === 1 && newBasic[col+1][ligne]===1&&newBasic[col+2][ligne]===1&&newBasic[col+3][ligne]===1 ){
         alert(`${this.state.namePlayer1} Won !`)
         break;
       }
        else if (newBasic[col][ligne] === 2 && newBasic[col+1][ligne]===2&&newBasic[col+2][ligne]===2&&newBasic[col+3][ligne]===2 ){
          alert(`${this.state.namePlayer2} Won !`)
          break;        
       }
     }
    }
    //diagonal reverse
     for (let col = 0; col < newBasic.length; col++) {
     for (let ligne = 0; ligne < newBasic.length; ligne++) {
       if (newBasic[col][ligne] === 1 && newBasic[col+1][ligne+1]===1 && newBasic[col+2][ligne+2] === 1&&newBasic[col+3][ligne+3] === 1 ){
         alert(`${this.state.namePlayer1} Won !`)
         break;
       }
        else if (newBasic[col][ligne] === 2 && newBasic[col+1][ligne+1]===2&&newBasic[col+2][ligne+2]===2&&newBasic[col+3][ligne+3]===2 ){
          alert(`${this.state.namePlayer2} Won !`)
         break;
       }
     }
    }
    // diagonale 
     for (let col = 0; col < newBasic.length; col++) {
     for (let ligne = 0; ligne < newBasic.length; ligne++) {
       if (newBasic[col][ligne] === 1 && newBasic[col+1][ligne-1]===1&&newBasic[col+2][ligne-2]===1&&newBasic[col+3][ligne-3]===1 ){
         alert()
         break;
       }
        else if (newBasic[col][ligne] === 2 && newBasic[col+1][ligne-1]===2&&newBasic[col+2][ligne-2]===2&&newBasic[col+3][ligne-3]===2 ){
          alert(`${this.state.namePlayer2} Won !`)
         break;
       }
     }
    }
  }

  homeClick (){
    this.setState({
      start : false
    })
  }

  handleNameChange(e) {
    this.setState({ namePlayer1: e.target.value })
  }

  handleNameChangeBis(e) {
    this.setState({ namePlayer2: e.target.value })
  }
  
  handleButton(){
    if(this.state.namePlayer1.length >= 1 && this.state.namePlayer2.length >= 1
      && this.state.namePlayer1.length <=8 && this.state.namePlayer2.length <=8 ){
      this.setState({ start: true })
    }else {
      this.setState({error: true})
    }
  }
 
  render() {

    console.log(this.state.basic)
    console.log(this.state.joueur);

    console.log(`Player 1 : ${this.state.player1}`);
    console.log(`Player 2 : ${this.state.player2}`);
    return (
      <>
        {/* <div>
          <h2>Règles du jeu</h2>
          <p>Le but du jeu est d'aligner une suite de 4 pions de même couleur sur une grille comptant 6 rangées et 7 colonnes. Chaque joueur dispose de 21 pions d'une couleur (par convention, en général jaune ou rouge). Tour à tour, les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors jusqu'à la position la plus basse possible dans la dite colonne à la suite de quoi c'est à l'adversaire de jouer. Le vainqueur est le joueur qui réalise le premier un alignement (horizontal, vertical ou diagonal) consécutif d'au moins quatre pions de sa couleur. Si, alors que toutes les cases de la grille de jeu sont remplies, aucun des deux joueurs n'a réalisé un tel alignement, la partie est déclarée nulle.</p>
          <Start />
        </div>
         */}
        <Header title='Puissance 4'/>
      
        {this.state.start ?  
        <>
        <div id="players">

          <Player 
          number='1' 
          namePlayer={this.state.namePlayer1} 
          img='https://i.pravatar.cc/300' 
          joueur='player border border-3 border-warning'/>
         
         <Reset 
          handleClick={this.handleResetGrid}
          joueur={this.state.joueur}
          homeClick={this.homeClick}/>

          <Player 
          number='2' 
          namePlayer={this.state.namePlayer2}  
          img='https://i.pravatar.cc/301'  
          joueur='player border border-3 border-danger'/>

        </div>

        <div>

          <Grid 
          basic={this.state.basic} 
          handleAddClick={this.handleAddClick} 
          player={this.state.joueur}/>
          
        </div>
        </> :
        <>
        <div className="container">
          { this.state.error ? 
          <>
          <p className="text-light">Veuillez entrer un nom valide onegaigi ! :)</p> 
          <Accueil  
          handleNameChange={this.handleNameChange} 
          handleNameChangeBis={this.handleNameChangeBis} 
          namePlayer1={this.state.namePlayer1} 
          namePlayer2={this.state.namePlayer2} 
          handleButton={this.handleButton}
          /> 
          </>:
          <Accueil  
          handleNameChange={this.handleNameChange} 
          handleNameChangeBis={this.handleNameChangeBis} 
          namePlayer1={this.state.namePlayer1} 
          namePlayer2={this.state.namePlayer2} 
          handleButton={this.handleButton}
          />
          }
        </div>
        </>
        }
        </>
        )
      }
    }
