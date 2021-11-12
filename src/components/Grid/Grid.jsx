import React, { Component } from 'react'
import "./grid.css"

export default class Grid extends Component {
    render() {
        const {basic, handleAddClick, joueur} = this.props
        return (

            // Affichage de la grille du Puissance 4 

            <div className="container d-flex justify-content-center mt-4">
                <div className="row justify-content-center grid-height">{basic.map( (e,x) => (

                        <div className="colone" 
                        onClick={ () => {handleCount()}}
                        key={x} id={x}>{e.map( (e,y) => (

                            <div className="circle ligne" 
                                style={{backgroundColor : `${e === 1 ? '#F3E914' : `${e === 2 ? '#E10000' : ''}`}`}}
                                onClick={ () => {handleAddClick(x,y)}} key={y} id={y}></div>))}

                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
