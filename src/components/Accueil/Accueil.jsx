import React, { Component } from 'react';


class Accueil extends Component {
    
    render() {
        const {  handleNameChange, handleNameChangeBis, handleButton } = this.props
        return (
        <>
        <div className="row">
            <div className="regles">
                <p>Le but du jeu est d'aligner une suite de 4 pions de même couleur sur une grille comptant 6 rangées et 7 colonnes. Chaque joueur dispose de 21 pions d'une couleur. Tour à tour, les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors jusqu'à la position la plus basse possible dans la dite colonne à la suite de quoi c'est à l'adversaire de jouer. Le vainqueur est le joueur qui réalise le premier un alignement (horizontal, vertical ou diagonal) consécutif d'au moins quatre pions de sa couleur. Si, alors que toutes les cases de la grille de jeu sont remplies, aucun des deux joueurs n'a réalisé un tel alignement, la partie est déclarée nulle.</p>
            </div>
            <div className="col-3">
                <label className="form-label text-light">Player 1</label>
                <input
                placeholder='8 caractères max'
                className="form-control mb-4 border border-4 border-warning" 
                type="text"
                onChange={handleNameChange}
                />
            </div>
        </div>
      
        <div className="row">
            <div className="col-3">
                <label className="form-label text-light">Player 2</label>
                <input
                placeholder='8 caractères max'
                className="form-control mb-4 border border-4 border-danger"
                type="text"
                onChange={handleNameChangeBis}
                />
            </div>
        </div>
       
        <div className="row">
            <div>
                <button 
                className="btn btn-primary"
                type="button"
                onClick={() => handleButton()}
                >
                Start
                </button>
            </div>
        </div>
        </>
        );
    }
}

export default Accueil;