import React, { Component } from 'react'

import './player.css'

class Player extends Component {

    render() {

        const {number, img} = this.props
        
        return (

            // Return chaque player avec son nom et son avatar
            <div className='player'>
                <div style={{background :  `url(${img}) no-repeat center/cover`,
                 width : '45%', height : '100%'}}></div>
                <h2>Player {number} </h2>
            </div>
        )
    }
}
export default Player