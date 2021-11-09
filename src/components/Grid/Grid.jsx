import React, { Component } from 'react'
import "./grid.css"

export default class Grid extends Component {
    render() {
        const {basic, handleAddClick} = this.props
        return (
            <div className="container d-flex justify-content-center mt-4">
                <div className="row justify-content-center grid-height">{basic.map( (e,x) => (
                        <div className="colone" onClick={ () => {handleAddClick(x,y)}} key={x} id={x}>{e.map( (e,y) => (
                            <div className="circle ligne" key={y} id={y}></div>))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
