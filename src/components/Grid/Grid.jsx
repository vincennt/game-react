import React, { Component } from 'react'
import "./grid.css"

export default class Grid extends Component {
    render() {
        const {basic} = this.props
        return (
            <div className="container">
                <div className="row justify-content-center">{basic.map( (e,i) => (
                        <div className="colone col-1" key={i} id={i}>{e.map( (e,i) => (
                            <div className="circle ligne" key={i} id={i}></div>))}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
