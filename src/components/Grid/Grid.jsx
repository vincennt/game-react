import React, { Component } from 'react'
import "./grid.css"

export default class Grid extends Component {
    render() {
        const {array} = this.props
        return (
            <div className="container">
                <div className="row justify-content-center">{array.map( (e,i) => (
                        <div className="circle ligne" key={i} id={i}>
                            <div className="colone col-1"></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
