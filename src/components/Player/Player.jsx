import React, { Component } from 'react'

import './player.css'

export default class Player extends Component {

    render() {
        const {number, img} = this.props
        return (
            <div className='player'>
                <div style={{background :  `url("https://i.pravatar.cc/300?img=${Math.random()}") no-repeat center/cover`,
                 width : '45%', height : '100%'}}></div>
                <h2>Player {number}</h2>
            </div>
        )
    }
}



