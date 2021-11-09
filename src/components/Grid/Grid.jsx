import React, { Component } from 'react'
import "./grid.css"

export default class Grid extends Component {
    render() {
        const {basic} = this.props
        return (
            <div className="container d-flex justify-content-center mt-4">
                <div className="row justify-content-center grid-height">{basic.map( (e,i) => (
                        <div className="colone " key={i} id={i}>{e.map( (e,i) => (
                            <div className="circle ligne" key={i} id={i}></div>))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
